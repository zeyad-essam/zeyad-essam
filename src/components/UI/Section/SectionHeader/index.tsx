import React from "react";

import styles from "./SectionHeader.module.css";

const SectionHeader = ({
  tag,
  title,
  center,
}: {
  tag: string;
  title: string;
  center?: boolean;
}) => {
  return (
    <header
      className={`${styles.section_header} ${center ? styles.center : ""}`}
    >
      <span className={styles.section_tag}>{tag}</span>
      <h2>{title}</h2>
    </header>
  );
};

export default SectionHeader;
