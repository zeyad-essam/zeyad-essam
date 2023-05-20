"use client";

import React from "react";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import UpworkIcon from "../../../../../public/ui/upwork.svg";

import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.phone}>
        <a href="tel:+01143210887">
          <i>
            <PhoneIcon />
          </i>
          <span>+201143210887</span>
        </a>
      </div>
      <div className={styles.email}>
        <a href="mailto:zeyadessam162@gmail.com">
          <i>
            <EmailIcon />
          </i>
          <span>zeyadessam162@gmail.com</span>
        </a>
      </div>
      <div className={styles.social_links}>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/ziadessam162">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:zeyadessam162@gmail.com">
              <UpworkIcon />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/zeyadessam/">
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
