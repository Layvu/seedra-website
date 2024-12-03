import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          {/* Hero image */}
          <picture className="hero__image-container">
            <source media="(max-width: 768px)" srcSet="img/hero-product-mobile.png" />
            <img src="img/hero-product.png" alt="Hot product" className="hero__image" />
          </picture>

          {/* Text */}
          <h1 className="visually-hidden">Seedra - large seed store</h1>
          <h2 className="hero__title">SEEDRA Basil Seeds for Indoor and Outdoor Planting</h2>
          <p className="hero__descr">
            Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds
            were tested and have the best germination ratings. Your easy growing experience is our
            guarantee.
          </p>

          {/* Price */}
          <div className="hero__price-info">
            <svg className="hero__fire">
              <use xlinkHref={`img/sprite.svg#fire`} />
            </svg>
            <span className="hero__actual-price actual-price">$12.56</span>
            <span className="hero__old-price">$15.56</span>
          </div>

          {/* Buttons */}
          <div className="hero__button-group">
            <button className="hero-button hero-button--add-cart">Add to cart</button>
            <button className="hero-button hero-button--discover">Discover</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
