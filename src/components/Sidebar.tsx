import { Facebook, Github, Linkedin } from "lucide-react";
import avatar from "@/assets/hero-portrait.png";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Sidebar({ active }: { active: string }) {
  return (
    <aside className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[300px] w-full flex flex-col items-center justify-between py-10 px-6 bg-sidebar border-b lg:border-b-0 lg:border-r border-border">
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-2 border-accent p-1">
            <img src={avatar} alt="Vishal Saini" className="w-full h-full rounded-full object-cover bg-muted" />
          </div>
        </div>
        <div className="relative mt-4">
          <span
            aria-hidden
            className="absolute inset-0 flex items-center justify-center text-4xl text-foreground/10 -rotate-6"
            style={{ fontFamily: "var(--font-script)" }}
          >
            Vishal Saini
          </span>
          <h2 className="relative text-xl font-bold tracking-tight">Vishal Saini</h2>
        </div>
      </div>

      <nav className="hidden lg:flex flex-col gap-5 my-10 text-[15px]">
        {nav.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className={`text-center transition-colors hover:text-accent ${active === n.href.slice(1) ? "text-accent font-semibold" : "text-foreground/80"
              }`}
          >
            {n.label}
          </a>
        ))}
      </nav>

      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-5 text-foreground">
          <a href="https://github.com/vishalsainiICA/" aria-label="GitHub" className="hover:text-accent"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/vishal-garna-a796592b6/" aria-label="LinkedIn" className="hover:text-accent"><Linkedin size={18} /></a>
          {/* <a href="#" aria-label="Facebook" className="hover:text-accent"><Facebook size={18} /></a> */}
        </div>
        <p className="text-xs text-muted-foreground text-center max-w-[220px] leading-relaxed">
          Copyright © 2026 Vishal Saini. All rights reserved.
        </p>
      </div>
    </aside>
  );
}
