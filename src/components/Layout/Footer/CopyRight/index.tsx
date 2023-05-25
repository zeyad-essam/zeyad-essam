"use client";

import React from "react";
import Link from "next/link";

import Logo from "../../../../../public/logo.svg";

import styles from "./CopyRight.module.css";

const CopyRight = () => {
  return (
    <div className={styles.copy_right}>
      <div className={`${styles.copy_right_inner} container`}>
        <div>&copy; 2023 Made by Zeyad Essam</div>
        <div className={styles.logo_wrapper}>
          <Link href="/" area-label="Home page">
            <Logo />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
