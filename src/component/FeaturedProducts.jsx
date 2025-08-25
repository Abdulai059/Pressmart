import { useEffect, useState } from "react";

const TABS = [
  { id: "new", label: "New Arrival" },
  { id: "best", label: "Best Selling" },
  { id: "top", label: "Top Rated" },
];

function Products() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState("new");

  useEffect(function () {
    async function fetchStore() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products?limit=15`);

        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchStore();
  }, []);

  return (
    <>
      <section className="feature-products">
        <h2 className="prodect-title">Feature Products</h2>
        <div className="product-categories">
          {TABS.map((toggle) => (
            <button
              key={toggle.id}
              type="button"
              className={`tab ${selected === toggle.id ? "active" : ""}`}
              onClick={() => setSelected(toggle.id)}
            >
              {toggle.label}
            </button>
          ))}
        </div>

        <span className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />

              <div className="producs-details">
                <p>{product.category}</p>
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
              </div>

              <div className="rating">
                <span>
                  {" "}
                  ⭐ {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
            </div>
          ))}
        </span>
      </section>
    </>
  );
}

export default Products;
