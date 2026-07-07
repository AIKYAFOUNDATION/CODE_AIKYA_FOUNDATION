"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("aikya-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialDark =
      storedTheme === "dark"
        ? true
        : storedTheme === "light"
        ? false
        : prefersDark;

    setIsDark(initialDark);
    setMounted(true);

    document.documentElement.classList.toggle("dark", initialDark);
    document.documentElement.style.colorScheme = initialDark ? "dark" : "light";
  }, []);

  const handleToggle = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    document.documentElement.style.colorScheme = nextDark ? "dark" : "light";
    window.localStorage.setItem("aikya-theme", nextDark ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm transition-colors duration-200 cursor-pointer"
        onClick={handleToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="24"
          height="24"
          aria-hidden="true"
          className="fill-current"
        >
          <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q109 0 190-67.5T771-406q-25 11-53.667 17.5Q688.667-382 660-382q-70.333 0-120.167-49.833Q490-481.667 490-552q0-27.333 6.5-56t17.5-53.333Q388-621 320.5-540T250-370q0 109 81 190t149 81Zm0-280Z" />
        </svg>
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={handleToggle}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm transition-colors duration-200 cursor-pointer"
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="24"
          height="24"
          aria-hidden="true"
          className="fill-current"
        >
          <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-101 56-56 106 105-61 52Zm494 494l-106-106 61-51 101 101-56 56Zm61-550l101-101 56 56-106 105-51-60ZM150-150l106-106 51 61-101 101-56-56Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="24"
          height="24"
          aria-hidden="true"
          className="fill-current"
        >
          <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q109 0 190-67.5T771-406q-25 11-53.667 17.5Q688.667-382 660-382q-70.333 0-120.167-49.833Q490-481.667 490-552q0-27.333 6.5-56t17.5-53.333Q388-621 320.5-540T250-370q0 109 81 190t149 81Zm0-280Z" />
        </svg>
      )}
    </button>
  );
}
