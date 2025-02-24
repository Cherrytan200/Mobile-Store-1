import React from "react";
import Banner from "../../components/Banner/Banner.jsx";
import BannerBottom from "../../components/Banner/BannerBottom.jsx";
import BestSellers from "../../components/home/BestSellers/BestSellers.jsx";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals.jsx";
import Sale from "../../components/home/Sale/Sale.jsx";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers.jsx";
import YearProduct from "../../components/home/YearProduct/YearProduct.jsx";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Home;
