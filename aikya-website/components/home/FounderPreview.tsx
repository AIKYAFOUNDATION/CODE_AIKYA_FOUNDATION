import Link from "next/link";
import { foundationData } from "@/data/foundation";

export default function FounderPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="hero-card">
          <img src="/images/founder/IMGDG.jpeg" alt="Founder of AIKYA FOUNDATION" className="h-64 w-full rounded-[1.5rem] lg:object-contain object-cover" />
        </div>
        <div className="surface-card">
          <div className="pill">Voice of the Founder</div>
          <h2>Founder's Message</h2>
          <p className="text-[var(--muted)]">{foundationData.founderMessage.slice(0, 420)}...</p>
          <Link href="/founder" className="cta-button cta-button-primary mt-6 inline-flex">
            Read the message
          </Link>
        </div>
      </div>
    </section>
  );
}
