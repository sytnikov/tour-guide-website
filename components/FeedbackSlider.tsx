"use client";

import Carousel from "nuka-carousel";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";

import { feedbackEntries } from "@/lib/data";

export default function FeedbackSlider() {
  const params = {
    // wrapAround: true,
    style: {
      maxWidth: "70rem",
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
        margin: "0.5rem",
      },
    },
  };

  return (
    <Carousel {...params}>
      {feedbackEntries.map((entry, index) => (
        <div key={index} className="flex flex-col justify-center px-28 py-16">
          <div className="flex items-center gap-4 mb-6">
            <Image src={entry.avatar} alt="avatar image" width={90} className="rounded-full"/>
            <div>
              <h3 className="font-medium mb-3">{entry.name}</h3>
              <p className="font-medium mb-4">{entry.date}</p>
            </div>
          </div>
          <p>{entry.text}</p>
        </div>
      ))}
    </Carousel>
  );
}
