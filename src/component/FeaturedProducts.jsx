import { useEffect, useState } from "react";

// const TABS = [
//   { id: "new", label: "New Arrival" },
//   { id: "best", label: "Best Selling" },
//   { id: "top", label: "Top Rated" },
// ];

const CategoryTabs = [
  { id: "all", label: "All" },
  { id: "electronics", label: "Electronics" },
  { id: "jewelery", label: "Jewelery" },
  { id: "men's clothing", label: "Men’s Clothing" },
  { id: "women's clothing", label: "Women’s Clothing" },
];

function Loading() {
  return (
    <div className="loading">
      <h2>Loading.....</h2>
    </div>
  );
}

function Products() {
  const [products, setProducts] = useState([]);
  // const [selected, setSelected] = useState("new");
  const [category, setCategories] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      async function fetchStore() {
        try {
          setLoading(true);
          let url = "https://fakestoreapi.com/products?limit=20";

          if (category && category !== "all") {
            url = `https://fakestoreapi.com/products/category/${encodeURIComponent(
              category
            )}`;
          }

          const res = await fetch(url);
          const data = await res.json();
          setProducts(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      }
      fetchStore();
    },
    [category]
  );

  return (
    <>
      <section className="feature-products">
        <h2 className="prodect-title">Feature Products</h2>
        {/* <div className="product-categories">
          {TABS.map((toggle) => (
            <button
              key={toggle.id}
              type="button"
              className={`tab ${selected === toggle.id ? "active" : ""}`}
              onClick={() => setSelected(toggle.id)}
            >
              {toggle.}
            </button>label
          ))}
        </div> */}

        <div className="product-categories">
          {CategoryTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`tab ${category === tab.id ? "active" : ""}`}
              // onClick={() => setSelected(toggle.id)}
              onClick={() => setCategories(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <span className="products">
          {loading ? (
            <Loading />
          ) : (
            products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} />

                <div className="product-details">
                  <p>{product.category}</p>
                  <h3>{product.title}</h3>
                  <p className="price">${product.price}</p>
                </div>

                <div className="rating">
                  <span>
                    ⭐ {product.rating.rate} ({product.rating.count} reviews)
                  </span>
                </div>
              </div>
            ))
          )}
        </span>
      </section>
    </>
  );
}

export default Products;
