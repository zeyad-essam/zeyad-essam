import React from "react";

import styles from "./Section.module.css";

const Section = ({
  children,
  backgroundColor,
  dark,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
  dark?: boolean;
}) => {
  const styleObj = backgroundColor ? { backgroundColor: backgroundColor } : {};

  return (
    <section
      className={`${styles.section} ${dark ? styles.dark : ""}`}
      style={styleObj}
    >
      <div className="container">
        <div className={styles.section_inner}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
