import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProjectsPage({ data }) {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const gradientStyle = {
    backgroundImage: "linear-gradient(135deg, #5c2e2e, #8b4513)",
  };

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Auto-slide effect when a project is opened
  useEffect(() => {
    if (!selectedProject || !selectedProject.images) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 < selectedProject.images.length ? prev + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedProject]);

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="w-full min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* NAVBAR */}
      <nav className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-sm rounded-2xl mb-10">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.location.href = "/"}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#a0522d]">
            <img
              src="/profile.jpg"
              alt="Profile Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/400x400?text=Profile";
              }}
            />
          </div>
          <span className="text-lg md:text-xl font-semibold select-none text-[#a0522d]">
            {data?.name?.split(" ")[0] ?? "Sreehari"}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#projects" className="hover:underline text-[#a0522d]">Projects</a>
          <a href="#experience" className="hover:underline text-[#a0522d]">Experience</a>
          <a href="#contact" className="hover:underline text-[#a0522d]">Contact</a>
          <a
            href={data?.resumeUrl ?? "#"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
            style={{
              backgroundImage: "linear-gradient(135deg, #5c2e2e, #8b4513)",
              color: "white",
            }}
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-6 py-10" id="projects-list">
        <h1 className="text-4xl font-bold mb-12 text-center">All Projects</h1>

        <motion.div
          className="space-y-12 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {data.projects.map((p, idx) => (
            <motion.article
              key={idx}
              className="rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col md:flex-row bg-white max-w-full mx-auto"
              variants={itemVariants}
            >
              <div
                className="md:w-1/3 w-full h-64 md:h-auto cursor-pointer flex-shrink-0"
                onClick={() => {
                  setSelectedProject(p);
                  setCurrentIndex(0);
                }}
              >
                <img
                  src={p.images ? p.images[0] : p.image}
                  alt={p.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="md:w-2/3 w-full p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">{p.title}</h2>
                  <p className="mt-2 text-gray-700">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-lg border border-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full relative max-h-[90vh] flex flex-col">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-800 hover:text-red-600 z-10"
              >
                <X size={24} />
              </button>

              {/* Carousel */}
              <div className="flex-shrink-0 flex items-center justify-center bg-black relative">
                <img
                  src={selectedProject.images ? selectedProject.images[currentIndex] : selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[60vh] object-contain"
                />
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, i) => (
                      <span
                        key={i}
                        className={`w-3 h-3 rounded-full ${i === currentIndex ? "bg-white" : "bg-gray-500"}`}
                      ></span>
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-gray-700 mb-4">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-lg border border-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {selectedProject.repo && (
                    <a
                      href={selectedProject.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl text-white shadow"
                      style={gradientStyle}
                    >
                      Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl text-white shadow"
                      style={gradientStyle}
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
}
