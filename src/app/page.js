"use client";

import * as motion from "motion/react-client";
import ProfilePicture from "@/components/profile-picture/ProfilePicture";
import Link from "next/link";
import { useState } from "react";

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

  // Contact form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(data.message || "Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(data.error || "Failed to send message.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
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
                className="shine-text text- leading-relaxed sm:text-xl"
              >
                I&apos;m a passionate Full-Stack Developer crafting
                high-performance, scalable, and user-centric web applications.
                From pixel-perfect frontends to robust backends, I turn ideas
                into elegant, production-ready solutions. Driven by clean code,
                intuitive design, and the thrill of problem-lgsolving — I build
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
                Namaste 🙏 I&apos;m Rahul
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
                  and has evolved into a passionate pursuit of creating
                  meaningful digital experiences. I believe in the power of
                  technology to solve real-world problems and make life better
                  for people.
                </p>
                <p className="text-lg leading-relaxed">
                  I have over 4 years of experience in software development,
                  working across diverse projects and technologies.
                </p>
                <p className="text-lg leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community. I&apos;m always eager
                  to learn and grow, staying updated with the latest trends and
                  best practices in web development.
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

      {/* Projects Section */}
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
                  functionality, and cross-platform synchronization. Designed
                  for teams and individuals.
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
                  documentation, accessibility features, and theme
                  customization. Used across multiple projects.
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

      {/* Contact Section */}
      <section id="contact" className="bg-background scroll-mt-24 py-20">
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
                Get In Touch
              </h2>
              <div className="bg-primary mx-auto h-1 w-20 rounded-full"></div>
              <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
                I&apos;m always open to discussing new opportunities,
                interesting projects, or just having a chat about technology.
                Let&apos;s connect!
              </p>
            </motion.div>

            {/* Contact Content */}
            <div className="grid gap-12 md:grid-cols-2">
              {/* Left Column - Contact Info */}
              <motion.div variants={aboutItemVariants} className="space-y-8">
                <h3 className="text-primary text-2xl font-semibold">
                  Let&apos;s Start a Conversation
                </h3>
                <p className="text-lg leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or
                  just want to say hello, I&apos;d love to hear from you.
                  I&apos;m currently available for freelance projects and
                  full-time opportunities.
                </p>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 text-primary rounded-full p-3">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-primary font-semibold">Email</h4>
                      <p className="text-muted-foreground">rahul@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 text-primary rounded-full p-3">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-primary font-semibold">Phone</h4>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 text-primary rounded-full p-3">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-primary font-semibold">Location</h4>
                      <p className="text-muted-foreground">Mumbai, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6">
                  <h4 className="text-primary mb-4 font-semibold">Follow Me</h4>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="bg-primary/10 text-primary hover:bg-primary rounded-full p-3 transition-colors hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3.52 2h4.79l3.94 5.73L16.93 2h4.79l-6.93 9.11L22 22h-4.8l-4.22-6.13L8.23 22H3.44l7.14-9.4L3.52 2z" />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="bg-primary/10 text-primary hover:bg-primary rounded-full p-3 transition-colors hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="bg-primary/10 text-primary hover:bg-primary rounded-full p-3 transition-colors hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div variants={aboutItemVariants} className="space-y-6">
                <h3 className="text-primary text-2xl font-semibold">
                  Send Me a Message
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-primary mb-2 block text-sm font-medium"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="focus:border-primary focus:ring-primary/20 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-primary mb-2 block text-sm font-medium"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="focus:border-primary focus:ring-primary/20 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        placeholder="your.email@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="text-primary mb-2 block text-sm font-medium"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="focus:border-primary focus:ring-primary/20 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      placeholder="What's this about?"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-primary mb-2 block text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      className="focus:border-primary focus:ring-primary/20 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      placeholder="Tell me about your project or just say hello!"
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  {success && (
                    <div className="font-medium text-green-600">{success}</div>
                  )}
                  {error && (
                    <div className="font-medium text-red-600">{error}</div>
                  )}
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-lg px-8 py-3 font-medium transition-colors"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
