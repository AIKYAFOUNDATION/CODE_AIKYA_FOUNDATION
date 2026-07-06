import Link from "next/link";

export default function DonatePreview() {
  return (
    <section className="section-padding">
      <div className="container-custom hero-card">
        <div className="pill">Support us</div>
        <h2>Donate</h2>
        <p className="max-w-3xl text-[var(--muted)]">Your contribution can strengthen educational access, community outreach, and youth leadership programs that create lasting impact.</p>
        <Link href="/donate" className="cta-button cta-button-primary mt-6 inline-flex">
          Make a contribution
        </Link>
      </div>
    </section>
  );
}