import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="px-6 md:px-16 py-24" style={{ backgroundColor: "color-mix(in oklab, var(--accent) 10%, var(--background))" }}>
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-accent font-medium mb-4">- LET'S CONNECT</p>
          <h2 className="text-5xl md:text-6xl font-bold">Get in touch</h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-md">
            I'm currently available to take on new backend &amp; AI projects, so feel free to send
            me a message about anything you want to run past me. You can reach me anytime.
          </p>

          <div className="mt-12 border-l-2 border-accent pl-5 space-y-4 text-foreground">
            <p className="font-semibold underline underline-offset-4">+91 7340479570</p>
            <p className="font-semibold underline underline-offset-4">vishalgarna5@gmail.com</p>
            <p className="font-semibold underline underline-offset-4">Jaipur, Rajasthan, India</p>
          </div>
        </div>

        <form
          className="space-y-5"
          onSubmit={(e) => { e.preventDefault(); alert("Thanks " + (form.name || "friend") + "! I'll get back to you."); }}
        >
          <input
            required
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-card border border-border px-6 py-6 text-lg outline-none focus:border-accent"
          />
          <input
            required
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-card border border-border px-6 py-6 text-lg outline-none focus:border-accent"
          />
          <textarea
            required
            rows={6}
            placeholder="Write something..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-card border border-border px-6 py-6 text-lg outline-none focus:border-accent resize-none"
          />
          <button className="px-10 py-5 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
            Submit now
          </button>
        </form>
      </div>
    </section>
  );
}
