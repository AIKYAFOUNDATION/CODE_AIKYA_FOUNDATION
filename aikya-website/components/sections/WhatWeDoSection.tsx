import { whatWeDoContent } from "@/data/whatwedo";

export default function WhatWeDoSection() {
  return (
    <section className="section-padding">
      <div className="container-custom surface-card">
        <div className="pill">What we do</div>
        <h2>WHAT WE DO?</h2>
        <p className="max-w-4xl text-[var(--muted)]">{whatWeDoContent}</p>
      </div>
    </section>
  );
}