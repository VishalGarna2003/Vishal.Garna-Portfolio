import portrait from "@/assets/hero-portrait.png";
import one from "@/assets/1.jpg";
import two from "@/assets/2.jpg";
import three from "@/assets/3.jpg";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

const images = [one, two, three];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); // 1 second

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home" className="min-h-screen flex items-center px-6 md:px-16 py-20 border-b border-border">
      <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-accent">Vishal!</span>
            <br />
            Software Engineer Based in Jaipur
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed">
            I'm a Jaipur based backend & AI systems engineer crafting scalable healthcare,
            AI-powered and multi-tenant applications with{" "}
            <span className="text-accent font-semibold">Node.js, MongoDB & Gemini AI</span>.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Got a project?
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Let's talk
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

          <div className="mt-14 border-l-2 border-accent pl-5 space-y-2 text-foreground">
            <p className="font-semibold">+91 7340479570</p>
            <p className="font-semibold">vishalgarna5@gmail.com</p>
            <p className="font-semibold">Jaipur, Rajasthan, India</p>
          </div>
        </div>

        <div className="relative flex justify-center items-center min-h-[500px]">
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="w-[380px] h-[380px] md:w-[460px] md:h-[460px] rounded-t-full bg-accent" />
          </div>
          <img
            src={images[currentImage]}
            alt="Vishal Saini"
            className="relative z-10 max-h-[600px] w-auto object-contain transition-opacity duration-500"
          />
          <span className="absolute top-6 right-6 text-accent text-3xl">✦</span>
          <span className="absolute top-1/3 right-2 text-accent text-2xl">✦</span>
          <span className="absolute bottom-10 right-10 text-accent text-2xl">✦</span>
        </div>
      </div>
    </section>
  );
}
