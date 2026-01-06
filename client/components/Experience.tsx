import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Frenzo Technologies",
      role: "Full Stack Developer Intern",
      duration: "Jun 2023 - Aug 2023",
      location: "Bangalore",
      description: "Developed and maintained web applications using React and Node.js. Collaborated with senior developers to implement new features and fix bugs.",
      highlights: [
        "Built responsive UI components with React",
        "Created RESTful APIs using Express.js",
        "Optimized database queries improving performance by 30%",
        "Mentored junior developers on best practices",
      ],
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
    },
    {
      id: 2,
      company: "Avenza Consulting Services Pvt. Ltd.",
      role: "Software Developer Intern",
      duration: "Jan 2023 - Mar 2023",
      location: "Coimbatore",
      description: "Contributed to multiple client projects focusing on frontend development and user experience. Implemented pixel-perfect designs and interactive features.",
      highlights: [
        "Converted Figma designs to responsive React components",
        "Implemented form validation and error handling",
        "Participated in code reviews and quality assurance",
        "Documented technical implementations for team knowledge base",
      ],
      skills: ["Vue.js", "Tailwind CSS", "JavaScript", "API Integration"],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-transparent via-portfolio-lavender/5 to-transparent">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Professional <span className="bg-gradient-to-r from-portfolio-soft-blue to-portfolio-mint bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          My journey through internships and professional development
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-portfolio-soft-blue via-portfolio-mint to-portfolio-lavender rounded-full" />

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`grid md:grid-cols-2 gap-8 animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Alternate layout for desktop */}
                {index % 2 === 0 ? (
                  <>
                    {/* Left content */}
                    <div className="md:text-right md:pr-8">
                      <div className="rounded-2xl card-gradient p-6 border border-portfolio-light-gray hover-lift h-full">
                        <div className="flex items-start gap-3 md:flex-row-reverse mb-4">
                          <div className="w-10 h-10 rounded-lg bg-portfolio-soft-blue/10 flex items-center justify-center flex-shrink-0">
                            <Briefcase size={20} className="text-portfolio-soft-blue" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                            <p className="text-lg font-semibold text-portfolio-soft-blue">{exp.role}</p>
                          </div>
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-foreground/60 text-sm md:justify-end">
                            <Calendar size={16} />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-2 text-foreground/60 text-sm md:justify-end">
                            <MapPin size={16} />
                            {exp.location}
                          </div>
                        </div>

                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        <div className="pt-4 border-t border-portfolio-light-gray/30">
                          <p className="text-xs font-semibold text-foreground/60 mb-3">Skills Used</p>
                          <div className="flex flex-wrap gap-2 md:justify-end">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 rounded-full text-xs bg-portfolio-soft-blue/10 text-portfolio-soft-blue border border-portfolio-soft-blue/30"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:flex justify-center">
                      <div className="w-4 h-4 bg-portfolio-soft-blue rounded-full border-4 border-white shadow-lg" />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Timeline dot */}
                    <div className="hidden md:flex justify-center">
                      <div className="w-4 h-4 bg-portfolio-mint rounded-full border-4 border-white shadow-lg" />
                    </div>

                    {/* Right content */}
                    <div className="md:pl-8">
                      <div className="rounded-2xl card-gradient p-6 border border-portfolio-light-gray hover-lift h-full">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-portfolio-mint/10 flex items-center justify-center flex-shrink-0">
                            <Briefcase size={20} className="text-portfolio-mint" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                            <p className="text-lg font-semibold text-portfolio-mint">{exp.role}</p>
                          </div>
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-foreground/60 text-sm">
                            <Calendar size={16} />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-2 text-foreground/60 text-sm">
                            <MapPin size={16} />
                            {exp.location}
                          </div>
                        </div>

                        <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        <div className="pt-4 border-t border-portfolio-light-gray/30">
                          <p className="text-xs font-semibold text-foreground/60 mb-3">Skills Used</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3 py-1 rounded-full text-xs bg-portfolio-mint/10 text-portfolio-mint border border-portfolio-mint/30"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Experience Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { label: "Internships", value: "2+" },
            { label: "Companies", value: "2" },
            { label: "Total Duration", value: "6+ months" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl card-gradient p-6 border border-portfolio-light-gray text-center hover-lift">
              <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-portfolio-soft-blue to-portfolio-mint bg-clip-text mb-2">
                {stat.value}
              </p>
              <p className="text-foreground/60 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
