import { Download } from "lucide-react";

export function About() {
  return (
    <section id="about" className="px-6 md:px-16 py-24 border-b border-border">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-accent font-medium mb-4">- NICE TO MEET YOU!</p>
          <h2 className="text-5xl md:text-6xl font-bold">Vishal Saini</h2>
          <p className="mt-4 text-xl text-muted-foreground">Backend &amp; AI Systems Engineer</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Got a project?
            </a>
            <a
              href="/Vishal_Saini_Resume.pdf"
              download="Vishal_Saini_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-6 max-w-md">
            <div>
              <p className="text-accent font-medium text-sm underline underline-offset-4">AGE</p>
              <p className="mt-2 font-bold text-lg">23</p>
            </div>
            <div>
              <p className="text-accent font-medium text-sm underline underline-offset-4">LOCATION</p>
              <p className="mt-2 font-bold text-lg">Jaipur, India</p>
            </div>
            <div>
              <p className="text-accent font-medium text-sm underline underline-offset-4">MAIL</p>
              <p className="mt-2 font-bold text-lg break-all">vishalgarna5@gmail.com</p>
            </div>
            <div>
              <p className="text-accent font-medium text-sm underline underline-offset-4">PHONE</p>
              <p className="mt-2 font-bold text-lg">+91 7340479570</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Hello there! My name is <span className="text-accent font-semibold">Vishal Saini</span>.
            I'm a Software Engineer focused on backend systems and AI integrations, passionate about
            building products that move the needle.
          </p>
          <p>
            I design and ship scalable healthcare, AI-powered and multi-tenant applications using
            Node.js, Express.js, MongoDB, Redis and RabbitMQ. I've built EMR systems, AI-assisted
            diagnostic pipelines, semantic search platforms and speech-to-text analytics workflows
            using Gemini AI, OpenAI Whisper and Qdrant.
          </p>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {[
          { num: "2+", label: "YEARS OF EXPERIENCE", bg: "var(--mint)" },
          { num: "5+", label: "PROJECTS DELIVERED", bg: "var(--peach)" },
          { num: "3+", label: "AI INTEGRATIONS", bg: "var(--sage)" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-sm py-14 text-center"
            style={{ backgroundColor: s.bg }}
          >
            <p className="text-5xl font-bold text-foreground">{s.num}</p>
            <p className="mt-3 text-sm font-semibold tracking-wider text-foreground/80">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
