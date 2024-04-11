"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { serviceData } from "@/lib/data";
import Service from "./Service";

export default function ServicesCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      showDots={true}
      containerClass="custom-list"
      dotListClass="custom-dot-list-service"
    >
      {serviceData.map((service, index) => (
        <React.Fragment key={index}>
          <Service
            image={service.image}
            name={service.name}
            source={service.source}
          />
        </React.Fragment>
      ))}
    </Carousel>
  );
}
