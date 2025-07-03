// "use client";

import * as motion from "motion/react-client";
import ProfilePicture from "@/components/profile-picture/ProfilePicture";

export default function HeroSection() {
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

  return (
    <section id="home" className="overflow-x-hidden">
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
              From pixel-perfect frontends to robust backends, I turn ideas into
              elegant, production-ready solutions. Driven by clean code,
              intuitive design, and the thrill of problem-solving — I build with
              purpose and precision. Let&apos;s create something exceptional.
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
              From pixel-perfect frontends to robust backends, I turn ideas into
              elegant, production-ready solutions. Driven by clean code,
              intuitive design, and the thrill of problem-solving — I build with
              purpose and precision. Let&apos;s create something exceptional.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
