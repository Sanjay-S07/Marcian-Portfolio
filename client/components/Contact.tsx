import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, ExternalLink } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "marciandavid1904@gmail.com",
      href: "mailto:marciandavid1904@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9442540130",
      href: "tel:+919442540130",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Coimbatore, Tamil Nadu",
      href: "https://maps.google.com",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/marcian-benedict-9b1331282",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/MARCIANBENEDICT",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:marciandavid1904@gmail.com",
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-transparent via-portfolio-mint/5 to-transparent">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Get In <span className="bg-gradient-to-r from-portfolio-soft-blue to-portfolio-mint bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto">
          Have a question or want to collaborate? I'd love to hear from you. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <a
                key={index}
                href={info.href}
                className="group rounded-2xl card-gradient p-6 border border-portfolio-light-gray hover-lift animate-slide-up text-center relative overflow-hidden transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-soft-blue/5 to-portfolio-mint/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-12 h-12 rounded-lg bg-portfolio-soft-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-portfolio-soft-blue/20 group-hover:scale-110 transition-all duration-300 relative z-10">
                  <IconComponent size={24} className="text-portfolio-soft-blue group-hover:animate-bounce" />
                </div>
                <p className="text-sm text-foreground/60 font-medium mb-1 relative z-10">{ info.label}</p>
                <p className="text-lg font-semibold text-foreground group-hover:text-portfolio-soft-blue transition-colors relative z-10">
                  {info.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* Contact Form and Social Links */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Contact Form */}
          <div className="rounded-2xl card-gradient p-8 border border-portfolio-light-gray animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Message</h3>

            {submitted ? (
              <div className="p-8 rounded-xl bg-portfolio-mint/10 border border-portfolio-mint/30 text-center animate-slide-up">
                <div className="text-5xl mb-4">✨</div>
                <p className="text-lg font-semibold text-foreground mb-2">Message Sent Successfully!</p>
                <p className="text-foreground/60">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-portfolio-light-gray bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-portfolio-soft-blue/50 transition-smooth"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-portfolio-light-gray bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-portfolio-soft-blue/50 transition-smooth"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-portfolio-light-gray bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-portfolio-soft-blue/50 transition-smooth"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-portfolio-light-gray bg-white text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-portfolio-soft-blue/50 transition-smooth resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-portfolio-soft-blue to-portfolio-mint text-white font-semibold hover-lift flex items-center justify-center gap-2"
                >
                  Send Message
                  <ExternalLink size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Social Links and Info */}
          <div className="space-y-8">
            {/* Social Links */}
            <div className="rounded-2xl card-gradient p-8 border border-portfolio-light-gray animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group rounded-xl p-4 bg-gradient-to-br ${social.color} text-white font-semibold hover-lift flex items-center justify-center gap-2 transition-transform hover:scale-105`}
                    >
                      <IconComponent size={20} />
                      <span className="hidden sm:inline">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="rounded-2xl card-gradient p-8 border border-portfolio-light-gray animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-lg font-bold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { label: "Download Resume", href: "#" },
                  { label: "View GitHub Profile", href: "#" },
                  { label: "LinkedIn Profile", href: "#" },
                  { label: "Schedule a Call", href: "#" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-foreground/70 hover:text-portfolio-soft-blue transition-colors font-medium"
                    >
                      <ExternalLink size={16} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-portfolio-light-gray/30 pt-8 text-center">
          <p className="text-foreground/60 text-sm mb-4">
            Looking forward to connecting with you! Whether it's a project collaboration, job opportunity, or just to chat about technology.
          </p>
          <p className="text-foreground/40 text-xs">
            © {new Date().getFullYear()} Marcian Benedict. All rights reserved. | Built with React, Tailwind CSS & ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
