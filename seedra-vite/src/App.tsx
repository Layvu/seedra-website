import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Reviews from "./components/Reviews";
import CompanyInfo from "./components/CompanyInfo";

const App: React.FC = () => {
  return (
    <>
      <div className="site-container">
        <Header />
        <main className="main">
          <Menu />
          <Hero />
          <Mission />
          <Products />
          <Blog />
          <Reviews />
          <CompanyInfo />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
