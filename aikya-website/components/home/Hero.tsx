import Image from "next/image";

import { foundationData } from "@/data/foundation";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "24px",
      }}
    >
      <img
  src="/images/logo/IMGLOGO.jpeg"
  alt="AIKYA FOUNDATION"
  style={{
    width: "180px",
    height: "180px",
    objectFit: "contain",
  }}
/>
      <h1>{foundationData.name}</h1>

      <h3>{foundationData.fullForm}</h3>

      <p
        style={{
          maxWidth: "700px",
        }}
      >
        {foundationData.tagline}
      </p>
    </section>
  );
}