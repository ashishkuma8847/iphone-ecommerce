import React from "react";
import { Link } from "react-router-dom";
import aboutjson from "../../json/Aboutheading.json";

const Heading = () => {
  return (
    <main className="pt-[80px] pb-[140px]">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex pb-[42px] gap-3 font-customfont12 font-normal text-sm leading-[21px]">
            <Link to={"/"} className="opacity-[50%]">Home</Link>
            <h4 className="opacity-[50%]">/</h4>
            <h4>About</h4>
          </div>
        </div>
      </div>

      <div className="flex gap-[75px] justify-center items-center pb-[140px]">
        <div className="flex flex-col gap-10">
          <h4 className="font-customfont font-semibold text-[54px] leading-[64px] tracking-[0.06em]">
            Our Story
          </h4>
          <div className="max-w-[525px] w-full flex flex-col gap-[24px] font-customfont12 font-normal text-base leading-[26px]">
            <p>
              Launched in 2015, Exclusive is South Asia’s premier online shopping 
              marketplace with an active presence in Bangladesh. Supported by a 
              wide range of tailored marketing, data, and service solutions, 
              Exclusive has 10,500 sellers and 300 brands and serves 3 million 
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 million products to offer, growing at a 
              very fast rate. Exclusive offers a diverse assortment in categories 
              ranging from consumer goods to electronics.
            </p>
          </div>
        </div>
        <img src="/src/assets/images/charatertwo.png" alt="Character Illustration" />
      </div>

      <div className="container">
        <div className="flex justify-between">
          {aboutjson.map((item, index) => (
            <div key={`${item.heading}-${index}`}>
              <Link to={item.to}>
                <div className="group hover:bg-CustomRed-0 hover:border-transparent hover:text-white transition-all duration-300 w-[270px] flex flex-col gap-4 border border-customGray-0 rounded pt-[30px] pb-[30px] justify-center items-center">
                  <img className="hidden group-hover:block" src={`/src/assets/svg/${item.img1}`} alt={item.heading} />
                  <img className="group-hover:hidden" src={`/src/assets/svg/${item.img2}`} alt={item.heading} />
                  <div className="flex flex-col gap-[12px] justify-center items-center">
                    <h4 className="font-customfont font-bold text-[32px] leading-[30px] tracking-[0.04em]">
                      {item.heading}
                    </h4>
                    <p className="font-customfont12 font-normal text-base">{item.title}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Heading;
