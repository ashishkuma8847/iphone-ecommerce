import React, { useState } from "react";
import bannerr from "./Banner.json";
import { Link } from "react-router-dom";
import bnext from './Bannernext.json'
import bswiper from './BanerSwiper.json'
import banner1 from '../../jsonfiles/Banner1.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
const Banner = () => {
  const [rotate, setRotate] = useState(false)
  const [rotate1, setRotate1] = useState(false)
  return (
    <>

      <div className="container flex mb-[127px] ">

        <div className="bannerr h-[344px] mt-10 overflow-hidden max-w-[217px] w-full">

          {
            banner1.map((item, index) => (
              <div key={index}>
                <Link to={item.to}>
                <button onClick={() => setRotate(!rotate)}  className="flex  font-customfont12 w-[215px] justify-between items-center  font-normal text-base leading-[24px]  ">
                      {item.nam.woman}<img src={item.nam.img} className={`transition-all duration-300 ${rotate && 'rotate-90'} `} alt="image for arrow" />
                    </button>
                    <ul className={`list-disc transition-all duration-300 ${rotate ? "h-[120px] opacity-100 z-10" :"h-0 opacity-0 -z-[99999999999999999]" } marker:text-gray-300 font-normal text-base leading-[24px]  font-customfont12  `}   >
                      Clothing
                      {
                          ["Tops","Outerwear","Bottoms","Suits"].map((item,index)=>(
                          <div key={index}>
                             <li className="ml-5  "> {item} </li>
                          </div>       
                          ))
                        }
                    </ul> 
                    <button onClick={() => setRotate1(!rotate1)} className="flex   w-[215px] font-customfont12 justify-between items-center  font-normal text-base leading-[24px] ">
                      {item.name.man}<img src={item.name.img} className={`transition-all duration-300 ${rotate1 && 'rotate-90'} `} alt="image for arrow" />
                    </button>
                     <ul className={`list-disc transition-all  duration-300 marker:text-gray-300 font-normal text-base leading-[24px] font-customfont12  ${rotate1 ? "h-[120px] opacity-100  z-10 " :"h-0 opacity-0 -z-[999999] "}`  }  >
                      <h4>Clothing</h4>
                        {
                          ["Tops","Outerwear","Bottoms","Suits"].map((item,index)=>(
                          <div key={index}>
                             <li className="ml-5 "> {item} </li>
                          </div>       
                          ))
                        }
                    </ul> 
                    <h4 className="pb-4  font-customfont12 w-full justify-between items-center  font-normal text-base leading-[24px]">{item.ids.name}</h4>
                </Link>
              </div>
            ))
}

          {/* {bannerr.map((item, index) => (
            <div key={index}>
              <div className=" flex pb-4 ">
                <Link to={item.to}>
                  <div className=" flex flex-col   ">
                    <button onClick={() => setRotate(!rotate)}  className="flex  font-customfont12 w-[215px] justify-between items-center  font-normal text-base leading-[24px]  ">
                      {item.name}<img src={item.img} className={`transition-all duration-300 ${rotate && 'rotate-90'} `} alt="image for arrow" />
                    </button>
                    <ul className={`list-disc transition-all duration-300 ${rotate ? "h-[120px] opacity-100 z-10" :"h-0 opacity-0 -z-10" } marker:text-gray-300 font-normal text-base leading-[24px]  font-customfont12 `}   >
                      Clothing
                      {
                          ["Tops","Outerwear","Bottoms","Suits"].map((item,index)=>(
                          <div key={index}>
                             <li className="ml-5  "> {item} </li>
                          </div>       
                          ))
                        }
                    </ul> 

                  </div>
                </Link>
              </div>
            </div>
          ))}
          {banner1.map((item, index) => (
            <div key={index}>
              <div className=" flex pb-4">
                <Link to={item.to}>
                  <div className=" flex flex-col    ">
                    <button onClick={() => setRotate1(!rotate1)} className="flex   w-[215px] font-customfont12 justify-between items-center  font-normal text-base leading-[24px] ">
                      {item.name}<img src={item.img} className={`transition-all duration-300 ${rotate1 && 'rotate-90'} `} alt="image for arrow" />
                    </button>
                     <ul className={`list-disc transition-all  duration-300 marker:text-gray-300 font-normal text-base leading-[24px] font-customfont12  ${rotate1 ? "h-[120px] opacity-100  z-10 " :"h-0 opacity-0 -z-10 "}`  }  >
                      <h4>Clothing</h4>
                        {
                          ["Tops","Outerwear","Bottoms","Suits"].map((item,index)=>(
                          <div key={index}>
                             <li className="ml-5 "> {item} </li>
                          </div>       
                          ))
                        }
                    </ul> 

                    
                  </div>
                </Link>
              </div>
            </div>
          ))}
           */}
          {/* {
            bnext.map((item, index) => (
              <div key={index} className="flex pb-4">
                <Link to={item.to}>
                  <h4 className="font-customfont12 w-full justify-between items-center  font-normal text-base leading-[24px]">{item.namet}</h4>
                </Link>
              </div>
            ))} */}
        </div>
        <span className="block w-[1px] h-[384px] bg-[#b2b2b270] ml-4 mr-[45px]  "></span>
        <Swiper pagination={true} modules={[Pagination, Autoplay]} autoplay={{ delay: 2500 }} loop={true} className="mySwiper">


          {
            bswiper.map((item, index) => (
              <SwiperSlide key={index}>
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
                        <img className="transition-all duration-300 hover:translate-x-[10px]" src={item.img2} alt="" />
                      </ul>
                    </div>
                    <img className="w-[480px] h-[344px] overflow-hidden pt-4 " src={item.img3} alt="dassa" />
                  </div>
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>

      </div>
    </>
  );
};

export default Banner;
