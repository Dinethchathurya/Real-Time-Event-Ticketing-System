import React, { useState, useEffect } from "react";
import HeroSport from "../assets/Sports.png";
import HeroSocial from "../assets/social.png";
import HeroAcademic from "../assets/academic.png";

function Hero() {
  const slides = [HeroSport, HeroAcademic, HeroSocial];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); // Loop back to the first slide
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="carousel w-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full ${
            index === currentSlide ? "block" : "hidden"
          }`}
        >
          <img src={slide} className="w-full" alt={`Slide ${index + 1}`} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + slides.length) % slides.length
                )
              }
              className="btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % slides.length)
              }
              className="btn btn-circle"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Hero;
