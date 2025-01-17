//import s from "./Products.module.scss";
import "./Products.scss";

import React from "react";
import { ProductsUIProps } from "./type";

import { SvgIcon } from "@components/Shared/SvgIcon";
import { SectionHeader } from "@components/HomePage/SectionHeader";
import { DefaultButton } from "@components/Shared/DefaultButton";
import { ProductCard } from "@components/Shared/ProductCard";

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
              <DefaultButton className="products-category__btn">
                <SvgIcon id={category.icon} title={category.name} className="products-category__icon" />
                <p className="products-category__name products-category_upper">{category.name}</p>
              </DefaultButton>
            </li>
          ))}
        </ul>

        {/* Product Cards */}
        <ul className="products__list">
          {products.map((product, index) => (
            <li key={index} className="products__item">
              <ProductCard
                {...product}
                onFavoriteToggle={() => {
                  console.log(`AddToFavorite - ${product.id}`);
                }}
                onAddToCart={() => {
                  console.log(`AddToCart - ${product.id}`);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
