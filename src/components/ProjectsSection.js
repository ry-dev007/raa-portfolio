"use client";
import * as motion from "motion/react-client";

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
              Featured Projects
            </h2>
            <div className="bg-primary mx-auto h-1 w-20 rounded-full"></div>
            <p className="text-muted-foreground mt-4 text-lg">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <motion.div
              variants={aboutItemVariants}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-4">
                <div className="text-center text-white">
                  <div className="mb-2 text-4xl">🚀</div>
                  <div className="text-sm font-medium">Project Demo</div>
                </div>
              </div>
              <h3 className="text-primary mb-2 text-xl font-semibold">
                E-Commerce Platform
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                A full-stack e-commerce solution with user authentication,
                payment integration, and admin dashboard. Built with modern
                technologies for optimal performance.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {["React", "Node.js", "MongoDB", "Stripe"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex gap-3">
                <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                  Live Demo →
                </button>
                <button className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">
                  GitHub →
                </button>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              variants={aboutItemVariants}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-teal-600 p-4">
                <div className="text-center text-white">
                  <div className="mb-2 text-4xl">📱</div>
                  <div className="text-sm font-medium">Mobile App</div>
                </div>
              </div>
              <h3 className="text-primary mb-2 text-xl font-semibold">
                Task Management App
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                A productivity app with real-time collaboration, drag-and-drop
                functionality, and cross-platform synchronization. Designed for
                teams and individuals.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {["React Native", "Firebase", "Redux", "TypeScript"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex gap-3">
                <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                  Live Demo →
                </button>
                <button className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">
                  GitHub →
                </button>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              variants={aboutItemVariants}
              className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600 p-4">
                <div className="text-center text-white">
                  <div className="mb-2 text-4xl">🎨</div>
                  <div className="text-sm font-medium">Design System</div>
                </div>
              </div>
              <h3 className="text-primary mb-2 text-xl font-semibold">
                Component Library
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                A comprehensive design system and component library with
                documentation, accessibility features, and theme customization.
                Used across multiple projects.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {["React", "Storybook", "Tailwind", "Figma"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex gap-3">
                <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                  Live Demo →
                </button>
                <button className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors">
                  GitHub →
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
