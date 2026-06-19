import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vishal Saini — Backend & AI Systems Engineer" },
      { name: "description", content: "Portfolio of Vishal Saini, a Jaipur-based Software Engineer building scalable backend and AI-powered systems with Node.js, MongoDB and Gemini AI." },
      { property: "og:title", content: "Vishal Saini — Backend & AI Systems Engineer" },
      { property: "og:description", content: "Backend & AI systems portfolio — scalable healthcare, multi-tenant and AI-powered applications." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Caveat:wght@600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "about", "experience", "services", "portfolio", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar active={active} />
      <main className="lg:ml-[300px]">
        <Hero />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
