import Link from "next/link";
import { ThemeToggle } from "./theme-toggle/ThemeToggle";

const Header = () => {
  return (
    <header className="bg-background text-foreground w-full border-b border-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="logo" aria-label="Website Logo">
          <Link href="/" className="text-xl font-bold" aria-label="Home Page">
            <span className="text-primary">&lt;</span>

            <span>dev007</span>

            <span className="text-primary"> /&gt;</span>
          </Link>
        </div>

        <nav aria-label="Main Navigation">
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                href="/"
                className="hover:text-primary transition-colors"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-primary transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                className="text-primary hover:text-primary transition-colors"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="rounded-md bg-amber-700 px-4 py-2 transition-colors hover:bg-amber-600"
                aria-label="Contact Page"
              >
                Let's Talk
              </Link>
            </li>

            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
