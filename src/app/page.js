import * as motion from "motion/react-client";
import ProfilePicture from "@/components/profile-picture/ProfilePicture";

export default function Home() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        type: "spring",
        duration: 0.6,

        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 2000 },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
  };

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
    <>
      {/* Hero Section */}
      <section className="overflow-x-hidden">
        <div className="mx-auto flex min-h-[calc(100dvh-120px)] max-w-[1600px] items-center justify-center px-4 py-8 md:h-[calc(100dvh-80px)] md:pb-16">
          {/* Mobile Layout */}
          <div className="flex w-full max-w-sm flex-col items-center gap-6 text-center md:hidden">
            <div className="flex w-full justify-center overflow-hidden">
              <ProfilePicture />
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              className="w-full px-4"
              variants={containerVariants}
            >
              <motion.p
                variants={itemVariants}
                className="text-primary font-secondary mb-6 text-3xl leading-tight font-bold sm:text-4xl"
              >
                Namaste🙏 I&apos;m Rahul
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="shine-text text-lg leading-relaxed sm:text-xl"
              >
                I&apos;m a passionate Full-Stack Developer crafting
                high-performance, scalable, and user-centric web applications.
                From pixel-perfect frontends to robust backends, I turn ideas
                into elegant, production-ready solutions. Driven by clean code,
                intuitive design, and the thrill of problem-solving — I build
                with purpose and precision. Let&apos;s create something
                exceptional.
              </motion.p>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden w-full md:flex md:items-center md:justify-center">
            <ProfilePicture />

            <motion.div
              initial="hidden"
              animate="visible"
              className="w-1/2"
              variants={containerVariants}
            >
              <motion.p
                variants={itemVariants}
                className="text-primary font-secondary mb-8 text-6xl leading-tight font-bold lg:text-7xl"
              >
                Namaste🙏 I&apos;m Rahul
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="shine-text max-w-[900px] text-xl leading-relaxed lg:text-2xl"
              >
                I&apos;m a passionate Full-Stack Developer crafting
                high-performance, scalable, and user-centric web applications.
                From pixel-perfect frontends to robust backends, I turn ideas
                into elegant, production-ready solutions. Driven by clean code,
                intuitive design, and the thrill of problem-solving — I build
                with purpose and precision. Let&apos;s create something
                exceptional.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
            <div className="grid items-center gap-12 md:grid-cols-2">
              {/* Left Column - Personal Story */}
              <motion.div variants={aboutItemVariants} className="space-y-6">
                <h3 className="text-primary text-2xl font-semibold">
                  My Journey
                </h3>
                <p className="text-lg leading-relaxed">
                  My journey into the world of development began with curiosity
                  and has evolved into a passionate pursuit of creating
                  meaningful digital experiences. I believe in the power of
                  technology to solve real-world problems and make life better
                  for people.
                </p>
                <p className="text-lg leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community. I&apos;m always eager
                  to learn and grow, staying updated with the latest trends and
                  best practices in web development.
                </p>
              </motion.div>

              {/* Right Column - Skills & Expertise */}
              <motion.div variants={aboutItemVariants} className="space-y-6">
                <h3 className="text-primary text-2xl font-semibold">
                  What I Do
                </h3>
                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                    <h4 className="text-primary mb-2 font-semibold">
                      Frontend Development
                    </h4>
                    <p className="text-sm">
                      Creating responsive, interactive user interfaces with
                      React, Next.js, and modern CSS frameworks. Focus on
                      performance and user experience.
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
              </motion.div>
            </div>

            {/* Tech Stack */}
            <motion.div
              variants={aboutItemVariants}
              className="mt-16 text-center"
            >
              <h3 className="text-primary mb-8 text-2xl font-semibold">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
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
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
