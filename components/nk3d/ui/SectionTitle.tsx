import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  center?: boolean;
  onDark?: boolean;
}

export function SectionTitle({ children, center, onDark }: SectionTitleProps) {
  return (
    <h2 className={`font-montserrat font-extrabold text-[clamp(26px,3vw,40px)] leading-[1.15] mb-3.5 ${onDark ? "text-white" : "text-navy"} ${center ? "text-center" : "text-left"}`}>
      {children}
    </h2>
  );
}