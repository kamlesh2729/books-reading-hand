import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products/>
      <h3>React + vite + Bootstrap</h3>
    </>
  );
}

export default App;
