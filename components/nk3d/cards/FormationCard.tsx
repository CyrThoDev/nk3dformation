import Link from "next/link";
import type { SanityFormationCard } from "@/types/sanity";


export function FormationCard({ formation }: { formation: SanityFormationCard }) {
  const inner = (
    <div className="h-full rounded-xl p-4 px-5 flex flex-col justify-between gap-3 border bg-white border-border shadow-[0_1px_4px_rgba(10,45,92,0.05)] transition hover:border-orange/40 hover:shadow-[0_4px_16px_rgba(232,118,42,0.1)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="font-eurostile-extended text-[11px] font-bold text-orange tracking-widest uppercase mb-1">
            {formation.code}
          </div>
          <div className="font-montserrat text-base font-medium text-text leading-[1.4]">
            {formation.titre}
          </div>
          {formation.categorieLabel && (
            <div className="font-montserrat text-[11px] text-text-lt mt-1">
              {formation.categorieLabel}
            </div>
          )}
        </div>
        {formation.days && (
          <div className="flex items-center gap-1 bg-orange-lt border border-orange/30 rounded-full py-1 px-2.5 text-orange font-montserrat text-[11px] font-semibold shrink-0">
            <div>{formation.days}</div>j
          </div>
        )}
      </div>

      {formation.hasContent && (
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="font-montserrat text-[11px] font-semibold text-text-lt group-hover:text-orange transition-colors uppercase tracking-wide">
            Voir le programme
          </span>
          <span className="text-text-lt group-hover:text-orange transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </span>
        </div>
      )}
    </div>
  );

  if (!formation.hasContent) {
    return <div className="block h-full">{inner}</div>;
  }

  return (
    <Link href={`/formations/${formation.slug}`} className="block h-full group">
      {inner}
    </Link>
  );
}
