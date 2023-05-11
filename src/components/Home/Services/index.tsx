"use client";

import React from "react";

import Section from "@/components/UI/Section";
import SectionHeader from "@/components/UI/Section/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";

import { services } from "@/lib/services";

import "swiper/css";
import "swiper/css/pagination";

import "./swiperStyles.css";

// import required modules
import { Pagination } from "swiper";
import ServiceCard from "@/components/UI/ServiceCard";

const Services = () => {
  const swiperOptions: any = {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    modules: [Pagination],
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <Section>
      <SectionHeader
        tag="My Services"
        title="Services Provided For My Clients."
      />
      <Swiper {...swiperOptions} className="services_swiper">
        {services.map((service) => (
          <SwiperSlide key={service.title}>
            <ServiceCard
              iconSrc={service.icon}
              list={service.list}
              title={service.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default Services;
