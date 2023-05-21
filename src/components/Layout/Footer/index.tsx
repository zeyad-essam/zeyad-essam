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
    </footer>
  );
};

export default Footer;
