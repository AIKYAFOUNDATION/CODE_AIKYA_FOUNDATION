import { foundationData } from "@/data/foundation";

export default function MissionSection() {
  return (
    <section>
      <h2>MISSION & VISION</h2>
      <p>{foundationData.mission}</p>
    </section>
  );
}