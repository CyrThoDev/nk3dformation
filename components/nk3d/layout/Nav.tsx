"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "formations", target: "formations" },
  { label: "méthode", target: "méthode" },
  { label: "contact", target: "contact" },
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
    <>
      <div className=" lg:hidden" />

      <nav
        className={[
          "fixed left-0 top-0 z-[100] w-full transition-all duration-300 lg:sticky lg:top-0",
          scrolled || mobileMenuOpen
            ? "border-b border-border bg-white/95 shadow-[0_2px_16px_rgba(10,45,92,0.07)] backdrop-blur-[14px]"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className=" px-4 lg:px-0 py-2  max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/images/LOGO_COMBINE_FOND_CLAIR.svg"
                alt="NK3D Formation"
                width={250}
                height={50}
                className="h-16 w-auto lg:h-20"
                priority
              />
            </Link>

            {/* Desktop */}
            <div className="hidden items-center gap-8 lg:flex">
              <ul className="m-0 flex list-none gap-9 p-0">
                {NAV_ITEMS.map((item) => (
                  <li key={item.target}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.target)}
                      className="bg-transparent font-montserrat  font-medium capitalize text-text-md transition hover:text-navy"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="rounded-md bg-orange px-8 py-3 font-montserrat  font-bold text-white  transition hover:scale-[1.02]"
              >
                Demander un devis
              </button>
            </div>

            {/* Burger mobile/tablette */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-border bg-white lg:hidden"
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
                    "absolute left-0 top-1/2 h-[3px] w-8 rounded bg-navy -translate-y-1/2 transition-all duration-300 ease-in-out",
                    mobileMenuOpen ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 bottom-0 h-[3px] w-8 rounded bg-navy transition-all duration-300 ease-in-out",
                    mobileMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "",
                  ].join(" ")}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Panneau mobile / tablette indépendant */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div
              className="fixed inset-0 top-[88px] z-[90] bg-[rgba(10,27,46,0.18)]"
              onClick={() => setMobileMenuOpen(false)}
            />

            <div className="pointer-events-none fixed inset-x-0  z-[95]  ">
              <div className="mx-auto flex max-w-[1200px]  justify-end">
                <div
                  className="
                  flex
                  flex-col 
                  items-center
                  justify-center
                    pointer-events-auto
                    w-full
                    
                  h-screen
                    bg-navy-lt
                    p-6
                    
                    sm:max-w-[500px]
                    md:max-w-[600px]
                  "
                >
                  <ul className="m-0 flex list-none items-center flex-col gap-5 p-0">
                    {NAV_ITEMS.map((item) => (
                      <li key={item.target}>
                        <button
                          type="button"
                          onClick={() => scrollToSection(item.target)}
                          className="bg-transparent text-left font-montserrat text-[17px] font-semibold capitalize text-navy"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="mt-8 inline-flex items-center rounded-[10px] bg-orange px-5 py-3 font-montserrat  font-bold text-white "
                  >
                    Demander un devis
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}