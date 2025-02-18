import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import bswiper from "../../json/BanerSwiper.json";
import bannerstyle from "../../json/Banner.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Dropdown from "../ui/Dropdown";
import Bannerpopup from "./Bannerpopup";
const Banner = () => {
  
  const data = bannerstyle.map((item) => item.categorydata.Womans.item);
  const data1 = bannerstyle.map((item) => item.categorydata.Mens.item);
  // const [rotate, setRotate] = useState(false);
  // const [rotate1, setRotate1] = useState(false);

  const linkNames = bannerstyle[0].links.map((link) => link.name);
  const [popup, setpopup] = useState(false);
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
      <div className="container ">
        <div className=" flex  mt-[40px] lg:mt-0  lg:justify-between sm:justify-start xl:justify-start xl:mb-[127px]  mb-[40px]   sm:mb-[40px]  ">
        <div className="xl:hidden sm:block block">

<Bannerpopup/>
</div>
          <div className={`sm:hidden lg:block hidden`}>
            <div
              className=" lg:mt-[40px]
                h-[344px]  flex-col
                   mt-[20px]
                      xl:flex   xl:overflow-hidden xl:max-w-[217px] w-full"
            >
              <div className="flex">
                <div className={``}>
              <div className="flex flex-col ">
                <Dropdown items={data} label={"Woman’s Fashion"} />
                <Dropdown items={data1} label={"Men’s Fashion"} />
              </div>
              {bannerstyle?.map((item, index) => (
                <div key={index}>
                  <Link to={item.to} className="  ">

                    <div
                      className={` font-customfont12  sm:flex-col  max-w-[217px] w-full
                    sm:text-sm sm:leading-5 text-sm leading-5   
                    flex flex-col gap-4 sm:gap-0 justify-between lg:items-start  sm:items-start items-start truncate font-normal lg:text-base lg:leading-[24px]`}
                    >
                      {linkNames.map((item, index) => {
                        return (
                          <Link
                            to={"/error"}
                            key={item + index + Date.now() + "links"}
                          >
                            <h4
                              className=" 
                        lg:pb-4 sm:pb-[4px] hover:text-CustomRed-0 transition-all duration-300"
                            >
                              {item}
                            </h4>
                          </Link>
                        );
                      })}
                    </div>
                  </Link>
                </div>
              ))}</div>
              </div>
            </div>
          </div>
          <span
            className="sm:hidden xl:block hidden

        w-[1px] lg:mr-0  h-[384px] bg-[#b2b2b270] xl:ml-4 xl:mr-[44px]  "
          ></span>
          <div
            className="flex   
                lg:mt-10 
                sm:mt-10 
                  max-w-[892px] lg:max-w-[790px] gap-0 w-full  sm:max-w-[892px] xl:max-w-[892px] sm:h-[344px] sm:w-full
                  sm:items-center  bg-black text-white justify-between relative ]"
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
                    <Link
                      to={item.to}
                      className=" justify-between gap-7 flex flex-col sm:flex-row sm:pb-[30px] lg:pb-0"
                    >
                      <div className="lg:pl-16 pt-2 flex flex-col   items-center sm:items-start  lg:pt-[58px] sm:pl-8 sm:pt-[28px] sm:pb-[28px]">
                        <ul className="lg:mb-5  sm:mb-4 justify-between sm:justify-start flex items-center  w-[190px] lg:gap-[24px]  sm:gap-[12px] font-customfont12">
                          <img
                            className="lg:w-[40px] lg:h-[49px]
                                                sm:w-[34px] sm:h-[34px]
                                                "
                            src={item.img1}
                            alt=""
                          />
                          <li
                            className="font-normal lg:text-base  
                                                "
                          >
                            {item.name}
                          </li>
                        </ul>
                        <ul className=" lg:mb-[22px] lg:w-[294px] sm:w-[294px]  sm:mb-[12px]  font-customfont  ">
                          <li className="font-semibold lg:text-5xl sm:text-5xl leading-[60px] tracking-[0.04em]">
                            {item.name2}
                          </li>
                        </ul>
                        <ul className="flex items-center w-113px font-customfont12  w-[113px] justify-between">
                          <Link
                            to={"/error"}
                            className="font-medium lg:text-base sm:text-sm leading-6 border-b "
                          >
                            {item.name3}
                          </Link>
                          <img
                            className="transition-all duration-300 hover:translate-x-[10px]"
                            src={item.img2}
                            alt=""
                          />
                        </ul>
                      </div>
                      <img
                        className="lg:w-[400px] m-auto sm:m-0  lg:h-[344px] sm:w-[240px] sm:h-[204px] w-[300px] h-[240px]
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
      </div>
    </>
  );
};

export default Banner;
