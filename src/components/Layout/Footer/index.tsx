import React from "react";

import Section from "@/components/UI/Section";
import SectionHeader from "@/components/UI/Section/SectionHeader";
import NewsForm from "./NewsForm";
import Contacts from "./Contacts";
import CopyRight from "./CopyRight";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Section dark>
        <SectionHeader
          tag="Get Latest Updates"
          title="Subscribe For Newsletter"
          center
        />
        <NewsForm />
        <Contacts />
      </Section>
      <CopyRight />
      <div className={`${styles.footer_shape} ${styles.footer_shape_left}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${styles.footer_shape} ${styles.footer_shape_right}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </footer>
  );
};

export default Footer;
