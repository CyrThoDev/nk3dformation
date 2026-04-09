import type { Formation } from "@/types/formation";
import { IconClock } from "../ui/Icons";

export function FormationCard({ formation }: { formation: Formation }) {
  return (
    <div className="block h-full">
      <div
        className="h-full rounded-xl p-4 px-5 flex items-start justify-between gap-4 border bg-white border-border shadow-[0_1px_4px_rgba(10,45,92,0.05)]"
      >
        <div className="flex-1">
          <div className="font-eurostile-extended text-[11px] font-bold text-orange tracking-[0.1em] uppercase mb-1">
            {formation.code}
          </div>
          <div className="font-montserrat text-[14px] font-medium text-text leading-[1.4]">
            {formation.titre}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {formation.days && (
            <div className="flex items-center gap-1 bg-orange-lt border border-orange/30 rounded-full py-1 px-2.5 text-orange font-montserrat text-[11px] font-semibold">
              <div>{formation.days}</div>j
            </div>
          )}
        </div>
      </div>
    </div>
  );
}