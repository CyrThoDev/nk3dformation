import { FORMATIONS } from "@/data/formations";
import { CATEGORY_META } from "../constants";
import type { CategorieFormation } from "@/types/formation";
import { Container } from "../ui/Container";
import { MeshDeco } from "../ui/MeshDeco";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";
import { CategorySection } from "../cards/CatgorySection";

const CATEGORIES = Object.entries(CATEGORY_META)
  .sort(([, a], [, b]) => a.order - b.order)
  .map(([id, meta]) => ({
    id: id as CategorieFormation,
    label: meta.label,
    tag: meta.tag,
    formations: FORMATIONS.filter((f) => f.categorie === id),
  }))
  .filter((cat) => cat.formations.length > 0);

export const FormationsSection = () => {
  return (
    <section
      id="formations"
      className="relative overflow-hidden bg-bg py-[88px] "
    >
      <MeshDeco className="absolute bottom-[-40px] left-[-60px] opacity-20" />

      <Container className="max-w-7xl mx-auto">
        <div className="mb-14">
          <SectionLabel>
            Catalogue complet — {FORMATIONS.length} formations
          </SectionLabel>

          <SectionTitle>
            Nos <span className="text-orange">formations</span>
          </SectionTitle>

          <p className="max-w-[500px] font-montserrat text-base leading-[1.6] text-text-md">
            Formations adaptées à tous les niveaux, du débutant à l'expert
            métier. Durées indicatives, ajustables selon vos besoins.
          </p>
        </div>

        {CATEGORIES.map((cat, i) => (
          <CategorySection key={cat.id} category={cat} index={i} />
        ))}
      </Container>
    </section>
  );
}