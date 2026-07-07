"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationLinks } from "@/data/navigation";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

const mobileVisibleLinks = navigationLinks.slice(0, 2);
const mobileMenuLinks = navigationLinks.slice(2);

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl">
      <div className="container-custom flex flex-col gap-3 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo/IMGLOGO.png"
              alt="AIKYA FOUNDATION logo"
              className="h-12 w-12 rounded-full object-cover"
            />
          </Link>

          <div className="flex-1 text-center">
            <p className="text-lg font-black uppercase tracking-[0.34em] text-transparent bg-clip-text bg-gradient-to-r from-[#1b4332] via-[#606c38] to-[#bc8f8f]">
              AIKYA FOUNDATION
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--muted)]">
              Empowering communities
            </p>
          </div>

          <div className="flex items-center justify-end">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 lg:hidden">
          <Link
            href={mobileVisibleLinks[0].href}
            className={`nav-link ${pathname === mobileVisibleLinks[0].href ? "active" : ""}`}
          >
            {mobileVisibleLinks[0].name}
          </Link>

          <Link
            href={mobileVisibleLinks[1].href}
            className={`nav-link ${pathname === mobileVisibleLinks[1].href ? "active" : ""}`}
          >
            {mobileVisibleLinks[1].name}
          </Link>

          <MobileMenu open={isMenuOpen} onToggle={() => setIsMenuOpen((value) => !value)} />
        </div>

        <nav className="hidden items-center justify-center gap-2 lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {isMenuOpen ? (
          <div className="border-t border-[var(--border)] bg-[var(--background)]/95 lg:hidden">
            <div className="container-custom flex flex-col gap-2 py-4">
              {mobileMenuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
