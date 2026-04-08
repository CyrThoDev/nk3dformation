import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  center?: boolean;
}

export function SectionTitle({ children, center }: SectionTitleProps) {
  return (
    <h2 className={`font-montserrat font-extrabold text-[clamp(26px,3vw,40px)] leading-[1.15] text-navy mb-3.5 ${center ? "text-center" : "text-left"}`}>
      {children}
    </h2>
  );
}