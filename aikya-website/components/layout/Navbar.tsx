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
      <div className="container-custom flex flex-col gap-0">
        {/* First Row: Logo, Title, Theme Toggle - ALWAYS IN ONE ROW */}
        <div className="flex items-center justify-between gap-2 md:gap-4 py-3 lg:py-4 min-h-[70px]">
          {/* Logo */}
          <div className="flex-shrink-0 h-[60px] w-[60px] flex items-center justify-center">
            <Link href="/" className="flex items-center justify-center h-full w-full">
              <Image
                src="/images/logo/IMGLOGO.png"
                alt="AIKYA FOUNDATION logo"
                width={60}
                height={60}
                priority
                className="object-contain max-h-[60px] max-w-[60px]"
              />
            </Link>
          </div>

          {/* Title - Takes remaining space */}
          <div className="navbar-title flex-1 px-2 md:px-4 text-center md:text-left overflow-hidden">
            AIKYA FOUNDATION
          </div>

          {/* Theme Toggle */}
          <div className="flex-shrink-0 h-[60px] w-[60px] flex items-center justify-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Navigation Row - Separates from logo row */}
        <div className="border-t border-[var(--border)]">
          {/* Mobile Navigation: Home, About Us, and Hamburger */}
          <div className="flex items-center justify-between gap-2 lg:hidden py-4">
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

            <div className="ml-auto">
              <MobileMenu open={isMenuOpen} onToggle={() => setIsMenuOpen((value) => !value)} />
            </div>
          </div>

          {/* Desktop Navigation: All links side by side */}
          <nav className="hidden items-center justify-center gap-2 lg:flex py-4">
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
        </div>

        {/* Mobile Menu Dropdown: Additional sections */}
        {isMenuOpen ? (
          <div className="border-t border-[var(--border)] bg-[var(--background)]/95 lg:hidden py-4">
            <div className="flex flex-col gap-2">
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
