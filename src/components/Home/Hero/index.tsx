"use client";

import React from "react";
import LinkButton from "@/components/UI/LinkButton";

import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import UpworkIcon from "../../../../public/ui/upwork.svg";

import { motion } from "framer-motion";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero_inner}>
          <div className={styles.hero_text}>
            <div className={styles.hero_name}>
              <motion.h3
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0, transition: { type: "tween" } }}
              >
                Hello! I'm
              </motion.h3>
              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, type: "tween" },
                }}
              >
                Zeyad <span>Essam</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, type: "tween" },
              }}
            >
              Full Stack Web Developer specializing in MERN Stack & Next.js
            </motion.p>
            <motion.div
              className={styles.social_links}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, type: "tween" },
              }}
            >
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
                <li>
                  <a
                    target="_blank"
                    href="https://www.upwork.com/freelancers/~016c139fa3effee5af"
                  >
                    <UpworkIcon />
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, type: "tween" },
              }}
            >
              <LinkButton size="large" href="/api/get-resume" standard>
                Get Resume <FileDownloadRoundedIcon />
              </LinkButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
