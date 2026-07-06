import Link from "next/link";

export default function ContactPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom surface-card">
        <div className="pill">Let’s connect</div>
        <h2>Contact Us</h2>
        <p className="text-[var(--muted)]">Reach out for collaborations, volunteering, or partnership opportunities with AIKYA FOUNDATION.</p>
        <Link href="/contact" className="cta-button cta-button-secondary mt-6 inline-flex">
          Contact us
        </Link>
      </div>
    </section>
  );
}