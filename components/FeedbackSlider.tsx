"use client";

import Carousel from "nuka-carousel";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

import { feedbackEntries } from "@/lib/data";

export default function FeedbackSlider() {
  const params = {
    // wrapAround: true,
    style: {
      width: "50rem",
    },
    defaultControlsConfig: {
      nextButtonStyle: {
        background: "white opacity-100",
        color: "black",
        fontSize: "3rem",
      },
      prevButtonStyle: {
        background: "white opacity-100",
        color: "black",
        fontSize: "3rem",
      },
      nextButtonText: <IoIosArrowRoundForward />,
      prevButtonText: <IoIosArrowRoundBack />,
      pagingDotsStyle: {
        margin: "0.5rem"
      },
    }
  }
  
  return (
    <Carousel {...params}>
      {feedbackEntries.map((entry, index) => (
        <div key={index} className="flex flex-col justify-center px-28 py-16">
          <h3 className="mb-3">{entry.name}</h3>
          <p className="mb-4">{entry.date}</p>
          <p>{entry.text}</p>
        </div>
      ))}
    </Carousel>
  );
}
