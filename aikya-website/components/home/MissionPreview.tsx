import Link from "next/link";
import { foundationData } from "@/data/foundation";

export default function MissionPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom surface-card">
        <div className="pill">Our purpose</div>
        <h2>Mission & Vision</h2>
        <p className="max-w-3xl text-[var(--muted)]">{foundationData.mission.slice(0, 420)}...</p>
        <Link href="/mission" className="cta-button cta-button-primary mt-6 inline-flex">
          Read our full mission
        </Link>
      </div>
    </section>
  );
}
