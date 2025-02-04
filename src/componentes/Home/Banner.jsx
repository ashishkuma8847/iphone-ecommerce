import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import bswiper from "../../json/BanerSwiper.json";
import bannerstyle from "../../json/Banner.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
const Banner = () => {
  const [rotate, setRotate] = useState(false);
  const [rotate1, setRotate1] = useState(false);

  const linkNames = bannerstyle[0].links.map((link) => link.name);
  const [count, setcount] = useState(0);

  return (
    <>
   
      {/* <div className="">
                <h2>count:{count}</h2>
                <div className="flex gap-2">

                    <button onClick={() => setcount(count + 1)} >increment</button>
                    <button onClick={() => setcount(count === 0 ? count : count - 1)} >decrement</button>
                    <button onClick={() => setcount(0)} >reset</button>
                </div>
            </div> */}
      <div className="container flex lg:flex-row mb-[127px] sm:flex-col ">
        <div
          className="bannerr flex  
                 lg:h-[344px]  lg:mt-10
                 sm:h-[100px] sm:mt-5   sm:overflow-auto lg:overflow-hidden lg:w-[217px]"
        >
          {bannerstyle?.map((item, index) => (
            <div key={index}>
              <Link to={item.to} className="lg:max-w-[1170px]  ">
                <button
                  onClick={() => setRotate(!rotate)}
                  className="flex
                   sm:text-sm sm:leading-5  sm:items-center  sm:w-[150px] sm:pb-[4px]
                   lg:text-base lg:leading-[24px] lg:w-[214px] lg:pb-4
                     hover:text-CustomRed-0 transition-all duration-300 font-customfont12  justify-between items-center  font-normal  "
                >
                  {item.categorydata.Womans.name}
                  <img
                    src={item.categorydata.Womans.img}
                    className={`transition-all duration-300 ${
                      rotate && "rotate-90 "
                    } `}
                    alt="image for arrow"
                  />
                </button>
                <ul
                  className={`list-disc relative
                    sm:text-sm sm:leading-5 sm:flex  
                    lg:text-base lg:leading-[24px] lg:flex lg:flex-col
                    transition-all duration-300 ${
                      rotate
                        ? "sm:h-[30px] lg:h-[120px] opacity-100 z-10"
                        : "h-0 opacity-0 "
                    } marker:text-gray-300 font-normal   font-customfont12 -z-50  `}
                >
                  Clothing
                  {["Tops", "Outerwear", "Bottoms", "Suits"]?.map(
                    (item, index) => (
                      <div key={index}>
                        <li className="ml-5  "> {item} </li>
                      </div>
                    )
                  )}
                </ul>
                <button
                  onClick={() => setRotate1(!rotate1)}
                  className="flex  pb-4
                  sm:text-sm sm:leading-5 sm:pb-0 sm:items-center sm:w-[150px]
                   lg:font-normal lg:text-base lg:leading-[24px] lg:w-[214px]
                  hover:text-CustomRed-0 transition-all duration-300 font-customfont12 justify-between items-center  "
                >
                  {item.categorydata.Mens.name}
                  <img
                    src={item.categorydata.Mens.img}
                    className={`transition-all duration-300 ${
                      rotate1 && "rotate-90"
                    } `}
                    alt="image for arrow"
                  />
                </button>
                <ul
                  className={`list-disc sm:flex
                   sm:text-sm sm:leading-5  sm:items-center  sm:pb-[4px]
                   lg:text-base lg:leading-[24px] lg:w-full lg:pb-4 lg:flex lg:flex-col lg:justify-start lg:items-start
                    transition-all relative duration-300 marker:text-gray-300 font-customfont12  ${
                      rotate1
                        ? " sm:h-[20px] lg:h-[120px] opacity-100  z-10 "
                        : "h-0 opacity-0  -z-50"
                    }`}
                >
                  <h4>Clothing</h4>
                  {["Tops", "Outerwear", "Bottoms", "Suits"]?.map(
                    (item, index) => (
                      <div key={index} className="sm:ml-[5px] lg:ml-0">
                        <li className="ml-5 "> {item} </li>
                      </div>
                    )
                  )}
                </ul>
                <div
                  className={` font-customfont12  sm:flex-col
               sm:text-sm sm:leading-5   
                 flex  justify-between lg:items-start  sm:items-start truncate font-normal lg:text-base lg:leading-[24px]`}
                >
                  {linkNames.map((item, index) => {
                    return (
                      <Fragment key={item + index + Date.now() + "links"}>
                        <h4
                          className=" 
                        lg:pb-4 sm:pb-[4px] hover:text-CustomRed-0 transition-all duration-300"
                        >
                          {item}
                        </h4>
                      </Fragment>
                    );
                  })}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <span
          className="sm:hidden lg:block

        block w-[1px]  h-[384px] bg-[#b2b2b270] ml-4 mr-[45px]  "
        ></span>
        <div
          className="flex 
                lg:mt-10 
                sm:mt-5 
                lg:max-w-[892px] sm:max-w-[500px] sm:items-center bg-black text-white justify-between relative ]"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 2500 }}
            loop={true}
            className="mySwiper"
          >
            {bswiper.length > 0 &&
              bswiper &&
              bswiper?.map((item, index) => (
                <SwiperSlide key={index + Date.now() + item}>
                  <Link to={item.to} className="flex justify-between">
                    <div className="lg:pl-16  lg:pt-[58px] sm:pl-8 sm:pt-[28px] sm:pb-[28px]">
                      <ul className="lg:mb-5 sm:mb-4  flex items-center w-[190px] lg:gap-[24px]  sm:gap-[12px] font-customfont12">
                        <img
                          className="lg:w-[40px] lg:h-[49px]
                                                sm:w-[34px] sm:h-[34px]
                                                "
                          src={item.img1}
                          alt=""
                        />
                        <li
                          className="font-normal lg:text-base  sm:text-xs lg:leading-6
                                                sm:leading-5
                                                "
                        >
                          {item.name}
                        </li>
                      </ul>
                      <ul className=" lg:mb-[22px] lg:w-[294px] sm:mb-[12px]  font-customfont  ">
                        <li className="font-semibold lg:text-5xl sm:text-3xl leading-[60px] tracking-[0.04em]">
                          {item.name2}
                        </li>
                      </ul>
                      <ul className="flex items-center w-113px font-customfont12  w-[113px] justify-between">
                        <li className="font-medium lg:text-base sm:text-sm leading-6 border-b ">
                          {item.name3}
                        </li>
                        <img
                          className="transition-all duration-300 hover:translate-x-[10px]"
                          src={item.img2}
                          alt=""
                        />
                      </ul>
                    </div>
                    <img
                      className="lg:w-[400px] lg:h-[344px] sm:w-[240px] sm:h-[144px]
                                            overflow-hidden lg:pt-4 sm:relative sm:top-[40px] "
                      src={item.img3}
                      alt="dassa"
                    />
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Banner;
