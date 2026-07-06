import { foundationData } from "@/data/foundation";

export default function MissionSection() {
  return (
    <section className="section-padding">
      <div className="container-custom surface-card">
        <div className="pill">Mission & Vision</div>
        <h2>MISSION & VISION</h2>
        <p className="max-w-4xl text-[var(--muted)]">{foundationData.mission}</p>
      </div>
    </section>
  );
}