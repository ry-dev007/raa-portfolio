"use client";
import * as motion from "motion/react-client";
import projectsContent from "@/content/projects.json";

export default function ProjectsSection() {
  const aboutVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const aboutItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={aboutVariants}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={aboutItemVariants} className="text-center">
            <h2 className="text-primary font-secondary mb-4 text-4xl font-bold">
              {projectsContent.sectionTitle}
            </h2>
            <div className="bg-primary mx-auto h-1 w-20 rounded-full"></div>
            <p className="text-muted-foreground mt-4 text-lg">
              {projectsContent.subtitle}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectsContent.projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={aboutItemVariants}
                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <div
                  className={`mb-4 flex h-48 items-center justify-center rounded-lg bg-gradient-to-br p-4 ${
                    idx === 0
                      ? "from-blue-500 to-purple-600"
                      : idx === 1
                        ? "from-green-500 to-teal-600"
                        : "from-orange-500 to-red-600"
                  }`}
                >
                  <div className="text-center text-white">
                    <div className="mb-2 text-4xl">{project.emoji}</div>
                    <div className="text-sm font-medium">{project.type}</div>
                  </div>
                </div>
                <h3 className="text-primary mb-2 text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
                  >
                    GitHub →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
