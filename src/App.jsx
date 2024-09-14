
import { Routes,Route } from "react-router-dom";
import "./index.css"
import Home from "./pages/home"
import Shop from "./pages/components/shop";
import  Blog  from "./pages/components/Blogest";
import About from "./pages/components/about";
import Contact from "./pages/components/contact";
import Features from "./pages/components/features";
import Navbar from "./layouts/Navbar";
import Describblog from "./pages/components/describblog";
import Profile from "./pages/components/Profile";
import Panier from "./pages/components/panier";



function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/Blogest" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/features" element={<Features />}/>
     <Route path="/describlog" element={< Describblog />} />
     <Route path="/profile" element={<Profile/>}/>
     <Route path="/panier" element={<Panier/>}/>
     
      

    </Routes>
    </>
  );
}

export default App;




