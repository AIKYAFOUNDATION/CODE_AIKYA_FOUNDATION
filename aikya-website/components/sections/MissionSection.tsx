import { foundationData } from "@/data/foundation";

export default function MissionSection() {
  return (
    <section className="section-padding">
      <div className="container-custom surface-card h-full flex flex-col lg:justify-center">
        <div className="pill">Mission & Vision</div>
        <h2>MISSION & VISION</h2>
        <p className="max-w-4xl text-[var(--muted)] flex-grow lg:flex-grow-0">{foundationData.mission}</p>
      </div>
    </section>
  );
}
