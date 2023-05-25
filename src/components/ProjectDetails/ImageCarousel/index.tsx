"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./imageSwiperStyles.css";

import { Pagination } from "swiper";

import styles from "./ImageCarousel.module.css";
import Image from "next/image";

const ImageCarousel = ({ images }: { images: string[] }) => {
  return (
    <div className={styles.swiper_wrapper}>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="image_swiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <div className={styles.image_wrapper}>
              <Image
                src={image}
                alt="Project Image"
                fill
                priority
                style={{ objectPosition: "center" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
