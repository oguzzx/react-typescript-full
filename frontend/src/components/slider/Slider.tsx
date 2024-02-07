import { useState } from "react";
import SliderItem from "./SliderItem";
import "./slider.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(2);
    }
  };

  return (
    <section className="slider relative">
      <div className="slider-elements">
        {currentSlide === 0 && (
          <SliderItem imageSrc={"img/slider/slider1.jpg"} />
        )}
        {currentSlide === 1 && (
          <SliderItem imageSrc={"img/slider/slider2.jpg"} />
        )}
        {currentSlide === 2 && (
          <SliderItem imageSrc={"img/slider/slider3.jpg"} />
        )}
        <div className="slider-buttons">
          <button onClick={() => handlePrevSlide()}>
            <i className="bi bi-chevron-left flex items-center justify-center font-semibold">
              <ArrowLeft />
            </i>
          </button>
          <button onClick={() => handleNextSlide()}>
            <i className="bi bi-chevron-right flex items-center justify-center font-semibold">
              <ArrowRight />
            </i>
          </button>
        </div>
        <div className="slider-dots">
          <button
            className={`slider-dot ${currentSlide === 0 ? "active" : ""}`}
            onClick={() => {
              setCurrentSlide(0);
            }}
          >
            <span></span>
          </button>
          <button
            className={`slider-dot ${currentSlide === 1 ? "active" : ""}`}
            onClick={() => {
              setCurrentSlide(1);
            }}
          >
            <span></span>
          </button>
          <button
            className={`slider-dot ${currentSlide === 2 ? "active" : ""}`}
            onClick={() => {
              setCurrentSlide(2);
            }}
          >
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Slider;
