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
        padding: "5px",
      }}
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
    >
      {isOpen ? "✕" : "☰"}
    </button>
  );
}
