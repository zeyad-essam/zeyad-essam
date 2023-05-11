import React from "react";

import styles from "./SectionHeader.module.css";

const SectionHeader = ({ tag, title }: { tag: string; title: string }) => {
  return (
    <header className={styles.section_header}>
      <span className={styles.section_tag}>{tag}</span>
      <h2>{title}</h2>
    </header>
  );
};

export default SectionHeader;
