import React from "react";

import styles from "./PageHeader.module.css";
import Link from "next/link";

interface breadcrumbLink {
  text: string;
  href: string;
}

const PageHeader = ({
  links,
  activeLink,
  pageTitle,
}: {
  links: breadcrumbLink[];
  activeLink: string;
  pageTitle: string;
}) => {
  return (
    <div className={styles.page_header}>
      <h1>{pageTitle}</h1>
      <ul className={styles.breadcrumb}>
        {links.map((link) => (
          <li key={link.text}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
        <li>{activeLink}</li>
      </ul>
    </div>
  );
};

export default PageHeader;
