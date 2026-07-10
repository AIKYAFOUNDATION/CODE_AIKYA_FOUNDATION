"use client";

type MobileMenuProps = {
  open: boolean;
  onToggle: () => void;
};

export default function MobileMenu({ open, onToggle }: MobileMenuProps) {
  return (
    <button
      type="button"
      aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={open}
      onClick={onToggle}
      className="flex items-center justify-center bg-transparent border-0 shadow-none rounded-none p-0 cursor-pointer transition-transform duration-200 focus:outline-none focus:ring-0"
    >
      {open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="24"
          height="24"
          aria-hidden="true"
          className="fill-[var(--foreground)]"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="24"
          height="24"
          aria-hidden="true"
          className="fill-[var(--foreground)]"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      )}
    </button>
  );
}
