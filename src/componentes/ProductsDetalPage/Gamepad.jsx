import React from "react";
import { Link } from "react-router-dom";

const Gamepad = () => {
  const gamepadshortimg = [
    {
      img: "gamepadshort1.svg",
    },
    {
      img: "gamepadshort2.svg",
    },
    {
      img: "gamepadshort3.svg",
    },
    {
      img: "gamepadshort4.svg",
    },
  ];
  return (
    <>
      <main>
        <div className="container">
          <div className="flex flex-col pt-[80px] pb-[140px] font-customfont12 font-normal text-sm leading-[21px] gap-[80px]">
            <div className="flex gap-3 font-customfont12 font-normal text-sm leading-[21px]">
              <Link to={"/Account"} className="opacity-[50%]">
                Account
              </Link>
              <h4 className="opacity-[50%]">/</h4>
              <h4 className="opacity-[50%]">Gaming</h4>
              <h4 className="opacity-[50%]">/</h4>
              <h4>Havic HV G-92 Gamepad</h4>
            </div>
            <div className="flex ">
              <div className="flex flex-col mr-[30px] gap-[16px] items-center w-[170px]">
                {gamepadshortimg.map((item, index) => (
                  <div key={item + index + Date.now()}>
                    <Link to={item.to}>
                      <img
                        src={`/src/assets/svg/${item.img}`}
                        alt="gamepadshort"
                      />
                    </Link>
                  </div>
                ))}
              </div>
              {/* main image */}
              <div className="mr-[70px]">
                <img src="/src/assets/svg/gamepadhead.svg" alt="gamepadhead" />
              </div>
              {/*  */}
              <div className="flex flex-col max-w-[399px] w-full">
                <div className="flex flex-col gap-4 mb-[16px]">
                  <h4 className="font-customfont font-semibold text-2xl leading-6 tracking-[0.03em] ">
                    Havic HV G-92 Gamepad
                  </h4>
                  <div className="flex gap-4 items-center">
                    <div className="flex gap-2 items-center">
                      <img
                        src="/src/assets/svg/FourStar1.svg"
                        alt="FourStar1"
                      />
                      <h4 className="font-customfont12 font-normal text-sm leading-[21px] opacity-[50%]">
                        (150 Reviews){" "}
                      </h4>
                      <div className="flex gap-2  items-center">
                        <h4 className="opacity-[50%] bg-black rounded h-[16px] w-[1px]">
                          {" "}
                        </h4>
                        <h4 className="text-customgreen-0">In Stock</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 pb-[24px] border-b border-customGray-0 mb-[24px]">
                    <h4 className="font-customfont font-normal text-2xl leading-6 tracking-[0.03em]">$192.00</h4>
                    <h4>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</h4>
                </div>
                <div className="flex ">
                          <h4 className="font-customfont font-normal text-xl leading-5 tracking-[0.03em]">Colours:</h4>
                          
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Gamepad;
