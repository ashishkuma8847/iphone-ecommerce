import React, { Fragment, useState } from "react";
import explore from "../../json/Explore.json";
const Featurecard = ({ colgroup }) => {
  const [isborder, setIsborder] = useState(0);
  return (
    <>
      <div className="w-[270px] flex flex-col sm:gap-4 md:gap-5 lg:gap-[16px] rounded">
        <div className="flex flex-col rounded relative overflow-hidden bg-[#F5F5F5]">
          {/* {index >= 4 && index <= 6 && item.new && (
                                                <h4 className="font-customfont12 font-normal text-xs leading-[18px] w-[55px] h-[26px] bg-customgreen-0 text-center text-white rounded pt-1 absolute top-[12px] left-[16px]">
                                                  Breed Dry Dog Food
                                                </h4>
                                            )} */}
          <div className="relative group">
            <img
              className="p-[35px_40px_35px_40px] w-[269px] h-[249px] flex justify-center transition-all duration-200 hover:scale-75"
              src={`/src/assets/images/dogfood.png`}
              alt="product"
            />
            <h4 className="flex justify-center absolute text-center duration-300 items-center h-0 bottom-0 font-custom font12 font-semibold text-sm leading-[21px] transform-all text-white bg-black w-full group-hover:h-[41px]">
              Add To Cart
            </h4>
          </div>

          <div className="top-[10px] right-[13px] absolute w-[34px] h-[76px] flex flex-col justify-between items-center">
            <button className="flex w-[34px] items-center justify-center bg-white rounded-[50%] h-[34px]">
              <img
                className="w-[24px] h-[24px]"
                src={`/src/assets/svg/arrow.svg`}
                alt="wishlist"
              />
            </button>

            <img src={`/src/assets/svg/Fill-Eye.svg`} alt="view" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-customfont12 font-semibold text-sm leading-[21px]">
            fjkdsfls
          </h4>
          <div className="flex gap-[8px]">
            <h4 className="font-customfont12 font-medium text-base leading-[24px] text-CustomRed-0">
              adsjadlkd
            </h4>
            {/* <img
                                                    className="w-[100px] h-[20px]"
                                                    src={`/src/assets/svg/`}
                                                    alt="rating"
                                                /> */}
            <h4 className="font-customfont12 font-semibold text-sm leading-[21px] text-black opacity-[50%]">
              ashdkjah
            </h4>
          </div>
          <div className="flex gap-[8px]">
            {colgroup.map((item, index) => (
              <Fragment key={index}>
                <div
                  className={`flex items-center justify-center rounded-full border-[3px] ${
                    isborder === index ? " border-black" : " border-transparent"
                  }`}
                >
                  <button
                    onClick={() => setIsborder(index)}
                    className={`w-6 h-6 m-[2px] rounded-full bg-[${item}] `}
                  ></button>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Featurecard;
