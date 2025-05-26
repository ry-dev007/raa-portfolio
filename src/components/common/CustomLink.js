import Link from "next/link";
import * as motion from "motion/react-client";

const CustomLink = ({ href, children, className, ariaLabel, ariaCurrent }) => {
  return (
    <motion.li whileHover={{ scale: 1.1 }}>
      <Link
        href={href}
        className={className}
        aria-label={ariaLabel}
        aria-current={ariaCurrent}
      >
        {children}
      </Link>
    </motion.li>
  );
};

export default CustomLink;
