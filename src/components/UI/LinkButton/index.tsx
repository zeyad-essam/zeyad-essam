import React from "react";
import Link from "next/link";

import styles from "./LinkButton.module.css";

const LinkButton = ({
  children,
  href,
  onClick,
  size,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
}) => {
  let sizeClass: string;

  if (!size || size === "small") {
    sizeClass = styles.sm;
  } else if (size === "medium") {
    sizeClass = styles.md;
  } else {
    sizeClass = styles.lg;
  }

  let className = `${styles.link_button} ${sizeClass}`;

  // render Link with next link if the href start with / to prevent page reload
  if (href && href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  // render normal Link with the a tag for external links
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default LinkButton;
