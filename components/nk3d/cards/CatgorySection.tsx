"use client";

import { useState, useEffect } from "react";
import type { CategorieFormation } from "@/types/formation";
import type { SanityFormationCard } from "@/types/sanity";
import { IconChevron } from "../ui/Icons";
import { FormationCard } from "./FormationCard";

interface CategoryGroup {
  id: CategorieFormation;
  label: string;
  tag: string;
  formations: SanityFormationCard[];
}

export function CategorySection({ category }: { category: CategoryGroup; index: number }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024 && category.id === "3dexperience") {
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

        <div className="flex items-center gap-3">
          <span className="bg-orange-lt border border-orange/30 rounded-full py-1 px-3 text-orange text-[12px] font-montserrat font-semibold whitespace-nowrap">
            {category.formations.length} formation{category.formations.length > 1 ? "s" : ""}
          </span>
          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-white text-text-lt shadow-sm transition-transform duration-250 ${open ? "rotate-180" : ""}`}>
            <IconChevron className="h-4 w-4" />
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