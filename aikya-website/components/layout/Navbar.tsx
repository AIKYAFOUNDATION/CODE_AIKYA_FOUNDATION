"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* FIRST LINE: Logo - Organization Name - Dark Mode Toggle */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 8%",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "#f5f5dc",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        {/* Left: Logo */}
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🏛️
        </div>

        {/* Middle: Organization Name (Stylised) */}
        <div
          style={{
            textAlign: "center",
            flex: 1,
            margin: "0 20px",
          }}
        >
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h1
              style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                letterSpacing: "2px",
                background: "linear-gradient(135deg, #0b3d3b, #1b4332)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AIKYA
            </h1>
          </a>
        </div>

        {/* Right: Dark Mode Toggle */}
        <ThemeToggle />
      </nav>

      {/* SECOND LINE: Navigation */}
      {/* Mobile View: Home - About Us - Hamburger Menu */}
      <nav
        style={{
          display: "none",
          background: "#f5f5dc",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          padding: "12px 8%",
        }}
        className="md:hidden"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a href="/" onClick={closeMobileMenu} style={{ textDecoration: "none", color: "inherit" }}>
            <span style={{ fontSize: "1rem", fontWeight: "500" }}>Home</span>
          </a>

          <a href="/about" onClick={closeMobileMenu} style={{ textDecoration: "none", color: "inherit" }}>
            <span style={{ fontSize: "1rem", fontWeight: "500" }}>About Us</span>
          </a>

          <MobileMenu isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
        </div>
      </nav>

      {/* Desktop View: All sections one by one */}
      <nav
        style={{
          display: "none",
          background: "#f5f5dc",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          padding: "12px 8%",
        }}
        className="hidden md:flex"
      >
        <div
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <a href="/" style={{ textDecoration: "none", color: "inherit", fontSize: "0.95rem" }}>
            Home
          </a>
          <a href="/about" style={{ textDecoration: "none", color: "inherit", fontSize: "0.95rem" }}>
            About Us
          </a>
          <a href="/mission" style={{ textDecoration: "none", color: "inherit", fontSize: "0.95rem" }}>
            Mission & Vision
          </a>
          <a href="/founder" style={{ textDecoration: "none", color: "inherit", fontSize: "0.95rem" }}>
            Founder
          </a>
          <a href="/what-we-do" style={{ textDecoration: "none", color: "inherit", fontSize: "0.95rem" }}>
            What We Do?
          </a>
          <a href="/team" style={{ textDecoration: "none", color: "inherit", fontSize: "0.95rem" }}>
            Team
          </a>
          <a href="/contact" style={{ textDecoration: "none", color: "inherit", fontSize: "0.95rem" }}>
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (below second line) */}
      {isMobileMenuOpen && (
        <div
          style={{
            display: "none",
            backgroundColor: "#f5f5dc",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            padding: "16px 8%",
            flexDirection: "column",
            gap: "12px",
          }}
          className="md:hidden"
        >
          <a href="/mission" onClick={closeMobileMenu} style={{ textDecoration: "none", color: "inherit" }}>
            <span style={{ fontSize: "0.95rem" }}>Mission & Vision</span>
          </a>
          <a href="/founder" onClick={closeMobileMenu} style={{ textDecoration: "none", color: "inherit" }}>
            <span style={{ fontSize: "0.95rem" }}>Founder</span>
          </a>
          <a href="/what-we-do" onClick={closeMobileMenu} style={{ textDecoration: "none", color: "inherit" }}>
            <span style={{ fontSize: "0.95rem" }}>What We Do?</span>
          </a>
          <a href="/team" onClick={closeMobileMenu} style={{ textDecoration: "none", color: "inherit" }}>
            <span style={{ fontSize: "0.95rem" }}>Team</span>
          </a>
          <a href="/contact" onClick={closeMobileMenu} style={{ textDecoration: "none", color: "inherit" }}>
            <span style={{ fontSize: "0.95rem" }}>Contact</span>
          </a>
        </div>
      )}

      <style>{`
        .md\:hidden {
          display: flex !important;
        }

        .hidden.md\:flex {
          display: none !important;
        }

        @media (min-width: 768px) {
          .md\:hidden {
            display: none !important;
          }

          .hidden.md\:flex {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
