import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Crowdsourced Hyperlocal Alert Platform",
      year: 2024,
      description: "A real-time alert system that crowdsources local incidents and emergencies, helping communities stay informed about nearby events.",
      techStack: ["React", "Node.js", "MongoDB", "Real-time APIs"],
      tags: ["Community", "Safety", "Real-time"],
      highlighted: true,
    },
    {
      id: 2,
      title: "Preventing Accidents on Train Tracks",
      year: 2024,
      description: "An IoT-based solution using sensors and machine learning to detect and prevent accidents on railway tracks in real-time.",
      techStack: ["Python", "IoT", "Machine Learning", "PostgreSQL"],
      tags: ["Safety", "IoT", "ML"],
      highlighted: true,
    },
    {
      id: 3,
      title: "OrphanConnect",
      year: 2023,
      description: "A comprehensive platform connecting orphans with resources, mentors, and opportunities for education and career development.",
      techStack: ["React", "Firebase", "Tailwind CSS", "Express.js"],
      tags: ["Social Impact", "Education"],
      highlighted: true,
    },
    {
      id: 4,
      title: "Canteen Rush Management System",
      year: 2023,
      description: "A management system to streamline canteen operations, reduce queue times, and improve order fulfillment efficiency.",
      techStack: ["Vue.js", "Flask", "MySQL", "Stripe"],
      tags: ["Management", "E-commerce"],
      highlighted: true,
    },
    {
      id: 5,
      title: "Task Management Dashboard",
      year: 2023,
      description: "A collaborative task management tool with real-time updates, team collaboration features, and progress tracking.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      tags: ["Productivity", "Collaboration"],
    },
    {
      id: 6,
      title: "Personal Blog Platform",
      year: 2022,
      description: "A fully featured blogging platform with markdown support, comments, and social sharing capabilities.",
      techStack: ["Next.js", "MongoDB", "NextAuth", "Cloudinary"],
      tags: ["Content", "Blogging"],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-transparent via-portfolio-mint/5 to-transparent">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Featured <span className="bg-gradient-to-r from-portfolio-soft-blue to-portfolio-mint bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          Showcasing my best work across different domains and technologies
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {projects.slice(0, 4).map((project, index) => (
            <div
              key={project.id}
              className="group rounded-2xl card-gradient overflow-hidden border border-portfolio-light-gray hover-lift animate-slide-up flex flex-col relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-soft-blue/0 to-portfolio-mint/0 group-hover:from-portfolio-soft-blue/5 group-hover:to-portfolio-mint/5 transition-all duration-500 pointer-events-none"></div>
              {/* Project Header Background */}
              <div className={`h-40 bg-gradient-to-br from-portfolio-soft-blue/20 to-portfolio-mint/20 relative overflow-hidden group-hover:from-portfolio-soft-blue/30 group-hover:to-portfolio-mint/30 transition-all duration-500`}>
                {project.highlighted && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-portfolio-soft-blue text-white text-xs font-semibold animate-pulse-soft">
                    ⭐ Featured
                  </div>
                )}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-portfolio-soft-blue/30 to-portfolio-mint/30 flex items-center justify-center">
                  <div className="flex gap-3">
                    <a href="#" className="p-3 rounded-full bg-white text-portfolio-soft-blue hover-lift">
                      <ExternalLink size={20} />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-white text-portfolio-soft-blue hover-lift">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                    <p className="text-sm text-foreground/60">{project.year}</p>
                  </div>
                </div>

                <p className="text-foreground/70 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-portfolio-soft-blue/10 text-portfolio-soft-blue border border-portfolio-soft-blue/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-portfolio-light-gray/30">
                  <p className="text-xs font-semibold text-foreground/60 mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-full text-xs bg-portfolio-light-gray/50 text-foreground/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(4).map((project, index) => (
              <div
                key={project.id}
                className="group rounded-xl card-gradient p-5 border border-portfolio-light-gray hover-lift animate-slide-up transition-smooth"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-foreground">{project.title}</h4>
                    <p className="text-xs text-foreground/60">{project.year}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-portfolio-light-gray/50 text-foreground/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-portfolio-soft-blue text-portfolio-soft-blue font-semibold hover-lift hover:bg-portfolio-soft-blue/5 transition-colors"
          >
            View All Projects
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
