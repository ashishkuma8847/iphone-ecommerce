import React, { useState } from "react";
import bannerr from "./Banner.json";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <div className="container mt-[40px]">
       
        <div className="bannerr w-[217px] ">
          {bannerr.map((item, index) => (
            <div key={index}>
              <div className=" flex pb-4">
                <Link to={item.to}>
                  <div className=" flex w-[217px] justify-between font-customfont12 ">
                    <h1 className="font-normal text-base leading-[24px] ">
                      {item.name}
                    </h1>
                    <img src={item.img} alt="image for arrow" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner;
