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
      <div className="container-custom flex flex-col gap-3 py-4">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
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

          {/* Title */}
          <div className="navbar-title flex-1">
            AIKYA FOUNDATION
          </div>

          {/* Theme Toggle */}
          <div className="flex-shrink-0">
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
