import React, { useState, useEffect } from "react";
import "./Home.css";
import homeSlides from "./Home";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % homeSlides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="home-content grid">
            <div className="home-group">
              <img
                src={homeSlides[currentSlide].image}
                alt={homeSlides[currentSlide].title}
                className="home-img slide-enter"
                key={currentSlide} // Forces re-render for animation
              />

              <div className="home-indicator"></div>

              <div className="home-details-img">
                <h4>{homeSlides[currentSlide].title}</h4>
                <p>{homeSlides[currentSlide].subtitle}</p>
              </div>
            </div>

            <div className="home-data">
              <h3 className="home-subtitle">
                {homeSlides[currentSlide].trending}
              </h3>
              <h1>
                {homeSlides[currentSlide].mainTitle
                  .split(" ")
                  .map((word, index) => (
                    <span key={index}>
                      {word}
                      {index <
                        homeSlides[currentSlide].mainTitle.split(" ").length -
                          1 && <br />}
                    </span>
                  ))}
              </h1>
              <p>{homeSlides[currentSlide].description}</p>

              <div className="home-buttons">
                <button className="button">Buy Now</button>
                <a href="#" className="button-link button-flex">
                  View Details{" "}
                  <i className="bx bx-right-arrow-alt button-icon"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="swiper-pagination">
            {homeSlides.map((_, index) => (
              <span
                key={index}
                className={`pagination-bullet ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
