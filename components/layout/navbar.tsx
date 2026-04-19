 "use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  key: "home" | "tours" | "gallery" | "about" | "contact";
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "tours", label: "Tours", href: "/tours" },
  { key: "gallery", label: "Gallery", href: "/gallery" },
  { key: "about", label: "About", href: "/about" },
  { key: "contact", label: "Contact", href: "/contact" },
];

type NavbarProps = {
  activeItem?: NavItem["key"];
};

export function Navbar({ activeItem }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-7xl px-6 py-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-headline text-2xl font-extrabold tracking-tight text-[var(--color-primary)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            The Coastal Curator
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const isActive = activeItem === item.key;

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-semibold transition",
                    isActive
                      ? "bg-slate-100 text-[var(--color-primary)]"
                      : "text-slate-600 hover:bg-slate-100 hover:text-[var(--color-primary)]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="#"
            className="hidden rounded-full bg-[linear-gradient(135deg,#003e6f_0%,#005696_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0px_10px_24px_rgba(0,62,111,0.24)] transition hover:-translate-y-0.5 md:inline-flex"
          >
            WhatsApp
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="rounded-lg p-2 text-[var(--color-primary)] md:hidden"
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 space-y-2 rounded-xl border border-slate-200 bg-white p-3 md:hidden">
            {navItems.map((item) => {
              const isActive = activeItem === item.key;

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={[
                    "block rounded-lg px-3 py-2 text-sm font-semibold transition",
                    isActive
                      ? "bg-slate-100 text-[var(--color-primary)]"
                      : "text-slate-600 hover:bg-slate-100 hover:text-[var(--color-primary)]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 inline-flex w-full justify-center rounded-full bg-[linear-gradient(135deg,#003e6f_0%,#005696_100%)] px-5 py-2.5 text-sm font-semibold text-white"
            >
              WhatsApp
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
