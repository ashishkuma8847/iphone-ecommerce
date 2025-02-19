import React, { useState } from "react";
import Dropdown from "../ui/Dropdown";
import bannerstyle from "../../json/Banner.json";
import { Link } from "react-router-dom";

const Bannerpopup = () => {
  const data = bannerstyle.map((item) => item.categorydata.Womans.item);
  const data1 = bannerstyle.map((item) => item.categorydata.Mens.item);

  const linkNames = bannerstyle[0].links.map((link) => link.name);
  const [popup, setpopup] = useState(false);
  const [popupbar, setpopupbar] = useState(false);
  const popbarmap = [{}];
  return (
    <>
    <div className="relative">
    <div className="flex absolute z-10 justify-center items-center">
      <div className="">
      {popbarmap.map((item, index) => (
        <div key={item * index + Date.now()}>
          <div
            className={``}
          >
            <div
              className={`    sm:z-10 z-10 sm:rounded lg:mt-[40px ]
                h-[344px]  flex-col
                    mt-[40px]
                      xl:flex   xl:overflow-hidden xl:w-[217px]`}
            >
              <div className="flex ">
                <div
                  className={` transition-all duration-300 ${
              popup ? "w-[240px] pl-4 pr-4" : "w-0 pl-0 pr-0"
            }   rounded  backdrop-blur-3xl pb-4 pt-4 bg-white bg-opacity-0 flex flex-col    text-white xl:text-black `}
                >
                  <div className={`relative flex flex-col transition-all duration-300 ${popup ?"z-10 opacity-[100%]":"-z-50 opacity-0"}   `}>
                    <Dropdown items={data} label={"Woman’s Fashion"} />
                    <Dropdown items={data1} label={"Men’s Fashion"} />
                  </div>
                  {bannerstyle?.map((item, index) => (
                    <div className=" " key={index}>
                      <Link to={item.to} className="lg:max-w-[1170px] w-full  ">
                        <div
                          className={` font-customfont12  sm:flex-col gap-3 sm:gap-2 
                    sm:text-sm sm:leading-5 text-sm leading-5   
                    flex flex-col   justify-between lg:items-start  sm:items-start items-start truncate font-normal lg:text-base lg:leading-[24px]`}
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}</div>
      <div className="">
      <button
        onClick={() => setpopup(!popup)}
        className=" w-[30px]   justify-center items-start lg:hidden sm:block block "
      >
        <div className="backdrop-blur-3xl bg-white bg-opacity-[12%]   text-white w-[30px] h-[50px] flex justify-center items-center rounded-r rounded-br">
          <img
            className={`transition-all duration-300 ${
              popup ? "rotate-180" : "rotate-0"
            }`}
            src="/assets/svg/arrow.svg"
            alt="arrow"
          />
        </div>
      </button></div></div></div>
    </>
  );
};

export default Bannerpopup;
