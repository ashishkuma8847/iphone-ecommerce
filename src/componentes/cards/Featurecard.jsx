import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
const Featurecard = ({
 color,
  headimg,
  stars,
  recents,
  price,
  tittle,
  topnew,
}) => {
  const [isborder, setIsborder] = useState(0);
  return (
    <>
      <div className="flex flex-col rounded relative overflow-hidden bg-[#F5F5F5]">
        {topnew !== undefined && (
          <h4 className="font-customfont12 font-normal text-xs leading-[18px] w-[55px] h-[26px] bg-customgreen-0 text-center text-white rounded pt-1 absolute top-[12px] left-[16px]">
            {topnew}
          </h4>
        )}
        <div className="relative group">
          <img
            className="p-[35px_40px_35px_40px] w-[269px] h-[249px] flex justify-center transition-all duration-200 hover:scale-75"
            src={`/src/assets/images/${headimg}`}
            alt="product"
          />
          <Link to={"/Cart"} className="flex justify-center absolute text-center duration-300 items-center h-0 bottom-0 font-custom font12 font-semibold text-sm leading-[21px] transform-all text-white bg-black w-full group-hover:h-[41px]">
            Add To Cart
          </Link>
        </div>

        <div className="top-[10px] right-[13px] absolute w-[34px] h-[76px] flex flex-col justify-between items-center">
          <button className="flex w-[34px] items-center justify-center bg-white rounded-[50%] h-[34px]">
            <img
              className="w-[24px] h-[24px]"
              src={`/src/assets/svg/Wishlist.svg`}
              alt="wishlist"
            />
          </button>

         <Link to={"/gamepad"}> <img src={`/src/assets/svg/Fill-Eye.svg`} alt="view" /></Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-customfont12 font-semibold text-sm leading-[21px]">
          {tittle}
        </h4>
        <div className="flex gap-[8px]">
          <h4 className="font-customfont12 font-medium text-base leading-[24px] text-CustomRed-0">
            {price}
          </h4>
          <img
            className="w-[100px] h-[20px]"
            src={`/src/assets/svg/${stars}`}
            alt="rating"
          />
          <h4 className="font-customfont12 font-semibold text-sm leading-[21px] text-black opacity-[50%]">
            {recents}
          </h4>
        </div>
        <div className="flex gap-[8px] relative z-50">
          {color &&
            color.map((item, index) => (
              <Fragment key={index}>
                <div
                  className={`flex items-center w-5 h-5  justify-center rounded-full border-[2px]  ${
                    isborder === index ? " border-black" : " border-none"
                  }`}
                >
                  <button
                  style={{
                    background:item
                  }}
                    onClick={() => setIsborder(index)}
                    className={`  rounded-full ${
                      isborder === index ? " w-3 h-3" : " w-4 h-4"
                    } `}
                  ></button>
                </div>
              </Fragment>
            ))}
        </div>
      </div>
    </>
  );
};

export default Featurecard;
