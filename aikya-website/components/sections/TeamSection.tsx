import { governingBody } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="pill">Meet the team</div>
        <h2>TEAM</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {governingBody.map((member) => (
            <div key={member.name} className="surface-card text-center">
              <img src={member.image} alt={member.name} className="mx-auto h-56 w-full rounded-2xl object-cover" />
              <h3 className="mt-4">{member.name}</h3>
              <p className="mt-2 text-[var(--muted)]">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}