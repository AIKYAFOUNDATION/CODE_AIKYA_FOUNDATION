import Link from "next/link";
import { foundationData } from "@/data/foundation";

export default function Hero() {
  return (
    <section className="section-padding">
      <div className="container-custom grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div className="pill">Youth-led social impact</div>
          <h1 className="text-gradient">{foundationData.name}</h1>
          <h3 className="max-w-2xl text-xl font-medium text-[var(--muted)]">{foundationData.fullForm}</h3>
          <p className="max-w-2xl text-lg text-[var(--muted)]">{foundationData.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/about" className="cta-button cta-button-primary">
              Discover our story
            </Link>
            <Link href="/donate" className="cta-button cta-button-secondary">
              Support the mission
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <img
            src="/images/logo/IMGLOGO.jpeg"
            alt="AIKYA FOUNDATION logo"
            className="mx-auto h-56 w-56 rounded-full object-contain shadow-lg"
          />
          <div className="mt-6 grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
            <div className="surface-card">
              <p className="font-semibold text-[var(--foreground)]">Community-first</p>
              <p>Programs built around awareness, access, and action.</p>
            </div>
            <div className="surface-card">
              <p className="font-semibold text-[var(--foreground)]">Youth leadership</p>
              <p>Equipping young changemakers with confidence and capability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}