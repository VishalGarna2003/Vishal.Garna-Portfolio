const groups = [
  { title: "Languages & Frameworks", items: ["Node.js", "Express.js", "JavaScript ES6+", "React.js", "Python (Flask)", "Java"] },
  { title: "AI & NLP", items: ["Generative AI", "OpenAI GPT", "Whisper", "Gemini AI", "Prompt Engineering"] },
  { title: "Architecture & Infra", items: ["Multi-tenant Systems", "REST APIs", "RBAC", "Microservices", "RabbitMQ", "Redis"] },
  { title: "Databases & DevOps", items: ["MongoDB", "MySQL", "Qdrant", "Docker", "CI/CD", "AWS", "GCP"] },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-24 border-b border-border">
      <p className="text-accent font-medium mb-4">- CLIENTS &amp; SKILLS</p>
      <h2 className="text-5xl md:text-6xl font-bold">Tools &amp; technologies</h2>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-border">
        {groups.map((g) => (
          <div key={g.title} className="border-r border-b border-border p-8">
            <h3 className="text-lg font-bold text-foreground">{g.title}</h3>
            <ul className="mt-5 space-y-2">
              {g.items.map((i) => (
                <li key={i} className="text-muted-foreground">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
