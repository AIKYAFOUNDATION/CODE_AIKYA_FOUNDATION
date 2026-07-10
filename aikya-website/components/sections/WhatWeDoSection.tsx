import { whatWeDoContent } from "@/data/whatwedo";

export default function WhatWeDoSection() {
  return (
    <section className="section-padding">
      <div className="container-custom surface-card h-full flex flex-col lg:justify-center">
        <div className="pill pill--small">What we do</div>
        <h2>WHAT WE DO?</h2>
        <p className="max-w-4xl text-[var(--muted)] flex-grow lg:flex-grow-0">{whatWeDoContent}</p>
      </div>
    </section>
  );
}
