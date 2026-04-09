
"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function FormationUploader() {
  const [status, setStatus] = useState<Status>("idle");
  const [filename, setFilename] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    if (!file.name.endsWith(".docx")) {
      setErrorMsg("Seuls les fichiers .docx sont acceptés.");
      setStatus("error");
      return;
    }

    setFilename(file.name);
    setStatus("loading");
    setErrorMsg("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/generate-pdf", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Erreur serveur");
      }

      // Déclencher le téléchargement
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      // Récupérer le nom depuis le header Content-Disposition si dispo
      const disposition = res.headers.get("Content-Disposition");
      const match = disposition?.match(/filename="(.+?)"/);
      a.download = match?.[1] ?? "formation.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      setStatus("success");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erreur inconnue";
      setErrorMsg(message);
      setStatus("error");
    }
  }

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }

  function onDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  }

  function reset() {
    setStatus("idle");
    setFilename("");
    setErrorMsg("");
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl">

        {/* Logo / Marque */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold tracking-[3px] text-[#E8760A] uppercase mb-1">
            Nicolas Kreutz · 3D Formation
          </p>
          <h1 className="text-2xl font-bold text-[#1B2B5E]">
            Générateur de programme PDF
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Dépose un fichier Word — le PDF mis en forme est généré automatiquement.
          </p>
        </div>

        {/* Zone de drop */}
        {status === "idle" || status === "error" ? (
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={onDrop}
            onClick={() => inputRef.current?.click()}
            className={`
              border-2 border-dashed rounded-xl p-12 text-center cursor-pointer
              transition-all duration-200
              ${isDragging
                ? "border-[#E8760A] bg-orange-50 scale-[1.01]"
                : "border-gray-300 bg-white hover:border-[#E8760A] hover:bg-orange-50"
              }
            `}
          >
            <input
              ref={inputRef}
              type="file"
              accept=".docx"
              className="hidden"
              onChange={onInputChange}
            />

            {/* Icône */}
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-[#E8760A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            <p className="text-sm font-semibold text-[#1B2B5E] mb-1">
              Glisse ton fichier ici
            </p>
            <p className="text-xs text-gray-400">
              ou <span className="text-[#E8760A] underline">parcourir</span> — .docx uniquement
            </p>

            {status === "error" && (
              <div className="mt-4 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                {errorMsg}
              </div>
            )}
          </div>
        ) : null}

        {/* Chargement */}
        {status === "loading" && (
          <div className="bg-white border border-gray-200 rounded-xl p-12 text-center shadow-sm">
            <div className="w-12 h-12 mx-auto mb-4 border-4 border-orange-100 border-t-[#E8760A] rounded-full animate-spin" />
            <p className="text-sm font-semibold text-[#1B2B5E] mb-1">
              Génération en cours…
            </p>
            <p className="text-xs text-gray-400 font-mono">{filename}</p>
          </div>
        )}

        {/* Succès */}
        {status === "success" && (
          <div className="bg-white border border-gray-200 rounded-xl p-12 text-center shadow-sm">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-[#1B2B5E] mb-1">
              PDF téléchargé !
            </p>
            <p className="text-xs text-gray-400 mb-6 font-mono">{filename}</p>
            <button
              onClick={reset}
              className="px-5 py-2 bg-[#E8760A] text-white text-sm font-semibold rounded-lg hover:bg-orange-700 transition-colors"
            >
              Générer un autre PDF
            </button>
          </div>
        )}

        <p className="text-center text-xs text-gray-400 mt-6">
          Le fichier est traité localement — aucune donnée n'est conservée.
        </p>
      </div>
    </div>
  );
}