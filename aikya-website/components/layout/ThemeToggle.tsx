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
        id="THEME-SWITCH"
        type="button"
        aria-label="Toggle theme"
        onClick={handleToggle}
        className="flex items-center justify-center bg-transparent border-0 shadow-none rounded-none p-0 cursor-pointer transition-transform duration-200 focus:outline-none focus:ring-0"
      >
        

<svg 
xmlns="http://www.w3.org/2000/svg" 
height="24px" 
viewBox="0 -960 960 960" 
width="24px"
aria-hidden="true"
className="fill-current">
<path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/>
</svg>

      </button>
    );
  }

  return (
    <button
      id="THEME-SWITCH"
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={handleToggle}
      className="flex items-center justify-center bg-transparent border-0 shadow-none rounded-none p-0 cursor-pointer transition-transform duration-200 focus:outline-none focus:ring-0"
    >
      {isDark ? (


<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-current" aria-hidden="true">
<path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/>
</svg>

      ) : (
        <svg 
xmlns="http://www.w3.org/2000/svg" 
height="24px" 
viewBox="0 -960 960 960" 
width="24px"
aria-hidden="true"
className="fill-current">
<path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/>
</svg>


      )}
    </button>
  );
}
