import React from "react";
import { ProductsUI } from "@components/ui/HomePage/Products";

export const Products: React.FC = () => {
  const categories = [
    { name: "all", icon: "all-leave" },
    { name: "bundles", icon: "bundles" },
    { name: "herbs", icon: "herbs" },
    { name: "vegetables", icon: "vegetables" },
    { name: "fruits", icon: "fruits" },
    { name: "supplies", icon: "gardening-tool" },
    { name: "flowers", icon: "flower" },
  ];

  const products = [
    {
      img: "img/prod-1.png",
      alt: "Product 1",
      title: "Seedra Cilantro Seeds for Planting Indoor and Outdoor",
      price: "$12.56",
      reviewsCount: 120,
      reviewRating: 4,
    },
    {
      img: "img/prod-2.png",
      alt: "Product 2",
      title: "SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting",
      price: "$8.23",
      reviewsCount: 48,
      reviewRating: 5,
    },
    {
      img: "img/prod-3.png",
      alt: "Product 3",
      title: "SEEDRA Spinach Seeds for Indoor and Outdoor Planting",
      price: "$16.5",
      reviewsCount: 17,
      reviewRating: 3,
    },
  ];

  return <ProductsUI categories={categories} products={products} />;
};
