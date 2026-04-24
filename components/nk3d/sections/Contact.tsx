"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";
import { IconCheck, IconPhone, IconMail } from "../ui/Icons";
import { urlFor } from "@/sanity/lib/image";
import type { SanitySettings } from "@/types/sanity";

type FormState = {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
  _honey: string;
};

const EMPTY: FormState = {
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  sujet: "",
  message: "",
  _honey: "",
};

const SUJETS = [
  { value: "Formation", label: "Demande d'information — Formation" },
  { value: "Consulting", label: "Demande d'information — Consulting" },
];

export function Contact({ settings }: { settings?: SanitySettings | null }) {
  const contactNom       = settings?.contactNom       ?? "Nicolas Kreutz";
  const contactTitre     = settings?.contactTitre     ?? "Formateur indépendant sur CATIA V5, 3DEXPERIENCE et CATIA COMPOSER";
  const contactEmail     = settings?.contactEmail     ?? "nicolas@nk3dformation.fr";
  const contactTelephone = settings?.contactTelephone ?? "+33 6 65 77 71 51";
  const photoSrc = settings?.contactPhoto
    ? urlFor(settings.contactPhoto).width(320).url()
    : "/images/nicolas.png";
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set =
    (k: keyof FormState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      setErrors((ev) => {
        const next = { ...ev };
        delete next[k];
        return next;
      });
    };

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!form.nom.trim()) errs.nom = "Requis";
    if (!form.prenom.trim()) errs.prenom = "Requis";
    if (!form.email.trim() && !form.telephone.trim()) {
      errs.contact = "Indiquez au moins un email ou un numéro de téléphone.";
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Email invalide";
    }
    if (!form.sujet) errs.sujet = "Requis";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm(EMPTY);
      } else {
        const data = await res.json();

        if (data.error) {
          console.error("API error:", data.error);
        }
        if (data.errors) {
          const map: Record<string, string> = {};
          (data.errors as string[]).forEach((msg: string) => {
            if (msg.includes("Nom")) map.nom = msg;
            else if (msg.includes("Prénom")) map.prenom = msg;
            else if (msg.includes("Email ou")) map.contact = msg;
            else if (msg.includes("Email")) map.email = msg;
            else if (msg.includes("Objet")) map.sujet = msg;
          });
          setErrors(map);
          setStatus("idle");
        } else {
          setStatus("error");
        }
      }
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full rounded-sm border bg-bg px-4 py-3 text-base text-text font-montserrat outline-none transition-colors";
  const inputCls = (k: string) =>
    `${inputBase} ${
      errors[k]
        ? "border-red-400 focus:border-red-500"
        : "border-border focus:border-orange"
    }`;

  if (status === "sent") {
    return (
      <section id="contact" className="bg-bg py-14 md:py-20 lg:py-28">
        <Container>
          <div className="rounded-2xl border border-orange/30 bg-orange/5 p-12 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange/10">
              <IconCheck className="h-6 w-6 text-orange" />
            </div>
            <h2 className="mb-2 font-montserrat text-[22px] font-bold text-navy">
              Message envoyé !
            </h2>
            <p className="font-montserrat text-base text-text-md">
             Je vous répondrai sous 48h.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 rounded border border-navy px-6 py-2.5 font-montserrat text-base font-semibold text-navy transition-all hover:bg-navy hover:text-white"
            >
              Envoyer une autre demande
            </button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-white  md:py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <SectionLabel center>Me contacter</SectionLabel>
            <SectionTitle center>Demande de formation</SectionTitle>
            <p className="mx-auto max-w-2xl font-montserrat text-base leading-[1.6] text-text-md">
              Précisez votre besoin, je reviendrai vers vous sous 48h.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            {/* Colonne gauche : Nicolas */}
          <div className="h-full rounded-none sm:rounded-2xl border border-border bg-bg p-6 md:p-8 shadow-[0_4px_24px_rgba(10,45,92,0.05)]">
  <div className="flex flex-col gap-6">

    {/* ── Header : photo + identité ── */}
    <div className="flex flex-col sm:flex-row lg:flex-row gap-5 items-center sm:items-start">

      {/* Image */}
      <div className="relative w-full max-w-[160px] aspect-[4/5] overflow-hidden rounded-sm border border-border bg-white shrink-0">
        <Image
          src={photoSrc}
          alt={`Photo de ${contactNom}`}
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>

      {/* Identité */}
      <div className="text-center sm:text-left">
        <p className="mb-2 font-montserrat text-base font-semibold uppercase tracking-[0.12em] text-orange">
          Votre interlocuteur
        </p>

        <h3 className="mb-2 font-montserrat text-[24px] md:text-[26px] font-bold leading-tight text-navy">
          {contactNom}
        </h3>

        <p className="font-montserrat text-base leading-6 text-text-md">
          {contactTitre}
        </p>
      </div>
    </div>

    {/* ── Description courte ── */}
    <p className="font-montserrat text-[15px] leading-7 text-text-md">
      J’accompagne les professionnels de l’industrie avec des formations
      concrètes, adaptées au niveau des participants et aux réalités du terrain.
    </p>

    {/* ── Points clés ── */}
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <span className="mt-[6px] h-2 w-2 rounded-full bg-orange shrink-0" />
        <p className="font-montserrat text-[15px] leading-6 text-text-md">
          Formations 100% sur mesure
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="mt-[6px] h-2 w-2 rounded-full bg-orange shrink-0" />
        <p className="font-montserrat text-[15px] leading-6 text-text-md">
          Présentiel ou distanciel
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="mt-[6px] h-2 w-2 rounded-full bg-orange shrink-0" />
        <p className="font-montserrat text-[15px] leading-6 text-text-md">
          Réponse sous 48h
        </p>
      </div>
    </div>

    {/* ── Coordonnées ── */}
    <div className="space-y-3 pt-2 border-t border-border">
      <a
        href={`tel:${contactTelephone.replace(/\s/g, "")}`}
        className="flex items-center gap-3 group"
      >
        <IconPhone className="h-4 w-4 shrink-0 text-orange" />
        <span className="font-montserrat text-base text-text-md group-hover:underline group-hover:text-navy transition-colors">
          {contactTelephone}
        </span>
      </a>
      <a
        href={`mailto:${contactEmail}`}
        className="flex items-center gap-3 group"
      >
        <IconMail className="h-4 w-4 shrink-0 text-orange" />
        <span className="font-montserrat text-base text-text-md group-hover:underline group-hover:text-navy transition-colors">
          {contactEmail}
        </span>
      </a>
    </div>

  </div>
</div>

            {/* Colonne droite : formulaire */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5 rounded-none sm:rounded-2xl border border-border bg-white p-8 shadow-[0_4px_24px_rgba(10,45,92,0.07)] md:p-10"
            >
              {/* Honeypot */}
              <div aria-hidden="true" className="hidden">
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  name="_honey"
                  value={form._honey}
                  onChange={set("_honey")}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-montserrat text-base font-semibold uppercase tracking-[0.06em] text-text-md">
                    Nom <span className="text-orange">*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="family-name"
                    placeholder="Dupont"
                    value={form.nom}
                    onChange={set("nom")}
                    className={inputCls("nom")}
                  />
                  {errors.nom && (
                    <p className="mt-1 font-montserrat text-base text-red-500">
                      {errors.nom}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-montserrat text-base font-semibold uppercase tracking-[0.06em] text-text-md">
                    Prénom <span className="text-orange">*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="given-name"
                    placeholder="Jean"
                    value={form.prenom}
                    onChange={set("prenom")}
                    className={inputCls("prenom")}
                  />
                  {errors.prenom && (
                    <p className="mt-1 font-montserrat text-base text-red-500">
                      {errors.prenom}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-montserrat text-base font-semibold uppercase tracking-[0.06em] text-text-md">
                    Email <span className="text-orange">*</span>
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="jean.dupont@entreprise.fr"
                    value={form.email}
                    onChange={set("email")}
                    className={inputCls("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 font-montserrat text-base text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-montserrat text-base font-semibold uppercase tracking-[0.06em] text-text-md">
                    Téléphone <span className="text-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    autoComplete="tel"
                    placeholder="+33 6 12 34 56 78"
                    value={form.telephone}
                    onChange={set("telephone")}
                    className={inputCls("telephone")}
                  />
                </div>
              </div>

              {errors.contact && (
                <p className="-mt-2 font-montserrat text-base text-red-500">
                  {errors.contact}
                </p>
              )}

              <div>
                <label className="mb-2 block font-montserrat text-base font-semibold uppercase tracking-[0.06em] text-text-md">
                  Objet de la demande <span className="text-orange">*</span>
                </label>
                <select
                  value={form.sujet}
                  onChange={set("sujet")}
                  className={`${inputCls(
                    "sujet"
                  )} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234A5568' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")] bg-[right_14px_center] bg-no-repeat`}
                >
                  <option value="" disabled>
                    Sélectionnez…
                  </option>
                  {SUJETS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                {errors.sujet && (
                  <p className="mt-1 font-montserrat text-base text-red-500">
                    {errors.sujet}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block font-montserrat text-base font-semibold uppercase tracking-[0.06em] text-text-md">
                  Message{" "}
                  <span className="normal-case font-normal text-text-lt">
                    (optionnel)
                  </span>
                </label>
                <textarea
                  placeholder="Précisez votre contexte, niveau actuel, nombre de participants…"
                  value={form.message}
                  onChange={set("message")}
                  rows={4}
                  className={`${inputBase} resize-y border-border focus:border-orange`}
                />
              </div>

              {status === "error" && (
                <p className="text-center font-montserrat text-base text-red-500">
                  Une erreur est survenue. Réessayez ou contactez directement Nicolas.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 rounded bg-navy px-8 py-4 font-montserrat text-base font-bold uppercase tracking-[0.06em] text-white shadow-[0_4px_16px_rgba(10,45,92,0.2)] transition-all hover:bg-navy-mid disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Envoi en cours…
                  </>
                ) : (
                <>
  <IconCheck className="w-4 h-4" />
  Envoyer ma demande
</>
                )}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}