import React from "react";
import NavTitle from "./NavTitle.jsx";

const Price = () => {
  const priceList = [
    {
      _id: 950,
      priceOne: 10000,
      priceTwo: 15000,
    },
    {
      _id: 951,
      priceOne: 15000,
      priceTwo: 20000,
    },
    {
      _id: 952,
      priceOne: 20000,
      priceTwo: 30000,
    },
    {
      _id: 953,
      priceOne: 30000,
      priceTwo: 60000,
    },
    {
      _id: 954,
      priceOne: 60000,
      priceTwo: 70000,
    },
    {
      _id: 955,
      priceOne: 70000,
      priceTwo: 90000,
    },
  ];
  return (
    <div className="cursor-pointer">
      <NavTitle title="Shop by Price" icons={false} />
      <div className="font-titleFont">
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
          {priceList.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              &#8377;{item.priceOne.toFixed(2)} - &#8377;{item.priceTwo.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Price;
