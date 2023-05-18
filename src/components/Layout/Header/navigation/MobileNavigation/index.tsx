import React from "react";
import Link from "next/link";
import { navLinks } from "@/lib/navLinks";

import { Portal } from "@/components/UI/Portal";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import styles from "./MobileNavigation.module.css";

const MobileNavigation = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      <Portal>
        <div
          className={`${styles.mobile_navigation} ${isOpen ? styles.open : ""}`}
        >
          <div className={styles.navigation_inner}>
            <div className={styles.navigation_links}>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.text}>
                    <div className="container">
                      <Link key={link.text} href={link.href}>
                        {link.text}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.social_links}>
              <ul>
                <li>
                  <a target="_blank" href="mailto:zeyadessam162@gmail.com">
                    <EmailIcon />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/ziadessam162">
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/zeyadessam/"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Portal>
    </>
  );
};

export default MobileNavigation;
