import Link from "next/link";
import { governingBody } from "@/data/team";

export default function TeamPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="pill">Our people</div>
        <h2>Team</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {governingBody.slice(0, 3).map((member) => (
            <div key={member.name} className="surface-card text-center">
              <img src={member.image} alt={member.name} className="mx-auto h-40 w-full rounded-2xl object-cover" />
              <h3 className="mt-4">{member.name}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{member.designation}</p>
            </div>
          ))}
        </div>
        <Link href="/team" className="cta-button cta-button-secondary mt-6 inline-flex">
          Meet the full team
        </Link>
      </div>
    </section>
  );
}