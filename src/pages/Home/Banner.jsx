import React, { useState } from "react";
import bannerr from "./Banner.json";
import { Link } from "react-router-dom";
import bnext from './Bannernext.json'
import bswiper from './BanerSwiper.json'
import banner1 from './Banner1.json'
const Banner = () => {
  const [rotate, setRotate] = useState(false)
  const [rotate1, setRotate1] = useState(false)
  return (
    <>
      <div className="container flex ">

        <div className="bannerr w-[217px] h-[344px] mt-10 ">
          {bannerr.map((item, index) => (
            <div key={index}>
              <div className=" flex pb-4">
                <Link to={item.to}>
                  <div className=" flex flex-col w-[217px]   ">
                    <button onClick={() => setRotate(!rotate)} className="flex  font-customfont12 w-full justify-between items-center  font-normal text-base leading-[24px] ">
                      {item.name}<img src={item.img} className={`transition-all duration-300 ${rotate && 'rotate-90'} `} alt="image for arrow" />
                    </button>
                    {rotate && <ul className=" list-disc  marker:text-gray-300 font-normal text-base leading-[24px]  font-customfont12 " >
                      <h3>Clothing</h3>
                      <li className="ml-5"> Tops</li>
                      <li className="ml-5"> Outerwear</li>
                      <li className="ml-5"> Bottoms</li>
                      <li className="ml-5">Suits </li>
                    </ul> }

                  </div>
                </Link>
              </div>
            </div>
          ))}
          {banner1.map((item, index) => (
            <div key={index}>
              <div className=" flex pb-4">
                <Link to={item.to}>
                  <div className=" flex flex-col w-[217px]   ">
                    <button onClick={() => setRotate1(!rotate1)} className="flex  font-customfont12 w-full justify-between items-center  font-normal text-base leading-[24px] ">
                      {item.name}<img src={item.img} className={`transition-all duration-300 ${rotate1 && 'rotate-90'} `} alt="image for arrow" />
                    </button>
                    {rotate1 && <ul className=" list-disc  marker:text-gray-300 font-normal text-base leading-[24px] font-customfont12 " >
                      <h4>Clothing</h4>
                      <li className="ml-5"> Tops</li>
                      <li className="ml-5"> Outerwear</li>
                      <li className="ml-5"> Bottoms</li>
                      <li className="ml-5">Suits </li>
                    </ul> 

                    }
                  </div>
                </Link>
              </div>
            </div>
          ))}
          
          {
            bnext.map((item, index) => (
              <div key={index} className="flex pb-4">
                <Link to={item.to}>
                  <h4 className="font-customfont12 w-full justify-between items-center  font-normal text-base leading-[24px]">{item.namet}</h4>
                </Link>
              </div>
            ))}
        </div>
        <span className="block w-[1px] h-[384px] bg-[#b2b2b270] ml-4 mr-[45px]  "></span>
        {
          bswiper.map((item, index) => (
            <div key={index}>
              <Link to={item.to}>
                <div className="flex mt-10 max-w-[892px] w-full bg-black text-white justify-between relative ]">
                  <div className="pl-16  pt-[58px]">
                    <ul className="mb-5  flex items-center w-[190px] justify-between  font-customfont12">
                      <img src={item.img1} alt="" />
                      <li className="font-normal text-base leading-6">{item.name1}</li>
                    </ul>
                    <ul className="mb-[22px] w-[294px]  font-customfont  ">
                      <li className="font-semibold text-5xl leading-[60px] tracking-[0.04em]">{item.name2}</li>

                    </ul>
                    <ul className="flex items-center w-113px font-customfont12  w-[113px] justify-between">
                      <li className="font-medium text-base leading-6 border-b ">{item.name3}</li>
                      <img src={item.img2} alt="" />
                    </ul>
                  </div>
                  <img className="w-[496px] h-[344px] overflow-hidden " src={item.img3} alt="dassa" />
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Banner;
