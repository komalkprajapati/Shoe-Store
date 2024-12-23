import { useState ,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import ProductLIst from "./components/ProductLIst";
import { Navigate, Route, Routes } from "react-router-dom";
import SigninForm from "./components/forms/SigninForm";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Order from "./components/order";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/signin" element={<SigninForm setIsLoggedIn={setIsLoggedIn}/>} />          
            <Route path="*" element={<Navigate to="/signin" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<ProductLIst />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/foter" element={<Footer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
