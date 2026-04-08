"use client";

import { useState } from "react";
import type { Formation } from "@/types/formation";
import { IconClock } from "../ui/Icons";

export function FormationCard({ formation }: { formation: Formation }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="block h-full">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`
          h-full rounded-[10px] p-4 px-5
          flex items-start justify-between gap-4
          border transition-all duration-200
          ${hovered
            ? "bg-navy-lt border-orange shadow-[0_6px_20px_rgba(232,118,42,0.10)] -translate-y-0.5"
            : "bg-white border-border shadow-[0_1px_4px_rgba(10,45,92,0.05)]"
          }
        `}
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
            <div className="flex items-center gap-1.5 bg-orange-lt border border-orange/30 rounded-full py-1 px-2.5 text-orange font-montserrat text-[11px] font-semibold">
              <IconClock />{formation.days}j
            </div>
          )}
        </div>
      </div>
    </div>
  );
}