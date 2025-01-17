import React from "react";
import { BlogUI } from "@components/ui/HomePage/Blog";

export const Blog: React.FC = () => {
  const blogPosts = [
    {
      date: "03.10.2024",
      title: "How to plant spinach correctly in winter",
      description:
        "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
      img: "img/spinach.png",
    },
    {
      date: "03.10.2024",
      title: "How to plant spinach correctly in winter",
      description:
        "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
      img: "img/gardener.png",
    },
    {
      date: "03.10.2024",
      title: "How to plant spinach correctly in winter",
      description: "",
      img: "img/strawberries.png",
    },
    {
      date: "03.10.2024",
      title: "How to plant spinach correctly in winter",
      description: "",
      img: "img/strawberries.png",
    },
  ];

  return <BlogUI posts={blogPosts} />;
};
