import React from "react";

const RestaurantsItem = () => {
  return (
    <div className="flex flex-col gap-y-5 rounded-xl w-full mt-10">
      <img
        src="/img2.png"
        alt=""
        className="w-[351px] h-[250px] object-cover rounded-t-xl"
      />
      <div className="flex flex-col  px-2">
        <div className="flex items-center gap-x-3">
          <img
            src="img2.png"
            alt=""
            className="w-10 h-10 object-cover rounded-full "
          />
          <span className="text-text1 dark:text-lite font-medium text-xl ">
            thainguyen
          </span>
        </div>
        <p className=" text-text2 font-medium text-base max-w-[351px]   mt-5 line-clamp-2  ">
          Một ngày bận rộn, công việc chất đống không có thời gian để đến nhà
          hàng thưởng thức sashimi? Đừng lo vì đã có Ukiyo với dịch vụ delivery
          tiện lợi với công nghệ đóng gói cao cấp, giúp lưu giữ độ tươi ngon của
          sashimi trong suốt quãng đường!
        </p>
      </div>
    </div>
  );
};

export default RestaurantsItem;
