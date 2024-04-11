"use client";

import React from "react";

import { feedbackEntries } from "@/lib/data";
import Carousel from "react-multi-carousel";
import FeedbackEntry from "./FeedbackEntry";

export default function FeedbackSliderCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
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
    dotListClass="custom-dot-list-feedback"
  >
    {feedbackEntries.map((service, index) => (
      <React.Fragment key={index}>
        <FeedbackEntry
          avatar={service.avatar}
          name={service.name}
          date={service.date}
          text={service.text}
        />
      </React.Fragment>
    ))}
  </Carousel>
  );
}
