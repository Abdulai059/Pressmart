import Navbar from "./component/Navbar";
import "../src/index.css";
import Hero from "./component/Hero";
import Services from "./component/Services";
import Categories from "./component/Categories";
import FeaturedProducts from "./component/FeaturedProducts";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Categories />
      <FeaturedProducts />
    </>
  );
}

export default App;
