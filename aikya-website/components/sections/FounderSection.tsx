import Image from "next/image";
import { foundationData } from "@/data/foundation";

export default function FounderSection() {
  return (
    <section>
      <img
  src="/images/founder/IMGDG.jpeg"
  alt="Debashrita Guha"
  width="300"
/>

      <h3>Debashrita Guha</h3>

      <p>Founder and President</p>

      <h2>FOUNDER'S MESSAGE</h2>

      <p>{foundationData.founderMessage}</p>
    </section>
  );
}