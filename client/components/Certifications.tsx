import { Award, Trophy, Medal, Star } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "MERN Stack Development",
      issuer: "Udemy",
      date: "2024",
      icon: Star,
      color: "from-blue-400 to-cyan-400",
      highlighted: true,
    },
    {
      id: 2,
      title: "NPTEL - Data Structures",
      issuer: "NPTEL",
      date: "2023",
      icon: Medal,
      color: "from-yellow-400 to-orange-400",
      highlighted: true,
    },
    {
      id: 3,
      title: "Microsoft Azure Developer",
      issuer: "Microsoft",
      date: "2023",
      icon: Trophy,
      color: "from-blue-500 to-purple-500",
      highlighted: true,
    },
    {
      id: 4,
      title: "HackerRank Gold Badge",
      issuer: "HackerRank",
      date: "2023",
      icon: Award,
      color: "from-green-400 to-emerald-400",
      highlighted: true,
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Best Project Award",
      event: "College Tech Fest 2023",
      date: "2023",
    },
    {
      id: 2,
      title: "First Place - Hackathon",
      event: "TechVision Hackathon 2023",
      date: "2023",
    },
    {
      id: 3,
      title: "Dean's List",
      event: "College Recognition",
      date: "2023",
    },
    {
      id: 4,
      title: "Top Performer Intern",
      event: "Frenzo Technologies",
      date: "2023",
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-transparent via-portfolio-mint/5 to-transparent">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Certifications & <span className="bg-gradient-to-r from-portfolio-soft-blue to-portfolio-mint bg-clip-text text-transparent">Achievements</span>
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          Recognitions and credentials earned through dedication and continuous learning
        </p>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={cert.id}
                  className="group rounded-2xl card-gradient p-6 border border-portfolio-light-gray hover-lift animate-slide-up flex flex-col items-center text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon Badge */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <IconComponent size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-sm text-foreground/60 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-foreground/40 mb-4">{cert.date}</p>

                  {/* Highlight badge */}
                  {cert.highlighted && (
                    <div className="mt-auto pt-4 border-t border-portfolio-light-gray/30 w-full">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-portfolio-soft-blue/10 text-portfolio-soft-blue text-xs font-semibold">
                        <Star size={12} />
                        Verified
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Awards & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="group rounded-2xl card-gradient p-6 border border-portfolio-light-gray hover-lift animate-slide-up flex items-start gap-4"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-portfolio-soft-blue to-portfolio-mint flex items-center justify-center flex-shrink-0">
                  <Trophy size={24} className="text-white" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-foreground mb-1">{achievement.title}</h4>
                  <p className="text-sm text-foreground/60 mb-1">{achievement.event}</p>
                  <p className="text-xs text-foreground/40">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Stats */}
        <div className="rounded-2xl card-gradient p-8 border border-portfolio-light-gray">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Certifications", value: "4", icon: Award },
              { label: "Achievements", value: "4+", icon: Trophy },
              { label: "Total Credits", value: "120+", icon: Medal },
              { label: "Learning Hours", value: "500+", icon: Star },
            ].map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} className="space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-portfolio-soft-blue to-portfolio-mint flex items-center justify-center mx-auto">
                    <StatIcon size={24} className="text-white" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-foreground/60">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
