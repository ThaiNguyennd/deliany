import React from "react";
import Layout from "../Layout/Layout";
import Banner from "../modules/Banner";
import Lable from "../components/lable/Lable";
import BestOfferItem from "../modules/BestOfferItem";
import RestaurantsItem from "../modules/RestaurantsItem";
import IconClock from "../components/icons/IconClock";
import Iconletter from "../components/icons/Iconletter";
import IconBb from "../components/icons/IconBb";
import Button from "../components/button/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate =useNavigate()
  return (
    <Layout>
      <Banner></Banner>
      <div className="px-[150px] py-[100px] w-full h-full rounded-xl">
        <Lable>Khuyến mãi</Lable>
        <span className="text-text1 dark:text-text2 mb-10">
          Khám phá nhiều ưu đãi hấp dẫn
        </span>
        <div className="flex gap-x-5 items-center justify-between mt-10">
          
          <BestOfferItem navigate ={"/item"}></BestOfferItem>
        </div>
        <div className="mt-20">
          <Lable>Thương hiệu</Lable>
          <span className="text-text1 dark:text-text2 mb-10">
            Thương hiệu đa dạng, thỏa sức lựa chọn!
          </span>
        </div>
        <div className="flex  items-center justify-between gap-x-5 w-full">
          <RestaurantsItem></RestaurantsItem>
          <RestaurantsItem></RestaurantsItem>
          <RestaurantsItem></RestaurantsItem>
        </div>
        <div className="bg-white dark:bg-black p-10 flex items-center justify-between gap-x-5 mt-28 rounded-xl shadow-lg">
          <div className="flex flex-col gap-y-5 items-center">
            <Lable className="!text-primary font-semibold text-3xl">
              The Wait Is Over!
            </Lable>
            <p className="text-text1 dark:text-text2 font-medium text-lg text-center indent-10 ">
              Favorite foods at your doorstep within 30 minutes with Deliany
              ultra fast delivery service!
            </p>
            <IconClock></IconClock>
          </div>
          <div className="flex flex-col gap-y-5 items-center">
            <Lable className="!text-primary font-semibold text-3xl">
              Easy Peasy Payment
            </Lable>
            <p className="text-text1 dark:text-text2 font-medium text-lg ">
              Easy-to-use offline and online payment solutions for you to
              choose. No cash? No problems!
            </p>
            <Iconletter></Iconletter>
          </div>
          <div className="flex flex-col gap-y-5 items-center">
            <Lable className="!text-primary font-semibold text-3xl">
              You’ll love it!
            </Lable>
            <p className="text-text1 dark:text-text2 font-medium text-lg ">
              Diverse food brands, fast delivery, after sale support. We have
              more than just great foods!
            </p>
            <IconClock></IconClock>
          </div>
        </div>
        <div className="w-full mt-32 px-20 ">
          <div className="px-8 bg-white dark:bg-black rounded-xl shadow-xl">
            <div className="flex items-center px-5  gap-x-20 relative">
              <div className=" w-[500px] ">
                <IconBb className="z-20  "></IconBb>
              </div>
              <div className=" max-w-[500px] flex flex-col items-start ">
                <Lable className="!text-primary font-bold text-4xl ">
                  Our Story
                </Lable>
                <p className="font-medium text-lg text-text3 mb-5">
                  Our Story Good things take time but it only takes 30 minutes
                  to enjoy the best quality foods from Deliany - a multi concept
                  kitchen where you can find delicious cuisines from diverse
                  cultures. Whether it’s delivery, pick up or cool dine in
                  space, we have it all to give you the best culinary
                  experience!
                </p>
                <button className="text-white bg-primary px-7 rounded-lg py-3 block">
                  Get to Know us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[550px] mx-auto   mt-32 mb-20 rounded-lg shadow-xl bg-white dark:bg-black ">
          <div className="px-5 text-center items-center flex flex-col gap-y-10">
            <Lable className="pt-5">We've Got An App!</Lable>
            <p className="text-text3 font-medium text-lg">
              Download Deliany app on App Store and Play Store to enjoy more
              deals
            </p>
            <img src="pr.png" alt="" className="w-38 h-38 object-cover mb-10" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
