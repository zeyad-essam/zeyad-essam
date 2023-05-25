import React from "react";
import Link from "next/link";

import { navLinks } from "@/lib/navLinks";

import styles from "./PcNavigation.module.css";

const PcNavigation = () => {
  return (
    <div className={styles.pc_navigation}>
      <ul>
        {navLinks.map((link) => (
          <li key={link.text}>
            <Link key={link.text} href={link.href} area-label={link.text}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PcNavigation;
