"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "FORMATIONS", target: "formations" },
  { label: "METHODE", target: "méthode" },
  { label: "CONSULTING", target: "consulting" },
  { label: "CONTACT", target: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={[
        "sticky top-0 z-[100] w-full transition-all duration-300",
        scrolled || mobileMenuOpen
          ? "border-b border-border bg-white/95 shadow-[0_2px_16px_rgba(10,45,92,0.07)] backdrop-blur-[14px]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 shrink items-center">
            <Image
              src="/images/LOGO_COMBINE_FOND_CLAIR.svg"
              alt="NK3D Formation"
              width={250}
              height={50}
              className="h-14 w-auto sm:h-16 md:h-18 lg:h-20"
              priority
            />
          </Link>

          {/* Desktop uniquement */}
          <div className="hidden items-center gap-8 lg:flex">
            <ul className="m-0 flex list-none gap-9 p-0">
              {NAV_ITEMS.map((item) => (
                <li key={item.target}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.target)}
                    className="bg-transparent font-montserrat font-medium capitalize text-navy transition decoration-2 underline-offset-4 hover:text-orange hover:underline"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="bg-orange px-8 py-3 font-montserrat font-semibold text-white transition hover:scale-[1.02]"
            >
              Demander un devis
            </button>
          </div>

          {/* Burger jusqu'à lg */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 shrink-0 items-center justify-center bg-white lg:hidden"
          >
            <div className="relative h-6 w-8">
              <span
                className={[
                  "absolute left-0 top-0 h-[3px] w-8 rounded bg-navy transition-all duration-300 ease-in-out",
                  mobileMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-1/2 h-[3px] w-8 -translate-y-1/2 rounded bg-navy transition-all duration-300 ease-in-out",
                  mobileMenuOpen ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute bottom-0 left-0 h-[3px] w-8 rounded bg-navy transition-all duration-300 ease-in-out",
                  mobileMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "",
                ].join(" ")}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Menu burger mobile + tablette */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-[90]"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-x-0 top-[80px] z-[95]">
            <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
              <div className="h-[calc(100vh-80px)] w-full bg-white p-6 flex flex-col items-center justify-center sm:max-w-105">
                <ul className="m-0 flex list-none flex-col items-center gap-5 p-0">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.target}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(item.target)}
                        className="bg-transparent text-center font-montserrat font-semibold capitalize text-navy"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="mt-8 flex items-center justify-center rounded bg-orange px-5 py-3 font-montserrat font-semibold text-white"
                >
                  Demander un devis
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}