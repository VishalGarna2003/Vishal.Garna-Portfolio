const items = [
  {
    period: "Aug 2025 - Present",
    role: "Software Engineer",
    company: "ICA (Impetus Consulting Associates) Pvt. Ltd.",
    desc: "Building scalable healthcare and AI-driven backend applications. Developing a multi-tenant Patient Management System with Gemini AI pipelines, secure data handling and role-based access.",
  },
  {
    period: "Mar 2025 - Aug 2025",
    role: "Backend Developer",
    company: "PhysioPlus Healthcare Pvt. Ltd.",
    desc: "Built REST APIs for healthcare workflows, designed a location-based physiotherapist recommendation engine using the Haversine formula and improved real-time appointment notifications.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-16 py-24 border-b border-border">
      <p className="text-accent font-medium mb-4">- EXPERIENCE</p>
      <h2 className="text-5xl md:text-6xl font-bold">Everything about me!</h2>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <div
            key={it.company}
            className="bg-card border border-border p-10 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-start mb-6">
              <p className="text-[color:var(--orange-accent)] font-semibold">-{it.period}</p>
              <p className="text-foreground/70 font-medium text-right">-{it.role}</p>
            </div>
            <h3 className="text-2xl font-bold">{it.company}</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
