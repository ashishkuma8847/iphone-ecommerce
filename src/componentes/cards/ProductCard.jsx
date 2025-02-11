import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({
  discount,
  bannerbg,
  wishlist,
  view,
  tittle,
  price,
  oldprice,
  rating,
  reviews,
}) => {

  return (
    <>
  

      <div
        className={`w-[270px] flex flex-col sm:gap-4 gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 rounded`}
      >
        <div className=" flex  flex-col rounded  relative overflow-hidden  bg-[#F5F5F5] ">
          {discount !== undefined && (
            <h4
              className={`font-customfont12 font-normal text-xs leading-[18px] w-[55px] h-[26px] bg-CustomRed-0 text-center text-white rounded pt-1 absolute top-[12px] left-[16px] `}
            >
              {discount}
            </h4>
          )}
          <div className="relative group">
            <img
              className=" p-[35px_40px_35px_40px] flex justify-center transition-all duration-200 hover:scale-75 "
              src={`/src/assets/images/${bannerbg}`}
              alt="sdkf"
            />
            <Link to={"/Cart"} className=" flex justify-center absolute text-center duration-300 items-center h-0  bottom-0 font-custom font12 font-semibold text-sm leading-[21px] transform-all  text-[#F5F5F5] bg-black w-full  group-hover:h-[41px] ">
              Add To Cart
            </Link>
          </div>

          <div className="top-[10px] right-[13px] absolute w-[34px] h-[76px] flex flex-col justify-between items-center">
            <button className="flex w-[34px] items-center justify-center bg-white rounded-[50%] h-[34px]">
              <img
                className="w-[24px]  h-[24px] "
                src={`/src/assets/svg/${wishlist}`}
                alt="dfs"
              />
            </button>

           <Link to={"/gamepad"}> <img src={`/src/assets/svg/${view}`} alt="dfs" /></Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-customfont12 font-semibold text-sm leading-[21px]">
            {tittle}
          </h4>
          <div className="flex gap-3">
            <h4 className="font-customfont12 font-medium text-base leading-[24px] text-CustomRed-0">
              {price}
            </h4>
            <h4 className="font-customfont12 font-medium text-base leading-[24px] line-through text-black opacity-[50%]">
              {oldprice}
            </h4>
          </div>
          <div className="flex gap-2">
            <img
              className="w-[100px] h-[20px]"
              src={`/src/assets/svg/${rating}`}
              alt=""
            />
            <h4 className="font-customfont12 font-semibold text-sm leading-[21px] text-black opacity-[50%]">
              {reviews}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
