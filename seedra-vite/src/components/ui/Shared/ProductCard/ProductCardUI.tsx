import "./ProductCard.scss";
import classNames from "classnames";

import React from "react";
import { Link } from "react-router-dom";

import { ProductCardProps } from "types/product";

import { SvgIcon } from "@components/Shared/SvgIcon";
import { Stars } from "@components/Shared/Stars";

export const ProductCardUI: React.FC<ProductCardProps> = ({
  id,
  img,
  alt,
  reviewRating,
  reviewsCount,
  title,
  price,
  isFavorite = false,
  onFavoriteToggle,
  onAddToCart,
}) => {
  return (
    <article className="product-card">
      {/* Favorite */}
      <button
        className={classNames("product-card__favorite-btn", "btn-reset", {
          "product-card__favorite-btn_active": isFavorite,
        })}
        onClick={onFavoriteToggle}>
        <div className="favorite-icon">
          <SvgIcon id="ellipse" title="Favorite icon outline" className="favorite-icon__ellipse" />
          <SvgIcon id="heart" title="Favorite icon" className="favorite-icon__heart" />
        </div>
      </button>

      {/* Image */}
      <div className="product-card__image">
        <img src={img} alt={alt} />
      </div>

      {/* Reviews */}
      <div className="product-card__reviews">
        <Stars rating={reviewRating} className="product-card" />
        <p className="product-card__reviews-count">({reviewsCount})</p>
      </div>

      {/* Title */}
      <h3 className="product-card__title">
        <Link to={`/all-product/${id}`} className="product-card__link">
          {title}
        </Link>
      </h3>

      {/* Price */}
      <span className="product-card__price">{price}</span>

      {/* Cart Button */}
      <button className="product-card__cart-btn cart-button" onClick={onAddToCart}>
        <SvgIcon id="cart" title="Cart icon" className="cart-button__icon" />
      </button>
    </article>
  );
};
