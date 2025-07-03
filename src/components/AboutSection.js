import * as motion from "motion/react-client";

export default function AboutSection() {
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
    <section id="about" className="bg-background scroll-mt-24 py-20">
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
              About Me
            </h2>
            <div className="bg-primary mx-auto h-1 w-20 rounded-full"></div>
          </motion.div>

          {/* About Content */}
          <div className="grid items-center gap-12 md:grid-cols-2 md:items-start">
            {/* Left Column - Personal Story */}
            <motion.div
              variants={aboutItemVariants}
              className="space-y-6 md:mt-0"
            >
              <h3 className="text-primary text-2xl font-semibold">
                My Journey
              </h3>
              <p className="text-lg leading-relaxed">
                My journey into the world of development began with curiosity
                and has evolved into a passionate pursuit of creating meaningful
                digital experiences. I believe in the power of technology to
                solve real-world problems and make life better for people.
              </p>
              <p className="text-lg leading-relaxed">
                I have over 4 years of experience in software development,
                working across diverse projects and technologies.
              </p>
              <p className="text-lg leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community. I&apos;m always eager to
                learn and grow, staying updated with the latest trends and best
                practices in web development.
              </p>
              {/* Education Section - Step Form */}
              <div className="pt-4">
                <h3 className="text-primary mb-6 text-2xl font-semibold">
                  Education
                </h3>
                <ol className="border-primary/30 relative ml-4 border-l-2">
                  <li className="mb-8 ml-6">
                    <span className="bg-primary ring-background absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold text-white ring-4">
                      1
                    </span>
                    <div className="text-muted-foreground text-lg">
                      <span className="text-primary font-semibold">
                        Bachelor of Technology in Computer Science
                      </span>
                      <br />
                      Dummy University,{" "}
                      <span className="text-sm text-gray-500">2020</span>
                    </div>
                  </li>
                  <li className="mb-8 ml-6">
                    <span className="bg-primary ring-background absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold text-white ring-4">
                      2
                    </span>
                    <div className="text-muted-foreground text-lg">
                      <span className="text-primary font-semibold">
                        Master of Science in Software Engineering
                      </span>
                      <br />
                      Placeholder Institute,{" "}
                      <span className="text-sm text-gray-500">2022</span>
                    </div>
                  </li>
                  <li className="ml-6">
                    <span className="bg-primary ring-background absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold text-white ring-4">
                      3
                    </span>
                    <div className="text-muted-foreground text-lg">
                      <span className="text-primary font-semibold">
                        Diploma in Web Development
                      </span>
                      <br />
                      Example College,{" "}
                      <span className="text-sm text-gray-500">2018</span>
                    </div>
                  </li>
                </ol>
              </div>
            </motion.div>

            {/* Right Column - Skills & Expertise */}
            <motion.div
              variants={aboutItemVariants}
              className="space-y-6 md:mt-0"
            >
              <h3 className="text-primary text-2xl font-semibold">What I Do</h3>
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <h4 className="text-primary mb-2 font-semibold">
                    Frontend Development
                  </h4>
                  <p className="text-sm">
                    Creating responsive, interactive user interfaces with React,
                    Next.js, and modern CSS frameworks. Focus on performance and
                    user experience.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <h4 className="text-primary mb-2 font-semibold">
                    Backend Development
                  </h4>
                  <p className="text-sm">
                    Building robust APIs and server-side applications with
                    Node.js, databases, and cloud services. Emphasis on
                    scalability and security.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <h4 className="text-primary mb-2 font-semibold">
                    Full-Stack Solutions
                  </h4>
                  <p className="text-sm">
                    End-to-end application development from concept to
                    deployment, ensuring seamless integration between frontend
                    and backend systems.
                  </p>
                </div>
              </div>
              {/* Tech Stack */}
              <div>
                <h3 className="text-primary mb-8 text-center text-2xl font-semibold md:text-left">
                  Technologies I Work With
                </h3>
                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Python",
                    "MongoDB",
                    "PostgreSQL",
                    "AWS",
                    "Docker",
                    "Git",
                    "Tailwind CSS",
                    "Express.js",
                    "REST APIs",
                    "GraphQL",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
