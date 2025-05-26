import { ThemeToggle } from "./theme-toggle/ThemeToggle";

import Link from "next/link";
import * as motion from "motion/react-client";
import CustomLink from "@/components/common/CustomLink";

const Header = () => {
  const navigationItems = [
    {
      href: "/",
      children: "Home",
      className: "hover:text-primary transition-colors",
      ariaCurrent: "page",
    },
    {
      href: "/about",
      children: "About",
      className: "hover:text-primary transition-colors",
    },
    {
      href: "/projects",
      children: "Projects",
      className: "hover:text-primary transition-colors",
    },
    {
      href: "/resume",
      children: "Resume",
      className: "text-primary hover:text-primary transition-colors",
    },
    {
      href: "/contact",
      children: "Let's Talk",
      className:
        "rounded-md bg-amber-700 px-4 py-2 transition-colors hover:bg-amber-600",
      ariaLabel: "Contact Page",
    },
  ];
  return (
    <header className="bg-background w-full border-b py-4 dark:border-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
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

        <nav aria-label="Main Navigation">
          <ul className="font-secondary flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <CustomLink
                key={index}
                href={item.href}
                className={item.className}
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
      </motion.div>
    </header>
  );
};

export default Header;
