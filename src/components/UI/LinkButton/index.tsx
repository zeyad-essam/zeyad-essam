import React from "react";
import Link from "next/link";

import styles from "./LinkButton.module.css";

const LinkButton = ({
  children,
  href,
  onClick,
  size,
  standard,
  areaLabel,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  standard?: boolean;
  areaLabel?: string;
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

  // render normal Link if standard === true
  if (href && standard) {
    return (
      <a
        href={href}
        className={className}
        area-label={areaLabel ? areaLabel : null}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        area-label={areaLabel ? areaLabel : null}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default LinkButton;
