import Button from "./Button";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h3>Season Sale</h3>
        <h1>MEN'S FASHION</h1>
        <p>Mn. 35-70% Off</p>

        <div className="hero-button">
          <Button>SHOP NOW</Button>
          <Button className="btn-secondary">READ MORE</Button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://res.cloudinary.com/dvbtaqt2o/image/upload/v1755654656/man_uqpsab.png"
          alt="Men's Fashion"
        />
      </div>
    </div>
  );
}

export default Hero;
