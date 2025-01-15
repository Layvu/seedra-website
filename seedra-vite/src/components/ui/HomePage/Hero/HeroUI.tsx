//import s from "./Hero.module.scss";
import "./Hero.scss";

import React from "react";

interface HeroUIProps {
  title: string;
  description: string;
  actualPrice: string;
  oldPrice: string;
  image: {
    desktop: string;
    mobile: string;
  };
}

export const HeroUI: React.FC<HeroUIProps> = ({ title, description, actualPrice, oldPrice, image }) => {
  return (
    <section className="hero hero_home-page">
      <div className="container hero__container">
        <div className="hero__content">
          {/* Hero image */}
          <picture className="hero__image-container">
            <source media="(max-width: 768px)" srcSet={image.mobile} />
            <img src={image.desktop} alt="Hot product" className="hero__image" />
          </picture>

          {/* Text */}
          <h1 className="visually-hidden">Seedra - large seed store</h1>
          <h2 className="hero__title">{title}</h2>
          <p className="hero__descr">{description}</p>

          {/* Price */}
          <div className="hero__price-info">
            <svg className="hero__fire">
              <use xlinkHref={`img/sprite.svg#fire`} />
            </svg>
            <span className="hero__actual-price actual-price">{actualPrice}</span>
            <span className="hero__old-price">{oldPrice}</span>
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
