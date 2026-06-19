import { ArrowRight } from "lucide-react";

const services = [
  { n: "01", title: "Backend Development", desc: "Scalable REST APIs and backend systems with Node.js, Express.js and MongoDB built for production workloads." },
  { n: "02", title: "AI Integration", desc: "Generative AI, OpenAI Whisper, Gemini AI and prompt engineering wired into real product workflows." },
  { n: "03", title: "Multi-tenant Systems", desc: "Secure multi-tenant architectures with role-based access control, tenant isolation and data partitioning." },
  { n: "04", title: "Semantic Search", desc: "Vector search platforms using Qdrant and embeddings to power fast, meaning-aware retrieval." },
  { n: "05", title: "Workflow Automation", desc: "Asynchronous pipelines with RabbitMQ and Redis to automate heavy lifting and background jobs." },
  { n: "06", title: "System Design", desc: "Distributed caching, microservices and message queue architectures designed to scale gracefully." },
];

export function Services() {
  return (
    <section id="services" className="px-6 md:px-16 py-24 border-b border-border">
      <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
        <div>
          <p className="text-accent font-medium mb-4">- SERVICES</p>
          <h2 className="text-5xl md:text-6xl font-bold">My Services</h2>
        </div>
        <a href="#contact" className="text-accent underline underline-offset-4 font-medium">
          vishalgarna5@gmail.com
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.n}
            className="bg-card border border-border p-10 group hover:border-accent transition-colors"
          >
            <p className="text-foreground/70 text-lg font-medium">{s.n}</p>
            <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">{s.desc}</p>
            <a href="#contact" className="mt-10 inline-flex items-center gap-3 font-semibold group-hover:text-accent">
              Read More <ArrowRight size={18} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
