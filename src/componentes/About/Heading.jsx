import React from "react";
import { Link } from "react-router-dom";
import aboutjson from "../../json/Aboutheading.json";
const Heading = () => {
  return (
    <>
      {/* <img src="/src/assets/svg/activate.svg" alt="" />
    <img src="/src/assets/svg/activatecopy.svg" alt="" />
    <img src="/src/assets/svg/grosssale.svg" alt="" />
    <img src="/src/assets/svg/grosssalecopy.svg" alt="" />
    <img src="/src/assets/svg/productsale.svg" alt="" />
    <img src="/src/assets/svg/productsalecopy.svg" alt="" />
    <img src="/src/assets/svg/Services.svg" alt="" />
    <img src="/src/assets/svg/Servicescopy.svg" alt="" /> */}

      <main className="pt-[80px] pb-[140px]">
        <div className="container">
          <div className="flex flex-col ">
            <div className="flex pb-[42px] gap-3 font-customfont12 font-normal text-sm leading-[21px]">
              <Link to={"/"} className="opacity-[50%]">
                Home
              </Link>
              <h4 className="opacity-[50%]">/</h4>
              <h4>About</h4>
            </div>
          </div>
        </div>

        <div className="flex gap-[75px] justify-center items-center pb-[140px]">
          <div className="flex flex-col gap-10">
            <h4 className="font-customfont  font-semibold text-[54px] leading-[64px] tracking-[0.06em]">
              Our Story
            </h4>
            <div className="max-w-[525px] w-full flex flex-col gap-[24px] font-customfont12 font-normal text-base leading-[26px]">
              <h4>
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </h4>
              <h4>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </h4>
            </div>
          </div>
          <img src="/src/assets/images/charatertwo.png" alt="charatertwo" />
        </div>
        <div className="container">
          <div className="flex justify-between ">
            {aboutjson.map((item,index)=>(
                <div key={item+index+Date.now()}>
                    <Link to={item.to}>
                    
            <div className=" group hover:bg-CustomRed-0 hover:border-transparent   hover:text-white     transition-all duration-300  w-[270px] flex flex-col gap-4 border border-customGray-0 rounded pt-[30px] pb-[30px] justify-center items-center ">
              <img
                className="hidden group-hover:block"
                src={`/src/assets/svg/${item.img1}`}
                alt="dhsd"
              />
              <img
                className=" group-hover:hidden"
                src={`/src/assets/svg/${item.img2}`}
                alt="items"
              />
              <div className="flex flex-col gap-[12px] justify-center items-center">
              <h4 className="font-customfont font-bold text-[32px] leading-[30px] tracking-[0.04em]">
                {item.heading}
              </h4>
              <h4 className="font-customfont12 font-normal text-base ">{item.title}</h4></div>
            </div>
                    </Link>
                </div>
            ))
            }
          </div>
        </div>
      </main>
    </>
  );
};

export default Heading;
