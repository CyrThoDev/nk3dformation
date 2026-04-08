import { TESTIMONIALS } from "../constants";
import { Container } from "../ui/Container";
import { MeshDeco } from "../ui/MeshDeco";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";

export function Testimonials() {
  return (
    <section className="bg-bg py-14 md:py-20 lg:py-28 relative overflow-hidden">
      <MeshDeco className="absolute -top-5 -right-10 opacity-20" />
      <Container>
        <div className="text-center mb-14">
          <SectionLabel center>Témoignages</SectionLabel>
          <SectionTitle center>Ce que disent nos stagiaires</SectionTitle>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border p-7 shadow-[0_2px_12px_rgba(10,45,92,0.05)]"
            >
              {/* Étoiles */}
              <div className="flex gap-1 mb-4">
                {Array(5).fill(0).map((_, s) => (
                  <span key={s} className="text-orange text-[14px]">★</span>
                ))}
              </div>

              {/* Texte */}
              <p className="font-montserrat text-[13px] leading-[1.8] text-text-md mb-5 italic">
                « {t.text} »
              </p>

              {/* Auteur */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-navy to-navy-mid flex items-center justify-center font-montserrat font-bold text-[11px] text-white shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-montserrat font-bold text-[13px] text-navy m-0">{t.name}</p>
                  <p className="font-montserrat text-[11px] text-text-lt m-0">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}