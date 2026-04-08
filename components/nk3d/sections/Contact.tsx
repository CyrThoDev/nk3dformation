"use client";

import { useState } from "react";
import { Container } from "../ui/Container";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";
import { IconCheck } from "../ui/Icons";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nom: "", email: "", formation: "", message: "" });
  const handleSubmit = () => { if (form.nom && form.email) setSent(true); };

  const inputClass = "w-full bg-bg border border-border rounded-lg py-3 px-4 text-text text-[14px] font-montserrat outline-none focus:border-orange transition-colors";

  return (
    <section id="contact" className="bg-bg py-[88px]">
      <Container className="max-w-[700px]">
        <div className="text-center mb-10">
          <SectionLabel center>Nous contacter</SectionLabel>
          <SectionTitle center>Demande de formation</SectionTitle>
          <p className="font-montserrat text-[15px] text-text-md leading-[1.6]">
            Précisez votre besoin, nous revenons vers vous sous 48h.
          </p>
        </div>

        {sent ? (
          <div className="bg-orange-lt border border-orange/40 rounded-2xl p-10 text-center">
            <div className="text-[40px] mb-4">✅</div>
            <div className="font-montserrat text-[24px] font-bold text-navy">Message envoyé !</div>
            <div className="font-montserrat text-[14px] text-text-md mt-2">Nicolas vous répondra sous 48h.</div>
          </div>
        ) : (
          <div className="bg-white border border-border rounded-2xl p-10 flex flex-col gap-5 shadow-[0_4px_24px_rgba(10,45,92,0.07)]">
            {[
              { key: "nom",       label: "Nom & Prénom",        type: "text",  placeholder: "Jean Dupont" },
              { key: "email",     label: "Email professionnel",  type: "email", placeholder: "jean.dupont@entreprise.fr" },
              { key: "formation", label: "Formation souhaitée",  type: "text",  placeholder: "Ex. CATIA V5 fondamentaux (V5F)" },
            ].map(({ key, label, type, placeholder }) => (
              <div key={key}>
                <label className="block font-montserrat text-[11px] font-semibold text-text-md tracking-[0.06em] uppercase mb-2">
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={(form as any)[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className={inputClass}
                />
              </div>
            ))}
            <div>
              <label className="block font-montserrat text-[11px] font-semibold text-text-md tracking-[0.06em] uppercase mb-2">
                Message (optionnel)
              </label>
              <textarea
                placeholder="Précisez votre contexte, niveau actuel, nombre de participants..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className={`${inputClass} resize-y`}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-navy border-none cursor-pointer text-white text-[14px] font-montserrat font-bold tracking-[0.06em] uppercase py-4 px-8 rounded-lg flex items-center justify-center gap-2 hover:bg-navy-mid transition-all shadow-[0_4px_16px_rgba(10,45,92,0.2)]"
            >
              <IconCheck /> Envoyer ma demande
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}