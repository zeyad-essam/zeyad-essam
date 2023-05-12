import Image from "next/image";

import Section from "@/components/UI/Section";
import SectionHeader from "@/components/UI/Section/SectionHeader";

import { skillsAndTools } from "@/lib/skills";

import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <Section dark>
      <SectionHeader tag="My skills" title="Skills and Tools" />
      <div className={styles.cards_wrapper}>
        <div className={styles.card}>
          <h3>Languages and Frameworks</h3>
          <ul>
            {skillsAndTools.skills.map((skill) => (
              <li key={skill.text}>
                <div className={styles.image_wrapper}>
                  <Image
                    src={skill.icon}
                    alt="Icon"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span>{skill.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.card}>
          <h3>Tools and Technologies</h3>
          <ul>
            {skillsAndTools.tools.map((tool) => (
              <li key={tool.text}>
                <div className={styles.image_wrapper}>
                  <Image
                    src={tool.icon}
                    alt="Icon"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span>{tool.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
