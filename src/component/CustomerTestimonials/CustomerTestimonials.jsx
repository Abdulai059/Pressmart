import { useState } from "react";
import testimonials from "./Testimonials";
import { Star, User } from "lucide-react";

function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  function renderStars(rating) {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`star ${index < rating ? "star-filled" : "star-empty"}`}
      />
    ));
  }

  return (
    <div className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">OUR HAPPY CUSTOMER</h2>
          <p className="testimonials-subtitle">
            Hear from our satisfied shoppers! Explore their experiences with our
            products.
          </p>
        </div>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`testimonial-card testimonial-card--${
              testimonial.theme
            } ${testimonial.featured ? "testimonial-card--featur" : ""}  ${
              hoveredCard === testimonial.id ? "testimonial-card--hovered" : ""
            }
            ${
              selectedCard === testimonial.id
                ? "testimonial-card--selected"
                : ""
            }

            `}
            onMouseEnter={() => setHoveredCard(testimonial.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setSelectedCard(testimonial.id)}
          >
            {/* Rating Stars */}
            <div className="testimonial-stars">
              {renderStars(testimonial.rating)}
            </div>

            <p className="testimonial-review">"{testimonial.review}"</p>

            <div className="testimonial-customer">
              <div className="testimonial-avatar">
                <div className="testimonial-avatar">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-avatar-img"
                  />
                </div>
              </div>
              <div className="testimonial-customer-info">
                <h4 className="testimonial-customer-name">
                  {testimonial.name}
                </h4>
              </div>
            </div>

            {/* <div className="testimonials-button-container">
              <button className="testimonials-button">View More Reviews</button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
