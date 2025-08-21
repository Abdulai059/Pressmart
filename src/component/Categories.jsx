import React from "react";

export default function Categories() {
  return (
    <section className="promo-grid">
      {/* LEFT: tall card (spans 2 rows) */}
      <a className="tile left" href="#">
        <img
          src="https://res.cloudinary.com/dvbtaqt2o/image/upload/v1755658876/woman_dpqhvb.jpg"
          alt="Women's style"
        />
        <div className="content left-align">
          <span className="content-left">
            <span className="pill pill-title">New Arrivals</span>
            <h2>Women's Style</h2>
            <p>Up to 70% Off</p>
            <button>Shop Now</button>
          </span>
        </div>
      </a>

      {/* R1: top-right small */}
      <a className="tile r1" href="#">
        <img src="./public/classic-elegant.webp" />
        <div className="content">
          <span className="pill pill-discount">25% Off</span>
          <h3>Handbag</h3>
          <p>Shop Now ›</p>
        </div>
      </a>

      {/* R2: top-right small */}
      <a className="tile r2" href="#">
        <img
          src="./public/female-b.webp"
          alt="Watch"
        />
        <div className="content">
          <span className="pill pill-discount">45% Off</span>
          <h3>Watch</h3>
          <p>Shop Now ›</p>
        </div>
      </a>

      {/* R3: bottom-right wide (spans 2 columns) */}
      <a className="tile r3" href="#">
        <img
          src="./public/bag.webp"
          alt="Backpack"
        />
        <div className="content">
          <h3>Backpack</h3>
          <p>Min. 40–80% Off</p>
          <button>Shop Now</button>
        </div>
      </a>
    </section>
  );
}
