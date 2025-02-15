import React, { useEffect, useRef, useState } from "react";
import { data, Link, NavLink } from "react-router-dom";
import HeaderJson from "../../json/Header.json";
import jsonwishlist from "../../json/Wishlist.json";
import cartjson from "../../json/Cart.json";
const Header = () => {
  const [search, setSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const [menu, setmenu] = useState(false);

  return (
    <>
      <header className="border-b border-#b2b2b2">
        <div className="bg-black ">
          <div className="container bg-black flex items-center justify-end w-full text-white  py-[12px] ">
            <div
              className="flex 
             sm:gap-[60px]   
             md:gap-[60px] 
              lg:gap-[231px]  "
            >
              <div className="max-w-[550px] w-full flex gap-[8px] items-center text-center ">
                <h1
                  className="
                sm:text-xs 
                md:text-xs 
                lg:text-sm 
                font-customfont12 font-normal text-sm leading-[21px] "
                >
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF
                  50%!
                </h1>
                <h4
                  className=" hidden md:block
                sm:text-xs
                 md:text-xs
                 lg:text-sm 
                 font-customfont12 font-semibold  leading-[24px] underline decoration-1"
                >
                  ShopNow
                </h4>
              </div>
              <div className="sm:block hidden">
              <div
                className="sm:flex md:flex w-[78px]  gap-[5px] items-center  
               lg:text-sm 
               md:text-xs
                sm:text-xs "
              >
                <h1>English</h1>
                <img src="/assets/svg/DropDown.svg" alt="" />
              </div></div>
            </div>
          </div>
        </div>

        <nav className="container  mt-[40px] mb-[16px]">
          <div
            className=" flex 
 flex-row gap-0 items-start
           sm:flex-col sm:gap-5 sm:items-start
           md:flex-col md:gap-5 md:items-start
           lg:flex-col lg:gap-5 lg:items-start
           xl:flex-row  xl:gap-0   xl:items-center 
           justify-between  font-poppins "
          >
            <div className="max-w-[118px]  flex items-center justify-center  ">
              <h1 className="font-customfont  font-bold text-2xl leading-6 tracking-[0.03em]">
                Exclusive
              </h1>
            </div>
            <div
              className=" flex justify-end  lg:justify-between    sm:gap-0   sm:justify-between  md:w-full xl:w-[890px]
            xl:justify-between
           "
            >
              <div className="sm:block hidden ">
                <ul
                  className=" flex h-full
               
              lg:gap-[48px]  lg:w-[367px] lg:text-base lg:leading-6
              md:gap-[38px]  md:w-[305px] md:text-sm md:leading-5
              sm:gap-[38px] sm:justify-start  sm:w-[305px] sm:text-sm sm:leading-5
              justify-between  sm:items-center w-[303px] text-sm leading-5
              items-center font-customfont12    font-normal "
                >
                  <NavLink to={"/"}>Home</NavLink>
                  <NavLink to={"/contact"}>Contact</NavLink>
                  <NavLink to={"/About"}>About</NavLink>
                  <NavLink to={"/Signup"}>SignUp</NavLink>
                </ul>
              </div>

              <div className="  flex justify-end items-center ">
                <div
                  className=" flex    w-[220px]  sm:w-[280px] 
               lg:w-[395px]  lg:justify-between
              sm:gap-[13px]  sm:justify-between
            justify-between
              items-center font-customfont12 "
                >
                  <div
                    className=" flex
                 lg:max-w-[243px] lg:p-[7px_12px_7px_20px]
                  md:max-w-[156px]    md:p-[7px_8px_7px_10px]
                  sm:max-w-[156px]    sm:p-[7px_8px_7px_10px]
                  max-w-[100px]  w-full   p-[7px_8px_7px_10px]
                  justify-end items-center   rounded-[4px]"
                  >
                    <Link
                      className="flex justify-end items-center"
                      to={"/Viewallprojects"}
                    >
                      <button onClick={() => setSearch(true)}>
                        {" "}
                        <img
                          className={`transition-all duration-300 w-[24px ] h-[24px] ${
                            search &&
                            ` sm:pr-[14px]
                        pr-[14px]
                         md:pr-[14px]  
                          lg:pr-[34px]`
                          }`}
                          src={"/assets/svg/search.svg"}
                          alt="image1"
                        />
                      </button>
                    </Link>
                    <input
                      className={`font-normal    text-xs leading-[18px] transition-all duration-300  border-b border-solid truncate border-gray-300 outline-none   ${
                        search
                          ? `sm:w-[100px] w-[100px] 
                      md:w-[100px] 
                      lg:w-[153px]`
                          : "w-[0]"
                      } `}
                      placeholder="What are you looking for?"
                      onMouseLeave={() => setSearch(false)}
                    />
                  </div>
                  <div
                    className="flex  w-[80px] sm:w-[120px] lg:w-[128px] justify-between items-center
                 sm:gap-[8px] 
                 gap-0 
                 md:gap-[8px] 
                 lg:gap-[10px]"
                  >
                    <Link className="relative" to={"/Wishlist"}>
                      {" "}
                      <span className="absolute rounded-full right-0 bg-CustomRed-0 sm:w-[16px] w-[15px] h-[15px] sm:h-[17px] text-white font-customfont12 font-normal text-xs leading-[18px] text-center">
                        {jsonwishlist.length}
                      </span>{" "}
                      <img 
                        className="sm:mt-1 mt-0  sm:w-[32px] w-[24px] h-[24px] sm:h-[32px]"
                        src="/assets/svg/Wishlist.svg"
                        alt="image2"
                      />
                    </Link>

                    <Link
                      className="relative w-[32px] h-[32px] flex items-center sm:items-end justify-center "
                      to={"/Cart"}
                    >
                      <span className="absolute rounded-full right-0 top-0 bg-CustomRed-0 w-[16px] h-[17px] text-white font-customfont12 font-normal text-xs leading-[18px] text-center ">
                        {cartjson.length}
                      </span>{" "}
                      <img
                        className="sm:w-[24px] sm:h-[24px] w-[20px] h-[20px]"
                        src="/assets/svg/Cartwithbuy.svg"
                        alt="image3"
                      />{" "}
                    </Link>
                    <div className="relative">
                      <button
                        className="  flex flex-col justify-center items-center"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {" "}
                        {!isOpen && (
                          <img
                            className="sm:w-[32px] sm:h-[32px] w-[24px] h-[24px]"
                            src="/assets/svg/user.svg"
                            alt="image4"
                          />
                        )}{" "}
                        {isOpen && (
                          <img
                            className="sm:w-[32px] sm:h-[32px] w-[24px] h-[24px]"
                            src="/assets/svg/user-red.svg"
                          />
                        )}
                      </button>
                      {isOpen && (
                        <div ref={boxRef}>
                          <ul
                            className={`flex  flex-col  gap-[13px] rounded  z-10  p-[18px_12px_10px_20px] w-[244px] text-white backdrop-blur-3xl bg-black bg-opacity-35   absolute top-[33px] right-[0px] transition-all duration-200  ${
                              isOpen
                                ? "z-10 opacity-100 w-[244px] h-[208px] "
                                : "-z-[99999999999999999] sm:-z-50 opacity-0 h-[180px] w-[200px]"
                            }`}
                          >
                            {HeaderJson.length > 0 &&
                              HeaderJson &&
                              HeaderJson?.map((item, index) => (
                                <div key={Date.now() + index + item?.name}>
                                  <Link to={item.link}>
                                    <ul className="flex w-full items-center gap-4 font-customfont12 font-normal text-sm leading-[21px]">
                                      <img src={item.img} alt="dsaj" />
                                      <li>{item.name}</li>
                                    </ul>
                                  </Link>
                                </div>
                              ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="block relative sm:hidden sm:w-[32px] sm:h-[32px] w-[24px] h-[24px] ">
                    <button onClick={() => setmenu(!menu)}>
                      <img
                        className={`${
                          !menu ? " sm:w-[32px] sm:h-[32px] w-[24px] h-[24px]" : " w-0 h-0"
                        } transition-all duration-200 `}
                        src="/assets/images/menu.png"
                        alt="menu"
                      />
                      <img
                        className={`${
                          menu ? "sm:w-[32px] sm:h-[32px] w-[24px] h-[24px]" : "w-0 h-0"
                        } transition-all duration-200`}
                        src="/assets/images/cross.png"
                        alt="cross"
                      />
                    </button>
                    {menu && (
                      <>
                        <div className="w-[200px] p-6  absolute z-10 bg-black right-0 backdrop-blur-3xl bg-opacity-45 rounded-[6px]   text-white ">
                          <div className="flex flex-col justify-center items-center gap-6  text-center ">
                          <NavLink className=" " to={"/"}>Home</NavLink>
                          <NavLink to={"/contact"}>Contact</NavLink>
                          <NavLink to={"/About"}>About</NavLink>
                          <NavLink to={"/Signup"}>SignUp</NavLink></div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
