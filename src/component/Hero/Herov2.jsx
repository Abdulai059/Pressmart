import "./Home.css";
import homeSlides from "./Home.js";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = homeSlides[currentSlide];

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
                src={slide.image}
                alt={slide.title}
                className="home-img slide-enter"
                key={currentSlide} // Forces re-render for animation
              />
              <div className="home-indicator"></div>
              <div className="home-details-img">
                <h4>{slide.title}</h4>
                <p>{slide.subtitle}</p>
              </div>
            </div>

            <div className="home-data">
              <h3 className="home-subtitle">{slide.trending}</h3>
              <h1>
                {slide.mainTitle.split(" ").map((word, i) => (
                  <span key={i}>
                    {word}
                    {i < slide.mainTitle.split(" ").length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <p>{slide.description}</p>
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
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
