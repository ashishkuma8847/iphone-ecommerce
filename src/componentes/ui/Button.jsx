import React, { useRef } from "react";

const Button = ({ className, onClick, children, variant ,google}) => {
  return (
    <>
      {variant === "solid" ? (
        <>
          <button
            className={` ${className} font-customfont12 border border-transparent hover:text-CustomRed-0 font-medium text-base leading-[24px] p-[16px_48px_16px_48px] bg-CustomRed-0 text-white rounded hover:bg-white hover:border-[red] transition-all duration-300 `}
            onClick={onClick}
          >
            {children}
          </button>
        </>
      ): variant === "full"  ?(
        <>
          <button
            className={ `font-customfont12 font-normal text-base leading-6 text-CustomRed-0 rounded-lg text-center capitalize  ${className}`}
            onClick={onClick}
          >
            {children}
          </button>
        </>
      ) : (<>
       <button className={`flex  max-w-[371px] w-full items-center justify-center gap-[16px] font-customfont12 border border-transparent hover:text-black font-medium text-base leading-[24px] p-[16px_48px_16px_48px] bg-customGray-0 text-white rounded hover:bg-white hover:border-customGray-0 transition-all duration-300 ${className}`}>
                                <img className={`${google}`} src="/src/assets/svg/icon-google.svg" alt="google" />
                                <h4 className="font-customfont12 font-normal text-base leading-6">{children}</h4>
                            </button>
      </>)}
    </>
  );
};

export default Button;
