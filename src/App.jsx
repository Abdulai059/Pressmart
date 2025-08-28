import Navbar from "./component/Navbar/Navbar.jsx";
import "../src/index.css";
import Hero from "./component/Hero/Herov2.jsx";
import Services from "./component/Service/Services.jsx";
import Categories from "./component/Categories";
import FeaturedProducts from "./pages/FeaturedProducts.jsx";
import DiscountCard from "./component/DiscountCard";
import Footer from "./component/Footer/Footer";
import Testimonials from "./component/CustomerTestimonials/CustomerTestimonials";
// import Herosection from "./component/Hero/Home";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Categories />
      <FeaturedProducts />
      <DiscountCard />

      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
