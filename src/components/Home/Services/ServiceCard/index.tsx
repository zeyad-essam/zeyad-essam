import React from "react";
import Image from "next/image";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import styles from "./ServiceCard.module.css";

const ServiceCard = ({
  iconSrc,
  title,
  list,
}: {
  iconSrc: string;
  title: string;
  list: string[];
}) => {
  return (
    <div className={styles.service_card}>
      <div className={styles.image_wrapper}>
        <Image
          src={iconSrc}
          alt="icon"
          priority
          width={70}
          height={70}
          style={{ objectFit: "contain" }}
        />
      </div>
      <h3 className={styles.card_title}>{title}</h3>
      <ul>
        {list.map((text, index) => (
          <li key={index}>
            <i>
              <KeyboardDoubleArrowRightIcon style={{ fontSize: 20 }} />
            </i>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
