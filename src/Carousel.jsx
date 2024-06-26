import React, { useState } from "react";
 
function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function goToSlide(index) {
    setCurrentSlide(index);
  }

  function goToNextSlide() {
    const newIndex = currentSlide + 1 > images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  }

  function goToPrevSlide() {
    const newIndex = currentSlide - 1 < 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  }

  return (
    <div className="carousel"  aria-label="carousel">
      <div className="slides-container ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <p className="caption">{image.caption}</p>
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="prev" onClick={goToPrevSlide}>
          Prev
        </button>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <button className="next" onClick={goToNextSlide}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
