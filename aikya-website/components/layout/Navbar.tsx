import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 8%",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#f5f5dc",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h2>AIKYA FOUNDATION</h2>
      </a>

      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "center",
        }}
      >
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/mission">Mission & Vision</a>
        <a href="/founder">Founder</a>
        <a href="/what-we-do">What We Do?</a>
        <a href="/team">Team</a>
        <a href="/contact">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}