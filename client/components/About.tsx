import { MapPin, Star } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-gradient-to-b from-transparent via-portfolio-mint/5 to-transparent relative overflow-hidden"
    >
      {/* Animated background accents */}
      <div
        className="absolute top-20 right-20 w-40 h-40 bg-portfolio-lavender/5 rounded-full blur-3xl animate-blob-slow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-20 left-20 w-52 h-52 bg-portfolio-soft-blue/5 rounded-full blur-3xl animate-blob-fast"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto relative z-10">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          About{" "}
          <span className="bg-gradient-to-r from-portfolio-soft-blue to-portfolio-mint bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div
            className="flex justify-center animate-slide-left"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Animated decorative circle background */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-portfolio-soft-blue/20 to-portfolio-mint/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-blob"
                style={{ animationDuration: "8s" }}
              />

              {/* Floating accent rings */}
              <div className="absolute -inset-4 rounded-3xl border border-portfolio-soft-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float-slow" />

              {/* Profile Image with gradient border */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-gradient-to-br from-portfolio-soft-blue to-portfolio-mint shadow-lg hover-lift group-hover:shadow-2xl transition-all duration-500">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fcb591da3b3b0445c8c64a536cfb20553%2Ffe020ded63984f9b91ff364f32e5b870?format=webp&width=800"
                  alt="Marcian Benedict - Professional headshot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CGPA Badge with floating animation */}
              <div
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-6 py-4 shadow-lg border-2 border-portfolio-lavender/30 hover-lift animate-float-medium"
                style={{ animationDuration: "4s" }}
              >
                <p className="text-sm text-foreground/60 font-medium">CGPA</p>
                <p className="text-3xl font-bold text-portfolio-soft-blue">
                  8.63
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="space-y-8 animate-slide-right"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Location */}
            <div className="flex items-start gap-4 group hover:translate-x-1 transition-transform duration-300 p-4 rounded-2xl hover:bg-portfolio-soft-blue/5 transition-colors duration-300">
              <div className="w-12 h-12 rounded-full bg-portfolio-soft-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-portfolio-soft-blue/20 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 animate-float-fast">
                <MapPin
                  size={20}
                  className="text-portfolio-soft-blue group-hover:animate-bounce"
                />
              </div>
              <div>
                <p className="text-sm text-foreground/60 font-medium">
                  Location
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Coimbatore, Tamil Nadu
                </p>
              </div>
            </div>

            {/* About Text */}
            <div className="p-4 rounded-2xl hover:bg-portfolio-mint/5 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Professional Summary
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                I'm a passionate Computer Science Engineering student with a
                strong foundation in full-stack web development. With hands-on
                experience in building scalable applications and a keen interest
                in problem-solving, I strive to create innovative solutions that
                make a real impact.
              </p>
            </div>

            {/* Highlights with staggered animations */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-portfolio-mint/10 border border-portfolio-mint/30 hover:border-portfolio-mint/60 hover:bg-portfolio-mint/15 transition-all duration-300 hover-lift group">
                <p className="text-sm text-foreground/60 font-medium group-group-hover:text-foreground transition-colors duration-300">
                  Experience
                </p>
                <p
                  className="text-2xl font-bold text-portfolio-mint animate-float-slow"
                  style={{ animationDuration: "4s" }}
                >
                  2+ Years
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-portfolio-lavender/10 border border-portfolio-lavender/30 hover:border-portfolio-lavender/60 hover:bg-portfolio-lavender/15 transition-all duration-300 hover-lift group">
                <p className="text-sm text-foreground/60 font-medium group-hover:text-foreground transition-colors duration-300">
                  Projects
                </p>
                <p
                  className="text-2xl font-bold text-portfolio-lavender animate-float-medium"
                  style={{ animationDuration: "4.5s" }}
                >
                  15+
                </p>
              </div>
            </div>

            {/* Key Skills */}
            <div className="p-4 rounded-2xl hover:bg-portfolio-soft-blue/5 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Star
                  size={20}
                  className="text-portfolio-soft-blue animate-float-fast"
                />
                Core Strengths
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving",
                  "Full Stack Dev",
                  "UI/UX Design",
                  "Team Collaboration",
                  "Quick Learner",
                  "Adaptability",
                ].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-portfolio-soft-blue/10 text-portfolio-soft-blue border border-portfolio-soft-blue/30 hover:bg-portfolio-soft-blue/20 hover:border-portfolio-soft-blue/50 transition-all duration-300 hover-lift animate-slide-up"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
