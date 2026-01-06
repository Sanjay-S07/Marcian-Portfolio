import { Zap, Users, BookOpen, Rocket } from "lucide-react";

const Leadership = () => {
  const activities = [
    {
      id: 1,
      title: "ISTE Student Member",
      description: "Active member of Indian Society for Technical Education, participating in technical workshops and mentoring programs.",
      icon: Users,
      color: "from-portfolio-soft-blue to-blue-400",
      tags: ["Membership", "Mentoring"],
    },
    {
      id: 2,
      title: "Workshop: Web Development Fundamentals",
      description: "Conducted a comprehensive workshop for 50+ junior students covering HTML, CSS, and JavaScript fundamentals.",
      icon: BookOpen,
      color: "from-portfolio-mint to-green-400",
      tags: ["Workshop", "Teaching"],
    },
    {
      id: 3,
      title: "Paper Presentation: IoT in Education",
      description: "Presented research paper on implementing IoT solutions in educational institutions at national conference.",
      icon: Rocket,
      color: "from-portfolio-lavender to-purple-400",
      tags: ["Research", "Conference"],
    },
    {
      id: 4,
      title: "Tech Community Lead",
      description: "Leading technical discussions and organizing coding competitions to foster a culture of learning and innovation.",
      icon: Zap,
      color: "from-orange-400 to-red-400",
      tags: ["Leadership", "Community"],
    },
  ];

  const leadership_details = [
    {
      category: "Workshops Conducted",
      count: "5+",
      description: "Technical workshops on various topics",
    },
    {
      category: "Paper Presentations",
      count: "2",
      description: "Research papers presented",
    },
    {
      category: "Students Mentored",
      count: "20+",
      description: "Junior developers guided",
    },
    {
      category: "Community Events",
      count: "10+",
      description: "Organized tech meetups",
    },
  ];

  return (
    <section id="leadership" className="section-padding bg-gradient-to-b from-transparent via-portfolio-lavender/5 to-transparent">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Leadership & <span className="bg-gradient-to-r from-portfolio-soft-blue to-portfolio-mint bg-clip-text text-transparent">Activities</span>
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          Contributing to the community through teaching, mentoring, and technical initiatives
        </p>

        {/* Main Activities Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div
                key={activity.id}
                className="group rounded-2xl card-gradient p-6 border border-portfolio-light-gray hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${activity.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground flex-grow">{activity.title}</h3>
                </div>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  {activity.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-portfolio-light-gray/30">
                  {activity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-portfolio-light-gray/50 text-foreground/70 border border-portfolio-light-gray/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Leadership Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {leadership_details.map((detail, index) => (
            <div
              key={detail.category}
              className="rounded-2xl card-gradient p-6 border border-portfolio-light-gray text-center hover-lift animate-slide-up"
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <p className="text-4xl font-bold bg-gradient-to-r from-portfolio-soft-blue to-portfolio-mint bg-clip-text text-transparent mb-2">
                {detail.count}
              </p>
              <p className="font-semibold text-foreground mb-1">{detail.category}</p>
              <p className="text-xs text-foreground/60">{detail.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Roles */}
        <div className="rounded-2xl card-gradient p-8 border border-portfolio-light-gray">
          <h3 className="text-2xl font-bold text-foreground mb-8">Current Roles & Positions</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                role: "Technical Mentor",
                organization: "College Tech Committee",
                responsibilities: ["Mentor junior developers", "Code review sessions", "Technical skill development"],
              },
              {
                role: "Community Organizer",
                organization: "Local Developer Groups",
                responsibilities: ["Organize meetups", "Plan workshops", "Build community networks"],
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-foreground">{item.role}</h4>
                  <p className="text-sm text-foreground/60">{item.organization}</p>
                </div>
                <ul className="space-y-2">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-portfolio-mint mt-2 flex-shrink-0" />
                      <span className="text-foreground/70 text-sm">{responsibility}</span>
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

export default Leadership;
