import React from "react";

import { ProductCardProps } from "types/product";
import { ProductCardUI } from "@components/ui/Shared/ProductCard";

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const handleFavoriteToggle = () => {
    if (props.onFavoriteToggle) {
      props.onFavoriteToggle();
    }
  };

  const handleAddToCart = () => {
    if (props.onAddToCart) {
      props.onAddToCart();
    }
  };

  return (
    <ProductCardUI {...props} onFavoriteToggle={handleFavoriteToggle} onAddToCart={handleAddToCart} />
  );
};
