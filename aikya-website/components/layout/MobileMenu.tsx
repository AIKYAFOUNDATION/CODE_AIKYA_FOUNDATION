"use client";

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
