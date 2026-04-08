import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  center?: boolean;
}

export function SectionLabel({ children, center }: SectionLabelProps) {
  return (
    <p className={`font-eurostile-extended font-bold text-[11px] tracking-[0.2em] uppercase text-orange mb-2.5 ${center ? "text-center" : "text-left"}`}>
      {children}
    </p>
  );
}