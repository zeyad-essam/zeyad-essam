import React from "react";

import styles from "./Section.module.css";

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.section_inner}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
