import { Hero } from "@components/HomePage/Hero";
import { Mission } from "@components/HomePage/Mission";
import { Products } from "@components/HomePage/Products";
import { Blog } from "@components/HomePage/Blog";
import { Reviews } from "@components/HomePage/Reviews";
import { CompanyInfo } from "@components/HomePage/CompanyInfo";

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Products />
      <Blog />
      <Reviews />
      <CompanyInfo />
    </>
  );
};
