import Navbar from "./component/Navbar";
import "../src/index.css";
import Hero from "./component/Hero";
import Services from "./component/Services";
import Categories from "./component/Categories";
import FeaturedProducts from "./component/FeaturedProducts";
import DiscountCard from "./component/DiscountCard";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Categories />
      <FeaturedProducts />
      <DiscountCard />
      <Footer />
    </>
  );
}

export default App;
