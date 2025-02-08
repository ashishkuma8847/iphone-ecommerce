import React from "react";
import { Link } from "react-router-dom";
import aboutjson from "../../json/Aboutheading.json";

const Heading = () => {
  return (
    <main className="lg:pt-[80px] lg:pb-[140px] sm:pt-[40px] sm:pb-[80px]">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex lg:pb-[42px] sm:pb-[24px] gap-3 font-customfont12 font-normal text-sm leading-[21px]">
            <Link to={"/"} className="opacity-[50%]">Home</Link>
            <h4 className="opacity-[50%]">/</h4>
            <h4>About</h4>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row sm:flex-col-reverse lg:gap-[75px] sm:gap-6 justify-center items-center lg:pb-[140px] sm:pb-[80px]">
        <div className="flex flex-col lg:gap-10 sm:gap-6 ">
          <h4 className="font-customfont font-semibold lg:text-[54px] sm:text-3xl  leading-[64px] tracking-[0.06em]">
            Our Story
          </h4>
          <div className="max-w-[525px] w-full flex flex-col lg:gap-[24px] sm:gap-4 font-customfont12 font-normal text-base leading-[26px]">
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
        <img className="lg:w-[705px] lg:h-[609px] sm:w-[500px] sm:h-[400px]" src="/src/assets/images/charatertwo.png" alt="Character Illustration" />
      </div>

      <div className="container">
        <div className="lg:flex lg:justify-between sm:grid sm:grid-cols-2 sm:gap-y-[32px]">
          {aboutjson.map((item, index) => (
            <div key={`${item.heading}-${index}`}>
              <Link to={item.to}>
                <div className="group hover:bg-CustomRed-0 hover:border-transparent hover:text-white transition-all duration-300 w-[270px] flex flex-col gap-4 border border-customGray-0 rounded pt-[30px] pb-[30px] justify-center items-center">
                  <img className="hidden group-hover:block" src={`/src/assets/svg/${item.img1}`} alt={item.heading} />
                  <img className="group-hover:hidden" src={`/src/assets/svg/${item.img2}`} alt={item.heading} />
                  <div className="flex flex-col lg:gap-[12px] sm:gap-2 justify-center items-center">
                    <h4 className="font-customfont font-bold lg:text-[32px] sm:text-2xl   leading-[30px] tracking-[0.04em]">
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
