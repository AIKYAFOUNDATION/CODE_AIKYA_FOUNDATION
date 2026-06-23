import { foundationData } from "@/data/foundation";

export default function AboutSection() {
  return (
    <section>
      <h2>ABOUT US</h2>
      <p>{foundationData.about}</p>
    </section>
  );
}