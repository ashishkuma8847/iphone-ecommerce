import React, { useRef } from "react";

const Button = ({ className, onClick, children, variant }) => {
  return (
    <>
      {variant === "solid" ? (
        <>
          {" "}
         
            <button
              className={` ${className} font-customfont12 font-medium text-base leading-[24px] p-[16px_48px_16px_48px] bg-CustomRed-0 text-white rounded hover:bg-white hover:text-black hover:shadow-custom transition-all duration-300 `}
              onClick={onClick}
            >
              {" "}
              {children}
            </button>
         
        </>
      ) : (
        <>
          <button
            className={`py-4 px-12 rounded-lg bg-white hover:bg-orange-600 hover:text-white transition-all duration-200  text-center text-orange-600 capitalize  ${className}`}
            onClick={onClick}
          >
            {children}
          </button>
        </>
      ) }
    </>
  );
};

export default Button;
