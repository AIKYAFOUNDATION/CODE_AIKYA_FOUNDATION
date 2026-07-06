import Link from "next/link";
import { foundationData } from "@/data/foundation";

export default function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="surface-card">
          <div className="pill">Who we are</div>
          <h2>About Us</h2>
          <p className="text-[var(--muted)]">{foundationData.about.slice(0, 420)}...</p>
          <Link href="/about" className="cta-button cta-button-primary mt-6 inline-flex">
            Read more
          </Link>
        </div>
        <div className="hero-card">
          <p className="text-lg font-semibold text-[var(--foreground)]">Guided by Vidya, Shakti, Swasthya, and Netritva</p>
          <p className="mt-3 text-[var(--muted)]">AIKYA brings together education, women’s autonomy, health awareness, and youth leadership into a single mission of community transformation.</p>
        </div>
      </div>
    </section>
  );
}