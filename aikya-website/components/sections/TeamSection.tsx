import { governingBody } from "@/data/team";

export default function TeamSection() {
  return (
    <section>
      <h2>TEAM</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
        }}
      >
        {governingBody.map((member) => (
          <div
            key={member.name}
            style={{
              padding: "20px",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "16px",
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              width="220"
            />

            <h3>{member.name}</h3>

            <p>{member.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}