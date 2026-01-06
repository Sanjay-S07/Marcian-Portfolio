import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "experience", "certifications", "leadership", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "leadership", label: "Leadership" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-8 py-4 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="text-2xl font-bold bg-gradient-to-r from-portfolio-soft-blue to-portfolio-mint bg-clip-text text-transparent">
          MB
        </div>

        <div className="flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-all duration-300 relative group ${
                activeSection === link.id
                  ? "text-portfolio-soft-blue font-semibold"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {link.label}
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-portfolio-soft-blue to-portfolio-mint transition-all duration-300 ${
                activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
              }`}></div>
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToSection("contact")}
          className="group px-6 py-2 rounded-full bg-gradient-to-r from-portfolio-soft-blue to-portfolio-mint text-white font-medium hover-lift text-sm relative overflow-hidden transition-all duration-300"
        >
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative">Contact</span>
        </button>
      </nav>

      {/* Mobile Navigation Trigger */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="text-xl font-bold bg-gradient-to-r from-portfolio-soft-blue to-portfolio-mint bg-clip-text text-transparent">
          MB
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-white/95 backdrop-blur-md pt-8 px-4 animate-slide-down">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left py-2 px-4 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? "bg-portfolio-soft-blue/10 text-portfolio-soft-blue font-semibold"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-portfolio-soft-blue to-portfolio-mint text-white font-medium hover-lift w-full"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-portfolio-light-gray px-4 py-3 flex justify-around gap-2">
        {navLinks.slice(0, 5).map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`text-xs py-2 px-2 rounded-lg transition-colors flex-1 ${
              activeSection === link.id
                ? "bg-portfolio-soft-blue/10 text-portfolio-soft-blue font-semibold"
                : "text-foreground/60 hover:text-foreground"
            }`}
          >
            {link.label === "Home" ? "Home" : link.label === "About" ? "About" : link.label === "Skills" ? "Skills" : link.label === "Projects" ? "Projects" : "Exp"}
          </button>
        ))}
        <button
          onClick={() => scrollToSection("contact")}
          className="text-xs py-2 px-2 rounded-lg bg-portfolio-soft-blue text-white font-medium hover-lift flex-1"
        >
          Contact
        </button>
      </div>

      {/* Add padding to top for mobile due to fixed nav */}
      <div className="md:hidden h-16" />
      {/* Add padding to bottom for mobile due to bottom nav */}
      <div className="md:hidden h-20" />
    </>
  );
};

export default Navigation;
