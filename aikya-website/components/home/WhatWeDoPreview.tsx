import Link from "next/link";

export default function WhatWeDoPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom surface-card">
        <div className="pill">Impact areas</div>
        <h2>What We Do?</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: "Education", text: "Awareness, learning, and capacity building." },
            { title: "Women’s Empowerment", text: "Encouraging autonomy and leadership." },
            { title: "Community Well-being", text: "Supporting health, dignity, and resilience." },
            { title: "Youth Leadership", text: "Creating platforms for civic participation." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
              <h3>{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.text}</p>
            </div>
          ))}
        </div>
        <Link href="/what-we-do" className="cta-button cta-button-secondary mt-6 inline-flex">
          Explore initiatives
        </Link>
      </div>
    </section>
  );
}