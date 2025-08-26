import React, { useState, useEffect } from "react";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const homeSlides = [
    {
      image: "https://i.postimg.cc/FHrrbY93/slide-2.png",
      title: 'The "Cardigan"',
      subtitle: "Woolen",
      trending: "#1 TRENDING ITEM",
      mainTitle: "EXPRESS YOURSELF",
      description:
        "Craft your individuality. Handcrafted with passion, it was made for those who dare to be different",
    },
    {
      image: "https://i.postimg.cc/MTF55f2T/slide-3.png",
      title: "Jqueezy",
      subtitle: "Ski Suit",
      trending: "#2 TOP BEST DUO",
      mainTitle: "FALL WINTER 2025",
      description:
        "The future of fashion is here, where warmth meets style. Own the season. Own the look",
    },
    {
      image: "https://i.postimg.cc/jjk3gFyt/slide-1.png",
      title: "Jurry",
      subtitle: "Zipper",
      trending: "#3 TRENDING ITEM",
      mainTitle: "SALE 20% OFF ON EVERYTHING",
      description: "Don't Miss Out! 20% Off Everything for a Limited Time",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % homeSlides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div>
    
      {/* External Icons */}
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

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
                <h4 className="home-details-title">
                  {homeSlides[currentSlide].title}
                </h4>
                <span className="home-details-subtitle">
                  {homeSlides[currentSlide].subtitle}
                </span>
              </div>
            </div>

            <div className="home-data">
              <h3 className="home-subtitle">
                {homeSlides[currentSlide].trending}
              </h3>
              <h1 className="home-title">
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
              <p className="home-description">
                {homeSlides[currentSlide].description}
              </p>

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
};

export default Hero;
