import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { Menu } from "@components/Menu";

import { Home } from "@pages/home";
import { Products } from "@pages/products";
import { About } from "@pages/about";
import { Blog } from "@pages/blog";
import { Contacts } from "@pages/contacts";
import { Cart } from "@pages/cart";
import { Favorites } from "@pages/favorites";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <Router>
      <div className="site-container">
        <Header onMenuToggle={toggleMenu} />
        {isMenuOpen && <Menu />}

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
