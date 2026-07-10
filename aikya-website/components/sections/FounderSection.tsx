import { foundationData } from "@/data/foundation";

export default function FounderSection() {
  return (
    <section className="section-padding">
      <div className="container-custom grid gap-8 lg:grid-cols-[0.4fr_0.6fr]">
        <div className="founder-section-wrapper">
          <div className="hero-card text-center">
            <img
              src="/images/founder/IMGDG.jpeg"
              alt="Debashrita Guha"
              className="mx-auto h-72 w-72 rounded-[2rem] lg:object-contain object-cover shadow-lg"
            />
            <h3 className="mt-6">Debashrita Guha</h3>
            <p className="mt-2 text-[var(--muted)]">Founder and President</p>
          </div>
        </div>
        <div className="surface-card">
          <div className="pill">Founder's message</div>
          <h2>FOUNDER'S MESSAGE</h2>
          <p className="text-[var(--muted)]">{foundationData.founderMessage}</p>
        </div>
      </div>
    </section>
  );
}
