import React, { useState } from "react";
import { data, Link, NavLink } from "react-router-dom";
import HeaderJson from "../../json/Header.json";
import jsonwishlist from "../../json/Wishlist.json";
import cartjson from "../../json/Cart.json";
const Header = () => {
  const [user, setUser] = useState(false);
  const [search, setSearch] = useState(false);
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
              <div className="max-w-[550px] w-full flex gap-[8px] items-center ">
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
                <a
                  className="
                sm:text-xs
                 md:text-xs
                 lg:text-sm 
                 font-customfont12 font-semibold  leading-[24px] underline decoration-1"
                >
                  ShopNow
                </a>
              </div>
              <div
                className="flex w-[78px]  gap-[5px] items-center
               lg:text-sm 
               md:text-xs
                sm:text-xs "
              >
                <h1>English</h1>
                <img src="/src/assets/svg/DropDown.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <nav className="container  mt-[40px] mb-[16px]">
          <div
            className=" flex 

           sm:flex-col sm:gap-5 sm:items-start
           md:flex-col md:gap-5 md:items-start
           lg:flex-row  lg:gap-0   lg:items-center 
           justify-between items-center font-poppins "
          >
            <div className="max-w-[118px]  flex items-center justify-center  ">
              <h1 className="font-customfont  font-bold text-2xl leading-6 tracking-[0.03em]">
                Exclusive
              </h1>
            </div>
            <div
              className=" flex  
            lg:gap-[130px] 
            md:gap-3 
            sm:gap-3 "
            >
              <ul
                className=" flex 
           
              lg:gap-[48px]  lg:w-[367px] lg:text-base lg:leading-6
              md:gap-[38px]  md:w-[305px] md:text-sm md:leading-5
              sm:gap-[38px]  sm:w-[305px] sm:text-sm sm:leading-5
              items-center font-customfont12    font-normal "
              >
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
                <NavLink to={"/About"}>About</NavLink>
                <NavLink to={"/Signup"}>SignUp</NavLink>
              </ul>
              <div
                className=" flex 
              lg: lg:w-[395px] lg:justify-between
               md:gap-[13px]  md:w-[286px]
              sm:gap-[13px]  sm:w-[286px]
              items-center font-customfont12 "
              >
                <div
                  className=" flex
                 lg:w-[243px] lg:p-[7px_12px_7px_20px]
                  md:w-[156px]    md:p-[7px_8px_7px_10px]
                  sm:w-[156px]    sm:p-[7px_8px_7px_10px]
                  justify-end items-center   rounded-[4px]"
                >
                  <button
                    onMouseOver={() => setSearch(true)}
                    onMouseLeave={() => setSearch(false)}
                  >
                    {" "}
                    <img
                      className={`transition-all duration-300 ${
                        search &&
                        ` sm:pr-[14px]
                         md:pr-[14px]
                          lg:pr-[34px]`
                      }`}
                      src={"/src/assets/svg/search.svg"}
                      alt="image1"
                    />
                  </button>
                  <input
                    className={`font-normal   text-xs leading-[18px] transition-all duration-300  border-b border-solid truncate border-gray-300 outline-none   ${
                      search
                        ? `sm:w-[100px] 
                      md:w-[100px] 
                      lg:w-[153px]`
                        : "w-[0]"
                    } `}
                    placeholder="What are you looking for?"
                    onMouseOver={() => setSearch(true)}
                    onMouseLeave={() => setSearch(false)}
                  />
                </div>
                <div
                  className="flex  max-w-[120px] justify-between items-center
                 sm:gap-[8px] 
                 md:gap-[8px] 
                 lg:gap-[10px]"
                >
                  <Link className="relative" to={"/Wishlist"}>
                    {" "}
                    <span className="absolute rounded-full right-0 bg-CustomRed-0 w-[16px] h-[17px] text-white font-customfont12 font-normal text-xs leading-[18px] text-center">
                      {jsonwishlist.length}
                    </span>{" "}
                    <img src="/src/assets/svg/Wishlist.svg" alt="image2" />
                  </Link>

                  <Link
                    className="relative w-[32px] h-[32px] flex items-end justify-center "
                    to={"/Cart"}
                  >
                    <span className="absolute rounded-full right-0 top-0 bg-CustomRed-0 w-[16px] h-[17px] text-white font-customfont12 font-normal text-xs leading-[18px] text-center ">
                      {cartjson.length}
                    </span>{" "}
                    <img
                      className="w-[24px] h-[24px]"
                      src="/src/assets/svg/Cartwithbuy.svg"
                      alt="image3"
                    />{" "}
                  </Link>
                  <div className="relative">
                    <button
                      className="  flex flex-col justify-center items-center"
                      onClick={() => setUser(!user)}

                    >
                      {" "}
                      {!user && (
                        <img src="/src/assets/svg/user.svg" alt="image4" />
                      )}{" "}
                      {user && <img src="/src/assets/svg/user-red.svg" />}
                    </button>
                    <ul
                      className={`flex  flex-col  gap-[13px] rounded  z-10  p-[18px_12px_10px_20px] w-[244px] text-white backdrop-blur-3xl bg-black bg-opacity-35   absolute top-[33px] right-[0px] transition-all duration-200  ${
                        user ? "z-10 opacity-100 w-[244px] h-[208px] " : "-z-10 opacity-0 h-[180px] w-[200px]"
                      }`}

                     onMouseLeave={()=>setUser(false)}
                    
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
