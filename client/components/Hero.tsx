import { ArrowRight, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 md:pt-0 relative overflow-hidden"
    >
      {/* Animated background decorative elements */}
      <div
        className="absolute top-20 right-10 w-72 h-72 bg-portfolio-mint/10 rounded-full blur-3xl animate-blob"
        style={{ animationDuration: "8s", animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-portfolio-lavender/10 rounded-full blur-3xl animate-blob"
        style={{ animationDuration: "10s", animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-portfolio-soft-blue/10 rounded-full blur-3xl animate-blob"
        style={{ animationDuration: "9s", animationDelay: "4s" }}
      />

      {/* Additional floating accent blobs for depth */}
      <div
        className="absolute top-1/3 right-1/4 w-48 h-48 bg-portfolio-mint/5 rounded-full blur-2xl animate-blob"
        style={{ animationDuration: "12s", animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-portfolio-lavender/5 rounded-full blur-2xl animate-blob"
        style={{ animationDuration: "11s", animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/4 left-1/4 w-40 h-40 bg-portfolio-soft-blue/5 rounded-full blur-2xl animate-blob"
        style={{ animationDuration: "13s", animationDelay: "5s" }}
      />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Intro label with parallax */}
        <div
          className="inline-block mb-8 px-4 py-2 rounded-full bg-portfolio-soft-blue/10 border border-portfolio-soft-blue/30 animate-scale-up hover:bg-portfolio-soft-blue/20 transition-all duration-500 cursor-pointer"
          style={{
            transform: `translate(${(mousePosition.x - 0.5) * 10}px, ${(mousePosition.y - 0.5) * 10}px)`,
            transitionDuration: "0.1s",
          }}
        >
          <span className="text-sm font-medium text-portfolio-soft-blue">
            ✨ Welcome to my portfolio
          </span>
        </div>

        {/* Name with enhanced parallax */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in"
          style={{
            transform: `translate(${(mousePosition.x - 0.5) * 15}px, ${(mousePosition.y - 0.5) * 15}px)`,
            transitionDuration: "0.15s",
          }}
        >
          <span className="bg-gradient-to-r from-portfolio-soft-blue via-portfolio-mint to-portfolio-lavender bg-clip-text text-transparent block hover:drop-shadow-lg transition-all duration-500">
            Marcian Benedict
          </span>
        </h1>

        {/* Role and Title with subtle parallax */}
        <h2
          className="text-xl sm:text-2xl md:text-3xl text-foreground/80 font-semibold mb-6 animate-slide-up"
          style={{
            animationDelay: "0.1s",
            transform: `translate(${(mousePosition.x - 0.5) * 8}px, ${(mousePosition.y - 0.5) * 8}px)`,
            transitionDuration: "0.2s",
          }}
        >
          Computer Science Engineering Student | Full Stack Developer
        </h2>

        {/* Tagline with minimal parallax */}
        <p
          className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up"
          style={{
            animationDelay: "0.2s",
            transform: `translate(${(mousePosition.x - 0.5) * 5}px, ${(mousePosition.y - 0.5) * 5}px)`,
            transitionDuration: "0.25s",
          }}
        >
          Building elegant digital solutions with clean code and intuitive
          design. Passionate about creating memorable user experiences and
          solving complex problems through technology.
        </p>

        {/* CTA Buttons with parallax */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 flex-wrap animate-slide-up"
          style={{
            animationDelay: "0.3s",
            transform: `translate(${(mousePosition.x - 0.5) * 8}px, ${(mousePosition.y - 0.5) * 8}px)`,
            transitionDuration: "0.2s",
          }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-portfolio-soft-blue to-portfolio-mint text-white font-semibold hover-lift flex items-center gap-2 overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">View Projects</span>
            <ArrowRight
              size={18}
              className="relative group-hover:translate-x-2 transition-transform duration-300"
            />
          </button>

          <a
            href="/MARCIAN_BENEDICT_D_RESUME.pdf"
            download="Marcian_Benedict_Resume.pdf"
            className="group relative px-8 py-3 rounded-full border-2 border-portfolio-soft-blue text-portfolio-soft-blue font-semibold hover-lift flex items-center gap-2 justify-center cursor-pointer transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-portfolio-soft-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Download
              size={18}
              className="relative group-hover:animate-bounce"
            />
            <span className="relative">Download Resume</span>
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="group relative px-8 py-3 rounded-full bg-portfolio-light-gray/50 text-foreground font-semibold hover-lift transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-portfolio-soft-blue/20 to-portfolio-mint/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative group-hover:text-portfolio-soft-blue transition-colors duration-300">
              Contact Me
            </span>
          </button>
        </div>

        {/* Scroll indicator with animation */}
        <div className="flex justify-center animate-bounce">
          <div className="w-6 h-10 border-2 border-portfolio-soft-blue rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-portfolio-soft-blue rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
