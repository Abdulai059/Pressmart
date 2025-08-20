import Navbar from "./component/Navbar";
import "../src/index.css";
import Hero from "./component/Hero";
import Services from "./component/Services";
import Categories from "./component/Categories";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Categories />
    </>
  );
}

export default App;
