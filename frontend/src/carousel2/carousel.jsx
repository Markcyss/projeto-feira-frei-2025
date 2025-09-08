import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./carousel.scss";

export const CarouselCursos = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel2">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      
      <div className="carousel-content">
        <img
          src={data[slide].src}
          alt={data[slide].alt}
          className="slide"
        />
        <div className="slide-description">
          <h2>{data[slide].title}</h2>
          <p>{data[slide].desc}</p>
        </div>
      </div>
      
      <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
      
      <span className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
            onClick={() => setSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </span>
    </div>
  );
};


