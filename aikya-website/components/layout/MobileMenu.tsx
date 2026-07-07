"use client";

<<<<<<< HEAD
interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <button
      onClick={onToggle}
      style={{
        cursor: "pointer",
        border: "none",
        background: "transparent",
        fontSize: "1.5rem",
        padding: "8px",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
      title={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? "✕" : "☰"}
    </button>
  );
}
=======
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
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] shadow-sm transition-colors duration-200"
    >
      {open ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" aria-hidden="true" className="fill-current text-[var(--foreground)]">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" aria-hidden="true" className="fill-current text-[var(--foreground)]">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      )}
    </button>
  );
}
>>>>>>> 715f454 (Upgradation)
