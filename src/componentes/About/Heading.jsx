import React from "react";
import { Link } from "react-router-dom";
import aboutjson from "../../json/Aboutheading.json";
// import characterImg from "../../assets/images/charatertwo.png"; // Ensure the correct path

const Heading = () => {
  return (
    <main className="xl:pt-[80px] xl:pb-[140px] sm:pt-[40px] pt-[40px] sm:pb-[80px] pb-[80px]">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex xl:pb-[42px] sm:pb-[24px] pb-[24px] gap-3 font-customfont12 font-normal text-sm leading-[21px]">
            <Link to="/" className="opacity-[50%]">Home</Link>
            <h4 className="opacity-[50%]">/</h4>
            <h4>About</h4>
          </div>
        </div>
      </div>

      <div className="flex xl:flex-row sm:flex-col-reverse flex-col-reverse xl:gap-[75px] sm:gap-6 gap-6 justify-center items-center xl:pb-[140px] sm:pb-[80px] pb-[80px]">
        <div className="flex flex-col px-[24px] sm:p-0 xl:gap-10 sm:gap-6 gap-6">
          <h4 className="font-customfont font-semibold xl:text-[54px] sm:text-3xl text-3xl leading-[64px] tracking-[0.06em]">
            Our Story
          </h4>
          <div className="max-w-[525px] w-full flex flex-col xl:gap-[24px] sm:gap-4 gap-4 font-customfont12 font-normal text-base leading-[26px]">
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
        <img 
          className="xl:max-w-[705px] xl:w-full xl:max-h-[609px] xl:h-full sm:w-[500px] w-[400px] sm:h-[400px] h-[350px]" 
          src="assets/images/charatertwo.png"
          alt="Character Illustration" 
        />
      </div>

      <div className="container">
        <div className="xl:flex xl:justify-between sm:grid grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 sm:gap-y-[32px] gap-y-[32px]">
          {aboutjson.map((item, index) => (
            <div key={`${item.heading}-${index}`}>
              <Link to={item.to}>
                <div className="group hover:bg-CustomRed-0 hover:border-transparent hover:text-white transition-all duration-300 w-[270px] flex flex-col gap-4 border border-customGray-0 rounded pt-[30px] pb-[30px] justify-center items-center">
                  <img 
                    className="hidden group-hover:block" 
                    src={`${item.img1}`} 
                    alt={item.heading} 
                  />
                  <img 
                    className="group-hover:hidden" 
                    src={`${item.img2}`} 
                    alt={item.heading} 
                  />
                  <div className="flex flex-col lg:gap-[12px] sm:gap-2 gap-2 justify-center items-center">
                    <h4 className="font-customfont font-bold lg:text-[32px] sm:text-2xl text-2xl leading-[30px] tracking-[0.04em]">
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
