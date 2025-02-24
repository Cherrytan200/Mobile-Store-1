import React from "react";
import Brand from "./shopBy/Brand.jsx";
import Category from "./shopBy/Category.jsx";
import Color from "./shopBy/Color.jsx";
import Price from "./shopBy/Price.jsx";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} />
      <Color />
      <Brand />
      <Price />
    </div>
  );
};

export default ShopSideNav;
