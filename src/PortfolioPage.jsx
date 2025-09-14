import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PortfolioPage({ profileImage, palette = {}, data = {} }) {
  const navigate = useNavigate();
  const [showTransition, setShowTransition] = useState(false);

  const defaults = {
    name: "First Last",
    title: "Product Designer & Frontend Engineer",
    location: "City, Country",
    email: "name@example.com",
    bio: "I build polished, user-friendly web apps. I focus on delightful UX, accessible interfaces and clean engineering.",
    resumeUrl: "#",
    links: { github: "#", linkedin: "#", website: "#" },
    experience: [],
    projects: [],
    skills: []
  };

  const d = { ...defaults, ...data };
  d.links = { ...defaults.links, ...(data.links || {}) };

  const colors = {
    primary: palette.primary || "#5c2e2e",
    accent: palette.accent || "#8b4513",
    neutral: palette.neutral || "#111827"
  };

  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
  };

  const sectionFade = {
    initial: { y: 10, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const handleSeeMore = () => {
    setShowTransition(true);
    setTimeout(() => navigate("/projects"), 600);
  };

  return (
    <div
      className="min-h-screen bg-white text-gray-900"
      style={{ ["--primary"]: colors.primary, ["--accent"]: colors.accent }}
    >
      {/* NAV */}
      <nav className="w-full px-6 py-4 flex items-center justify-between">
        <div
          className="text-lg md:text-xl font-semibold select-none"
          style={{ color: colors.primary }}
        >
          {d.name.split(" ")[0]}
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#projects" className="hover:underline" style={{ color: colors.primary }}>Projects</a>
          <a href="#experience" className="hover:underline" style={{ color: colors.primary }}>Experience</a>
          <a href="#contact" className="hover:underline" style={{ color: colors.primary }}>Contact</a>
          <a
            href={d.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
            style={{
              backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
              color: "white"
            }}
          >
            Resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="w-full px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div {...sectionFade} className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hello I’m{" "}
            <span
              className="text-transparent bg-clip-text drop-shadow-lg"
              style={{
                backgroundImage: `linear-gradient(90deg, #fccba6ff, #f4a884ff, #a0522d)`
              }}
            >
              {d.name}
            </span>
            <div className="text-2xl font-medium text-gray-600 mt-2">{d.title}</div>
          </h1>

          <p className="text-gray-700 max-w-xl">{d.bio}</p>

          <div className="flex items-center gap-3 flex-wrap">
            <a href={d.links.github} aria-label="github" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-gray-200 hover:shadow-sm transition text-[#f4a884ff]">
              <Github size={16} /> <span className="hidden sm:inline">GitHub</span>
            </a>

            <a href={d.links.linkedin} aria-label="linkedin" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-gray-200 hover:shadow-sm transition text-[#f4a884ff]">
              <Linkedin size={16} /> <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <a href={`mailto:${d.email}`} aria-label="email" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-gray-200 hover:shadow-sm transition text-[#f4a884ff]">
              <Mail size={16} /> <span className="hidden sm:inline">Email</span>
            </a>

            <a
              href={d.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-2xl px-4 py-2 shadow text-white"
              style={gradientStyle}
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div {...sectionFade} className="flex justify-center md:justify-end">
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={profileImage || "https://via.placeholder.com/400x400?text=Profile"}
              alt={`${d.name} profile`}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </header>

      

      {/* EXPERIENCE */}
<section id="experience" className="w-full px-6 py-10 bg-gray-50">
  <motion.div {...sectionFade} className="max-w-4xl mx-auto relative">
    <h2 className="text-2xl font-semibold mb-10 text-center">Experience</h2>

    {/* Vertical timeline line */}
    <div className="absolute left-5 top-0 h-full border-l-2 border-gray-300 hidden md:block"></div>

    <div className="flex flex-col gap-10">
      {d.experience.map((exp, idx) => (
        <motion.div
          key={idx}
          {...sectionFade}
          className="relative pl-12 md:pl-16 flex flex-col md:flex-row items-start md:items-center gap-4"
        >
          {/* Dot icon for timeline */}
          <div className="absolute left-0 md:left-4 top-2 w-4 h-4 bg-[#a0522d] rounded-full shadow-md"></div>

          {/* Date */}
          <div className="w-32 text-sm text-gray-500 font-medium">{exp.start} — {exp.end}</div>

          {/* Job info */}
          <div className="flex-1 space-y-1">
            <div className="text-lg font-semibold text-gray-800">{exp.role}</div>
            <div className="text-sm text-gray-600">{exp.company}</div>
            <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


      {/* PROJECTS */}
      <section id="projects" className="w-full px-6 py-10">
        <motion.div {...sectionFade} className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Selected Projects</h2>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleSeeMore}
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 shadow text-white"
                style={{ backgroundImage: "linear-gradient(135deg, #5c2e2e, #8b4513)" }}
              >
                See More
              </button>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.projects.slice(0, 3).map((p, i) => {
              const thumb = p.images && p.images.length > 0 ? p.images[0] : p.image;
              return (
                <motion.article
                  key={i}
                  className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition"
                  animate={showTransition ? { scale: 1.05 } : { scale: 1 }}
                >
                  <div className="h-48 bg-gray-50 flex items-center justify-center">
                    <img
                      src={thumb || "https://via.placeholder.com/400x300?text=Project+Preview"}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t, k) => (
                        <span key={k} className="text-xs px-2 py-1 rounded-lg border border-gray-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>

        


      {/* SERVICES */}
<section id="services" className="w-full px-6 py-10 bg-gray-50">
  <motion.div {...sectionFade} className="bg-white rounded-2xl shadow-sm p-6">
    <h2 className="text-2xl font-semibold mb-6">Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {d.services.map((service, idx) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={idx}
            {...sectionFade}
            className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col items-start gap-4"
          >
            <div className="flex items-center gap-3">
              <Icon size={28} className="text-[#a0522d]" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-700">{service.description}</p>
          </motion.div>
        );
      })}
    </div>
  </motion.div>
</section>




      {/* CONTACT */}
      <section id="contact" className="w-full px-6 py-10 bg-gray-50">
        <motion.div {...sectionFade} className="bg-white rounded-2xl shadow-sm p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">Contact Me</h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = {
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                message: e.target.message.value
              };

              try {
                const response = await fetch("http://localhost:5000/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(formData)
                });

                if (response.ok) {
                  alert("Message sent successfully!");
                  e.target.reset();
                } else {
                  alert("Failed to send message. Try again later.");
                }
              } catch (err) {
                console.error(err);
                alert("Error sending message. Make sure the server is running.");
              }
            }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border rounded-lg px-4 py-2 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#a0522d]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border rounded-lg px-4 py-2 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#a0522d]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="border rounded-lg px-4 py-2 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#a0522d]"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="border rounded-lg px-4 py-2 text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#a0522d]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#a0522d] text-white rounded-xl hover:shadow-md transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="w-full px-6 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {d.name}. Built with care.
      </footer>
    </div>
  );
}
