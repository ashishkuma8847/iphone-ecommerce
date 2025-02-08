import React from "react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <>
      <div className="container">
        <div className="lg:pt-[80px] sm:pt-[40px] sm:pb-[80px] lg:pb-[140px] flex flex-col sm:gap-[80px] lg:gap-[140px] ">
          <div className="flex gap-3 font-customfont12 font-normal text-sm leading-[21px] ">
            <Link to={"/"} className="opacity-[50%]">Home</Link>
            <h4 className="opacity-[50%]">/</h4>
            <h4>404 Error</h4>
          </div>
          <div className="flex flex-col items-center justify-center lg:gap-[80px] sm:gap-[40px]">
            <div className="flex flex-col items-center justify-center gap-10 ">
              <h1 className="font-customfont font-medium lg:text-[110px] sm:text-[80px] leading-[115px] tracking-[0.03em]">404 Not Found</h1>
              <h4 className="font-customfont12 font-normal text-base leading-6">Your visited page not found. You may go home page.</h4>
            </div>
            <Link to={"/"}>
              <Button variant={"solid"} children={"Back to home page"}/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
