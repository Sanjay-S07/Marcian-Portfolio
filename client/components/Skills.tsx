import { Code2, Palette, Database, Wrench, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      id: "languages",
      title: "Programming Languages",
      icon: Code2,
      color: "from-portfolio-soft-blue to-blue-400",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"],
    },
    {
      id: "frontend",
      title: "Web Technologies",
      icon: Palette,
      color: "from-portfolio-mint to-green-400",
      skills: ["React", "Vue.js", "Tailwind CSS", "Bootstrap", "Responsive Design", "Accessibility"],
    },
    {
      id: "frameworks",
      title: "Frameworks & Libraries",
      icon: Globe,
      color: "from-blue-400 to-cyan-400",
      skills: ["Node.js", "Express.js", "Next.js", "Vite", "Framer Motion", "Axios"],
    },
    {
      id: "databases",
      title: "Databases",
      icon: Database,
      color: "from-portfolio-lavender to-purple-400",
      skills: ["MongoDB", "PostgreSQL", "Firebase", "MySQL", "Redis", "Supabase"],
    },
    {
      id: "tools",
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-orange-400 to-red-400",
      skills: ["Git", "GitHub", "Docker", "Netlify", "Vercel", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-transparent via-portfolio-lavender/5 to-transparent">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Technical <span className="bg-gradient-to-r from-portfolio-soft-blue to-portfolio-mint bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          A comprehensive set of skills developed through continuous learning and practical experience
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group rounded-2xl card-gradient p-6 border border-portfolio-light-gray hover-lift animate-slide-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-soft-blue/5 to-portfolio-mint/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Header */}
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:-rotate-6`}>
                    <IconComponent size={24} className="text-white group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-portfolio-soft-blue transition-colors duration-300">{category.title}</h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-portfolio-light-gray/50 text-foreground/70 border border-portfolio-light-gray/30 group-hover:bg-portfolio-light-gray/70 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Progress indicator */}
                <div className="mt-6 pt-6 border-t border-portfolio-light-gray/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-foreground/60">Proficiency</span>
                    <span className="text-xs font-semibold text-portfolio-soft-blue">Expert</span>
                  </div>
                  <div className="w-full h-2 bg-portfolio-light-gray/50 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${category.color} transition-all duration-500 group-hover:w-full`} style={{ width: "85%" }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 rounded-2xl card-gradient p-8 border border-portfolio-light-gray">
          <h3 className="text-2xl font-bold text-foreground mb-6">Other Competencies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Soft Skills", items: ["Leadership", "Communication", "Problem Solving", "Time Management"] },
              { title: "Professional Skills", items: ["Agile Methodology", "Code Review", "Technical Documentation", "API Integration"] },
            ].map((section) => (
              <div key={section.title}>
                <p className="font-semibold text-foreground mb-3">{section.title}</p>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-foreground/70">
                      <div className="w-2 h-2 rounded-full bg-portfolio-mint" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
