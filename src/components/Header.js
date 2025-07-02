"use client";

import { ThemeToggle } from "./theme-toggle/ThemeToggle";

import Link from "next/link";
import * as motion from "motion/react-client";
import CustomLink from "@/components/common/CustomLink";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Get all sections
      const homeSection = document.querySelector("#home");
      const aboutSection = document.querySelector("#about");
      const projectsSection = document.querySelector("#projects");
      const contactSection = document.querySelector("#contact");

      // Check if we're at the very top
      if (scrollY <= 100) {
        setActiveSection("home");
        return;
      }

      // Check if we're at the bottom (contact section)
      if (scrollY + windowHeight >= documentHeight - 50) {
        setActiveSection("contact");
        return;
      }

      // Check contact section specifically
      if (contactSection) {
        const contactTop = contactSection.offsetTop - 200;
        if (scrollY >= contactTop) {
          setActiveSection("contact");
          return;
        }
      }

      // Check projects section
      if (projectsSection) {
        const projectsTop = projectsSection.offsetTop - 200;
        if (scrollY >= projectsTop) {
          setActiveSection("projects");
          return;
        }
      }

      // Check about section
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop - 200;
        if (scrollY >= aboutTop) {
          setActiveSection("about");
          return;
        }
      }

      // Default to home
      setActiveSection("home");
    };

    // Set home as active initially
    setActiveSection("home");

    // Add scroll listener
    window.addEventListener("scroll", updateActiveSection);

    // Call once to set initial state
    setTimeout(updateActiveSection, 200);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);
  const getNavItemClass = (sectionId) => {
    const baseClass = "hover:text-primary transition-colors";
    const activeClass = "text-primary font-semibold border-b-2 border-primary";
    return activeSection === sectionId
      ? `${baseClass} ${activeClass}`
      : baseClass;
  };

  const navigationItems = [
    {
      href: "#home",
      children: "Home",
      sectionId: "home",
      ariaCurrent: "page",
    },
    {
      href: "#about",
      children: "About",
      sectionId: "about",
    },
    {
      href: "#projects",
      children: "Projects",
      sectionId: "projects",
    },
    {
      href: "#contact",
      children: "Contact",
      sectionId: "contact",
    },
  ];
  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 border-primary/20 dark:border-primary/30 py-3 shadow-xl backdrop-blur-lg"
          : "bg-background/95 py-6 backdrop-blur-md dark:border-gray-800"
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          scale: isScrolled ? 0.98 : 1,
        }}
        transition={{
          opacity: { duration: 2 },
          scale: { duration: 0.5, ease: "easeInOut" },
        }}
        className="container mx-auto flex items-center justify-between px-4"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="logo"
          aria-label="Website Logo"
        >
          <Link
            href="/"
            className="shine-text text-xl font-semibold"
            aria-label="Home Page"
          >
            <code>
              <span className="text-primary">&lt;</span>

              <span>dev007</span>

              <span className="text-primary">/&gt;</span>
            </code>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:block">
          <ul className="font-secondary flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <CustomLink
                key={index}
                href={item.href}
                className={getNavItemClass(item.sectionId)}
                ariaLabel={item.ariaLabel}
                ariaCurrent={item.ariaCurrent}
              >
                {item.children}
              </CustomLink>
            ))}

            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary hover:text-primary/80 p-2 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="bg-background/95 border-primary/20 dark:border-primary/30 absolute top-full right-0 left-0 z-50 border-b shadow-lg backdrop-blur-md md:hidden"
        >
          <nav className="container mx-auto px-4 py-4">
            <ul className="font-secondary space-y-4">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`block py-2 text-lg ${getNavItemClass(item.sectionId)}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label={item.ariaLabel}
                  >
                    {item.children}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
