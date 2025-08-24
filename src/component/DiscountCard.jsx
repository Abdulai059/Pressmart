import Button from "./Button";
import discounts from "../data/Discountdata";

function DiscountCard() {
  return (
    <div className="discount-card">
      {discounts.map((detail) => (
        <div key={detail.id} className="discount-item">
          <img src={detail.img} alt={detail.headline} />
          <div className="discount-details">
            <h3>{detail.title}</h3>
            <h1>{detail.headline}</h1>
            <p>{detail.offer}</p>
            <Button>Shop Now</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DiscountCard;
