import React from "react";

const Input = ({ varient,  className,title ,star,inputclass,id,type,placeholder}) => {
  return (
    <>
      {varient === "input" ? (
        <>
          {" "}
          <input
            className={`${inputclass}max-w-[300px] w-full p-[16px_24px_16px_24px] outline-none border border-black rounded`}
            type={`text ${type}`}
            placeholder={`${placeholder}`}
          />
        </>
      ) : (
        <>
          <label
            className={`${className} opacity-[40%]`}
            htmlFor={`${id}`}
          >
            {title}
            <span className="text-CustomRed-0">{star}</span>
          </label>
          <input
            className={`${inputclass} outline-none  h-[50px] rounded bg-[#F5F5F5]`}
            id={`${id}`}
            type={`text ${type}`}
            placeholder={`${placeholder}`}
          />
        </>
      )}
    </>
  );
};

export default Input;
