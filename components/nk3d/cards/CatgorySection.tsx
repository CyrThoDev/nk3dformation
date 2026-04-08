"use client";

import { useState, useEffect } from "react";
import type { Formation, CategorieFormation } from "@/types/formation";
import { IconArrow } from "../ui/Icons";
import { FormationCard } from "./FormationCard";

interface CategoryGroup {
  id: CategorieFormation;
  label: string;
  tag: string;
  formations: Formation[];
}

export function CategorySection({ category }: { category: CategoryGroup; index: number }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024 && category.id === "catia-v5") {
      setOpen(true);
    }
  }, [category.id]);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-transparent border-none cursor-pointer py-6 flex items-center justify-between gap-4 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-[3px] h-7 bg-orange rounded-sm shrink-0" />
          <div>
            <div className="font-montserrat text-[20px] font-extrabold text-navy leading-none">
              {category.label}
            </div>
            <div className="font-eurostile-extended text-[12px] text-text-lt tracking-[0.08em] uppercase mt-1">
              {category.tag}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="bg-orange-lt border border-orange/30 rounded-full py-1 px-3 text-orange text-[12px] font-montserrat font-semibold">
            <span className="sm:hidden">{category.formations.length}</span>
            <span className="hidden sm:inline">{category.formations.length} formations</span>
          </span>
          <div className={`text-text-lt transition-transform duration-250 ${open ? "rotate-90" : ""}`}>
            <IconArrow />
          </div>
        </div>
      </button>

      {open && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] items-stretch gap-2.5 pb-7">
          {category.formations.map((f) => (
            <FormationCard key={f.slug} formation={f} />
          ))}
        </div>
      )}
    </div>
  );
}