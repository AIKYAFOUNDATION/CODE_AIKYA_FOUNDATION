"use client";

import Image from "next/image";
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
      <div className="w-full flex flex-col gap-0 px-4">

        {/* ---------- First Row ---------- */}
        {/* Desktop: Full organization name on one line */}
        {/* Mobile: Split into AIKYA and FOUNDATION on separate lines */}
        
        <div className="hidden lg:flex items-center justify-between py-4">
          {/* Desktop Logo */}
          <div className="w-16 flex justify-start">
            <Link href="/">
              <Image
                src="/images/logo/IMGLOGO.png"
                alt="AIKYA FOUNDATION logo"
                width={60}
                height={60}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Organization Name */}
          <div className="flex-1 text-center">
            <h2 className="text-gradient font-black uppercase tracking-[0.25em] m-0 org-name-desktop">
              AIKYA FOUNDATION
            </h2>
          </div>

          {/* Desktop Theme Toggle */}
          <div className="w-16 flex justify-end">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-0">
          {/* Mobile First Line: Logo | AIKYA | Theme Toggle */}
          <div className="flex items-center justify-between py-4">
            {/* Mobile Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/images/logo/IMGLOGO.png"
                  alt="AIKYA FOUNDATION logo"
                  width={48}
                  height={48}
                  priority
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Mobile Organization Name - First Part */}
            <div className="flex-1 text-center">
              <h2 className="text-gradient font-black uppercase tracking-[0.15em] m-0 text-lg org-name-mobile">
                AIKYA
              </h2>
            </div>

            {/* Mobile Theme Toggle */}
            <div className="flex-shrink-0">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Second Line: FOUNDATION centered */}
          <div className="text-center pb-4">
            <h2 className="text-gradient font-black uppercase tracking-[0.15em] m-0 text-lg org-name-mobile">
              FOUNDATION
            </h2>
          </div>
        </div>

        {/* ---------- Second Row ---------- */}

        {/* Mobile Navigation */}
        <div className="flex items-center justify-between py-4 lg:hidden border-t border-[var(--border)]">

          <Link
            href={mobileVisibleLinks[0].href}
            className={`nav-link ${
              pathname === mobileVisibleLinks[0].href ? "active" : ""
            }`}
          >
            {mobileVisibleLinks[0].name}
          </Link>

          <Link
            href={mobileVisibleLinks[1].href}
            className={`nav-link ${
              pathname === mobileVisibleLinks[1].href ? "active" : ""
            }`}
          >
            {mobileVisibleLinks[1].name}
          </Link>

          <MobileMenu
            open={isMenuOpen}
            onToggle={() => setIsMenuOpen((value) => !value)}
          />
        </div>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center justify-center gap-6 py-4 border-t border-[var(--border)] whitespace-nowrap">

          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${
                pathname === link.href ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="border-t border-[var(--border)] bg-[var(--background)] lg:hidden py-4">
            <div className="flex flex-col gap-2">
              {mobileMenuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mobile-nav-link ${
                    pathname === link.href ? "active" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
