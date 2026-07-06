import Link from "next/link";

export default function NewsPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom surface-card">
        <div className="pill">Updates</div>
        <h2>News & Updates</h2>
        <p className="max-w-3xl text-[var(--muted)]">Stay connected as AIKYA continues to launch initiatives, organize community engagement, and spotlight changemakers from the ground up.</p>
        <Link href="/news" className="cta-button cta-button-primary mt-6 inline-flex">
          See updates
        </Link>
      </div>
    </section>
  );
}