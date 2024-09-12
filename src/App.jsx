
import { Routes,Route } from "react-router-dom";
import "./index.css"
import Home from "./pages/home"
import Shop from "./pages/components/shop";
import Blog from "./pages/components/blog";
import About from "./pages/components/about";
import Contact from "./pages/components/contact";
import Navbar from "./layouts/Navbar"


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      

    </Routes>
    </>
  );
}

export default App;




