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

  return (
    <section>
      <div className="mx-auto flex h-[calc(100dvh-61px)] max-w-[1600px] items-center justify-center pb-16">
        <ProfilePicture />

        <motion.div
          initial="hidden"
          animate="visible"
          className="w-1/2"
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-primary font-secondary mb-4 text-5xl font-semibold"
          >
            🙏 Namaste, I’m Rahul Yadav
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="shine-text shine-text max-w-[900px] text-2xl"
          >
            I’m a passionate Full-Stack Developer crafting high-performance,
            scalable, and user-centric web applications. From pixel-perfect
            frontends to robust backends, I turn ideas into elegant,
            production-ready solutions. Driven by clean code, intuitive design,
            and the thrill of problem-solving — I build with purpose and
            precision. Let’s create something exceptional.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
