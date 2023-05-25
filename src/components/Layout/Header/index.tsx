"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import PcNavigation from "./navigation/PcNavigation";
import MobileNavigation from "./navigation/MobileNavigation";

import Logo from "../../../../public/logo.svg";
import MessageBubble from "../../../../public/message-bubble.svg";

import styles from "./Header.module.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  // mobile navigation state
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigationHandler = () => {
    setOpenNavigation((prevValue) => !prevValue);
  };

  const closeNavigationHandler = () => {
    setOpenNavigation(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // disable scroll when mobile navigation is open
  useEffect(() => {
    if (openNavigation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [openNavigation]);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      <div className="container">
        <div className={styles.header_inner}>
          <div className={styles.logo_wrapper}>
            <Link href="/" area-label="Home Page">
              <Logo />
            </Link>
          </div>
          <PcNavigation />
          <MobileNavigation
            isOpen={openNavigation}
            onClose={closeNavigationHandler}
          />
          <div className={styles.hire_me}>
            <a
              href="mailto:zeyadessam162@gmail.com"
              area-label="Email to zeyadessam162@gmail.com"
            >
              <MessageBubble />
              <span>HIRE ME</span>
            </a>
          </div>
          <button
            onClick={toggleNavigationHandler}
            className={`${styles.mobile_menu_button} ${
              openNavigation ? styles.active : ""
            }`}
          >
            <span className={styles.toggle_bar}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
