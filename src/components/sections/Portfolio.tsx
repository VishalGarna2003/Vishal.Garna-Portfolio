const projects = [
  {
    tag: "AI / NODE.JS",
    title: "Auto Call Auditor (ACA)",
    desc: "AI-powered call analysis platform processing customer-agent recordings with Whisper + Gemini AI to generate KPI-based performance insights.",
    bg: "var(--mint)",
  },
  {
    tag: "HEALTHCARE",
    title: "Patient Management System",
    desc: "Multi-tenant PMS with Gemini AI intake analysis, Qdrant semantic record search and Redis-cached AI summaries for clinics.",
    bg: "var(--peach)",
  },
  {
    tag: "BACKEND / RBAC",
    title: "Location-Based Recommendation",
    desc: "Secure RBAC admin engine with spatial routing using Haversine matching to connect patients with specialized clinicians in real time.",
    bg: "var(--sage)",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="px-6 md:px-16 py-24 border-b border-border">
      <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
        <div>
          <p className="text-accent font-medium mb-4">- PROJECTS</p>
          <h2 className="text-5xl md:text-6xl font-bold">Recent completed works</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title}>
            <div
              className="aspect-square flex items-center justify-center p-10 text-center"
              style={{ backgroundColor: p.bg }}
            >
              <p className="text-3xl font-bold text-foreground/90">{p.title}</p>
            </div>
            <p className="mt-6 text-xs font-semibold tracking-widest text-muted-foreground">{p.tag}</p>
            <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
