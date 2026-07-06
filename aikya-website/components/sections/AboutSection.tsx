import { foundationData } from "@/data/foundation";

export default function AboutSection() {
  return (
    <section className="section-padding">
      <div className="container-custom surface-card">
        <div className="pill">About AIKYA</div>
        <h2>ABOUT US</h2>
        <p className="max-w-4xl text-[var(--muted)]">{foundationData.about}</p>
      </div>
    </section>
  );
}