//import s from "./Products.module.scss";
import "./Products.scss";

import React from "react";
import { ProductsUIProps } from "./type";

import { SvgIcon } from "@components/Shared/SvgIcon";
import { SectionHeader } from "@components/HomePage/SectionHeader";
import { Stars } from "@components/Shared/Stars";

export const ProductsUI: React.FC<ProductsUIProps> = ({ categories, products }) => {
  return (
    <section className="products products_home-page">
      <h2 className="visually-hidden">Our products on Main Page</h2>
      <div className="container products__container">
        <SectionHeader
          className="products__header"
          title="Our products."
          buttonText={`View all (${products.length})`}
          buttonLink="/all-products"
        />

        {/* Categories */}
        <ul className="products__categories">
          {categories.map((category) => (
            <li key={category.name} className="products__category products-category">
              <button className="products-category__btn btn-reset" data-filter={category.name}>
                <SvgIcon id={category.icon} title={category.name} className="products-category__icon" />
                <p className="products-category__name products-category_upper">{category.name}</p>
              </button>
            </li>
          ))}
        </ul>

        {/* Product Cards */}
        <ul className="products__list">
          {products.map((product, index) => (
            <li key={index} className="products__item">
              <article className="product-card">
                {/* Favorite */}
                <button className="product-card__favorite-btn btn-reset">
                  <div className="favorite-icon">
                    <SvgIcon
                      id="ellipse"
                      title="Favorite icon outline"
                      className="favorite-icon__ellipse"
                    />
                    <SvgIcon id="heart" title="Favorite icon" className="favorite-icon__heart" />
                  </div>
                </button>

                {/* Image */}
                <div className="product-card__image">
                  <img src={product.img} alt={product.alt} />
                </div>

                {/* Reviews */}
                <div className="product-card__reviews">
                  <Stars rating={product.reviewRating} className="product-card" />
                  <p className="product-card__reviews-count">({product.reviewsCount})</p>
                </div>

                {/* Title */}
                <h3 className="product-card__title">
                  <a href="#" className="product-card__link">
                    {product.title}
                  </a>
                </h3>

                {/* Price */}
                <span className="product-card__price">{product.price}</span>

                {/* Cart Button */}
                <button className="product-card__cart-btn cart-button">
                  <SvgIcon id="cart" title="Cart icon" className="cart-button__icon" />
                </button>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
