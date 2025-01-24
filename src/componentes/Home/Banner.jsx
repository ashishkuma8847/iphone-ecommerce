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

  return (
    <>
      <div className="container flex mb-[127px] ">
        <div className="bannerr h-[344px] mt-10 overflow-hidden max-w-[217px] w-full">
          {bannerstyle?.map((item, index) => (
            <div key={index}>
              <Link to={item.to}>
                <button
                  onClick={() => setRotate(!rotate)}
                  className="flex  pb-4 hover:text-CustomRed-0 transition-all duration-300 font-customfont12 w-[215px] justify-between items-center  font-normal text-base leading-[24px]  "
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
                  className={`list-disc relative transition-all duration-300 ${
                    rotate ? "h-[120px] opacity-100 z-10" : "h-0 opacity-0 "
                  } marker:text-gray-300 font-normal text-base leading-[24px]  font-customfont12 -z-50  `}
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
                  className="flex  pb-4  w-[215px] hover:text-CustomRed-0 transition-all duration-300 font-customfont12 justify-between items-center  font-normal text-base leading-[24px] "
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
                  className={`list-disc transition-all relative duration-300 marker:text-gray-300 font-normal text-base leading-[24px] font-customfont12  ${
                    rotate1
                      ? "h-[120px] opacity-100  z-10 "
                      : "h-0 opacity-0  -z-50"
                  }`}
                >
                  <h4>Clothing</h4>
                  {["Tops", "Outerwear", "Bottoms", "Suits"]?.map(
                    (item, index) => (
                      <div key={index}>
                        <li className="ml-5 "> {item} </li>
                      </div>
                    )
                  )}
                </ul>
                <div className=" font-customfont12 w-full justify-between items-center  font-normal text-base leading-[24px]">
                  {linkNames.map((item, index) => {
                    return (
                      <Fragment key={item + index + Date.now() + "links"}>
                        <h4 className="pb-4 hover:text-CustomRed-0 transition-all duration-300">
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
        <span className="block w-[1px] h-[384px] bg-[#b2b2b270] ml-4 mr-[45px]  "></span>
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
                <Link to={item.to}>
                  <div className="flex mt-10 max-w-[892px] w-full bg-black text-white justify-between relative ]">
                    <div className="pl-16  pt-[58px]">
                      <ul className="mb-5  flex items-center w-[190px] justify-between  font-customfont12">
                        <img src={item.img1} alt="" />
                        <li className="font-normal text-base leading-6">
                          {item.name1}
                        </li>
                      </ul>
                      <ul className="mb-[22px] w-[294px]  font-customfont  ">
                        <li className="font-semibold text-5xl leading-[60px] tracking-[0.04em]">
                          {item.name2}
                        </li>
                      </ul>
                      <ul className="flex items-center w-113px font-customfont12  w-[113px] justify-between">
                        <li className="font-medium text-base leading-6 border-b ">
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
                      className="w-[480px] h-[344px] overflow-hidden pt-4 "
                      src={item.img3}
                      alt="dassa"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
