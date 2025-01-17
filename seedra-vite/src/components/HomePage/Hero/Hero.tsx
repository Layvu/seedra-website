import React from "react";
import { HeroUI } from "@components/ui/HomePage/Hero";

export const Hero: React.FC = () => {
  const title = "SEEDRA Basil Seeds for Indoor and Outdoor Planting";
  const description =
    "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee.";
  const actualPrice = "$12.56";
  const oldPrice = "$15.56";
  const image = {
    desktop: "img/hero-product.png",
    mobile: "img/hero-product-mobile.png",
  };

  return (
    <HeroUI
      title={title}
      description={description}
      actualPrice={actualPrice}
      oldPrice={oldPrice}
      image={image}
    />
  );
};
