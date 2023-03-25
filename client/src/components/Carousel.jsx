import React from "react";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function Carousel() {
  const sliderImages = [
    {
      url: "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1679678691010-985ab6b8ff62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    },
  ];
  const [activeImageNum, setCurrent] = useState(0);
  const length = sliderImages.length;
  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };
  if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
    return null;
  }
  return (
    <section className="image-slider">
      <div class="left">
        <ArrowBackIosIcon onClick={prevSlide} />
      </div>
      <div class="right">
        <ArrowForwardIosIcon onClick={nextSlide} />
      </div>
      {sliderImages.map((currentSlide, ind) => {
        return (
          <div
            className={
              ind === activeImageNum ? "currentSlide active" : "currentSlide"
            }
            key={ind}
          >
            {ind === activeImageNum && (
              <img src={currentSlide.url} className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
}
