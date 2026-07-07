"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Check localStorage and system preference
    const savedDarkMode = localStorage.getItem("darkMode");
    let darkMode = false;

    if (savedDarkMode !== null) {
      darkMode = savedDarkMode === "true";
    } else {
      darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    setIsDark(darkMode);
    applyTheme(darkMode);

    // Listen to system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("darkMode") === null) {
        setIsDark(e.matches);
        applyTheme(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;
    const body = document.body;
    const navs = document.querySelectorAll("nav");

    if (dark) {
      html.style.backgroundColor = "#1a1a1a";
      html.style.color = "#ffffff";
      body.style.backgroundColor = "#1a1a1a";
      body.style.color = "#ffffff";
      navs.forEach((nav) => {
        nav.style.backgroundColor = "#2a2a2a";
        nav.style.borderBottomColor = "rgba(255,255,255,0.1)";
      });
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      html.style.backgroundColor = "#ffffff";
      html.style.color = "#000000";
      body.style.backgroundColor = "#ffffff";
      body.style.color = "#000000";
      navs.forEach((nav) => {
        nav.style.backgroundColor = "#f5f5dc";
        nav.style.borderBottomColor = "rgba(0,0,0,0.08)";
      });
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    applyTheme(newDarkMode);
  };

  if (!isMounted) {
    return (
      <button
        style={{
          cursor: "pointer",
          border: "none",
          background: "transparent",
          fontSize: "1.4rem",
          padding: "8px",
        }}
        disabled
      >
        🌙
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      style={{
        cursor: "pointer",
        border: "none",
        background: "transparent",
        fontSize: "1.4rem",
        padding: "8px",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light Mode" : "Dark Mode"}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
