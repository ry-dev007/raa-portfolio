import * as motion from "motion/react-client";
import aboutContent from "@/content/about.json";

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
              {aboutContent.sectionTitle}
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
                {aboutContent.journeyTitle}
              </h3>
              <p className="text-lg leading-relaxed">{aboutContent.journey}</p>
              <p className="text-lg leading-relaxed">
                {aboutContent.experience}
              </p>
              <p className="text-lg leading-relaxed">{aboutContent.learning}</p>
              {/* Education Section - Step Form */}
              <div className="pt-4">
                <h3 className="text-primary mb-6 text-2xl font-semibold">
                  {aboutContent.educationTitle}
                </h3>
                <ol className="border-primary/30 relative ml-6 border-l-2">
                  {aboutContent.education.map((edu, idx) => (
                    <li key={idx} className="relative mb-8 pl-8 last:mb-0">
                      {/* Step circle */}
                      <span className="bg-primary ring-background absolute top-0 left-0 z-10 -ml-4 flex h-8 w-8 items-center justify-center rounded-full text-base font-bold text-white ring-4">
                        {idx + 1}
                      </span>
                      {/* Step content */}
                      <div className="text-muted-foreground text-lg">
                        <span className="text-primary font-semibold">
                          {edu.degree}
                        </span>
                        <br />
                        <span>
                          {edu.institution}
                          {edu.year && (
                            <>
                              {", "}
                              <span className="text-sm text-gray-500">
                                {edu.year}
                              </span>
                            </>
                          )}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>

            {/* Right Column - Skills & Expertise */}
            <motion.div
              variants={aboutItemVariants}
              className="space-y-6 md:mt-0"
            >
              <h3 className="text-primary text-2xl font-semibold">
                {aboutContent.whatIDoTitle}
              </h3>
              <div className="space-y-4">
                {aboutContent.whatIDo.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
                  >
                    <h4 className="text-primary mb-2 font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              {/* Tech Stack */}
              <div>
                <h3 className="text-primary mb-8 text-center text-2xl font-semibold md:text-left">
                  {aboutContent.technologiesTitle}
                </h3>
                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                  {aboutContent.technologies.map((tech, index) => (
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
