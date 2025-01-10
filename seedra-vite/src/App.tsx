import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Products } from "./pages/products";
import { About } from "./pages/about";
import { Blog } from "./pages/blog";
import { Contacts } from "./pages/contacts";
import { Cart } from "./pages/cart";
import { Favorites } from "./pages/favorites";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="site-container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-products" element={<Products />} />
            <Route path="/about-seedra" element={<About />} />
            <Route path="/our-blog" element={<Blog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
