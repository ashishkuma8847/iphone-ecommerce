import React, { useState, useRef, useEffect } from "react";
import Arowicon from "../../assets/svg/arrow.svg";
const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(0);
  const [height, setHeight] = useState(0);
  const dropdownRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      setHeight(dropdownRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="relative justify-start bg-white flex flex-col font-customfont12  font-normal text-base">
      {/* <p>{value}</p> 
      <input 
        ref={inputref}
        type="range" 
        name="range" 
        step={1} 
        min={0} 
        max={100} 
        value={value}
        onInput={(e) => setValue(e.target.value)} 
      /> */}
      <button
        className="flex  w-[216px] justify-between items-center   pb-3 font-p leading-6 text-base font-normal  hover:text-red_1-red1 capitalize"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <img
          src={Arowicon}
          className={`pr-1 transition-all duration-200 ${isOpen && "rotate-90"}`}
          alt=""
        />
      </button>
      <div
        ref={dropdownRef}
        className="overflow-hidden transition-all duration-300 bg-white"
        style={{ height: `${height}px` }}
      >
        <div className="py-2 ">
          {items?.map((item, index) => (
            <div key={item+index+Date.now()}>
            <>
              {item.map((item, index) => (
                <div key={index}>
                  <ul className="list-disc">
                    <li className="ml-[25px] font-p pb-2">{item}</li>
                  </ul>
                </div>
              ))}
            </></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
