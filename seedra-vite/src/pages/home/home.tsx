import Hero from "../../components/Hero";
import Menu from "../../components/Menu";
import Mission from "../../components/Mission";
import Products from "../../components/Products";
import Blog from "../../components/Blog";
import Reviews from "../../components/Reviews";
import CompanyInfo from "../../components/CompanyInfo";

export const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <Hero />
      <Mission />
      <Products />
      <Blog />
      <Reviews />
      <CompanyInfo />
    </>
  );
};
