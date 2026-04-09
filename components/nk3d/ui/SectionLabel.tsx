import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  center?: boolean;
  onDark?: boolean;
}

export function SectionLabel({ children, center, onDark }: SectionLabelProps) {
  return (
    <p className={`font-eurostile-extended font-bold text-[11px] tracking-[0.2em] uppercase mb-2.5 ${onDark ? "text-orange/90" : "text-orange"} ${center ? "text-center" : "text-left"}`}>
      {children}
    </p>
  );
}