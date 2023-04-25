import React from "react";

const BestOfferItem = () => {
  return (
    <div className="max-w-[230px] w-full  dark:bg-black bg-white rounded-xl cursor-pointer">
      <div className="w-full h-[230px] ">
        <img
          src="/img1.jpg"
          alt=""
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="flex flex-col gap-y-2 my-5 px-3">
        <h2 className="font-semibold text-xl text-text1 dark:text-lite">
          Combo Beru
        </h2>
        <p className="text-text2 font-medium text-base  line-clamp-2">
          Combo Beru gồm 1 hộp Omisoka, 1 hộp salad Wafu và 1 hộp cuốn sushi
        </p>
        <span className="text-text1 dark:text-lite font-bold text-2xl ">
          1.187.000đ
        </span>
      </div>
    </div>
  );
};

export default BestOfferItem;
