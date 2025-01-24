import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderJson from "../../json/Header.json";
const Header = () => {
  const [user, setUser] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <>
      <header className="border-b border-#b2b2b2">
        <div className="bg-black ">
          <div className="container bg-black flex items-center justify-end w-full text-white  py-[12px] ">
            <div className="flex  sm:gap-[60px]    lg:gap-[231px]  ">
              <div className="max-w-[550px] w-full flex gap-[8px] items-center ">
                <h1 className="sm:text-xs md:text-sm font-customfont12 font-normal text-sm leading-[21px] ">
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF
                  50%!
                </h1>
                <a className="sm:text-xs md:text-sm font-customfont12 font-semibold  leading-[24px] underline decoration-1">
                  ShopNow
                </a>
              </div>
              <div className="flex w-[78px]  gap-[5px] md:text-sm items-center sm:text-xs ">
                <h1>English</h1>
                <img src="/src/assets/svg/DropDown.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <nav className="container  mt-[40px] mb-[16px]">
          <div className=" flex  sm:flex-col lg:flex-row sm:gap-5 lg:gap-0  justify-between sm:items-start lg:items-center items-center font-poppins ">
            <div className="max-w-[118px]  flex items-center justify-center  ">
              <h1 className="font-customfont  font-bold text-2xl leading-6 tracking-[0.03em]">
                Exclusive
              </h1>
            </div>
            <div className=" flex  lg:gap-[130px]  sm:gap-3">

              <ul className=" flex lg:gap-[48px] sm:gap-[38px] items-center lg:w-[367px] sm:w-[305px]  font-customfont12 lg:text-base lg:leading-6  font-normal sm:text-sm sm:leading-5">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/Contect"}>Contact</NavLink>
                <NavLink to={"/About"}>About</NavLink>
                <NavLink to={"/Signup"}>SignUp</NavLink>
              </ul>
              <div className=" flex lg:gap-[24px]  sm:gap-[13px] items-center font-customfont12 sm:w-[286px] lg:w-[395px]">
                <div className=" flex lg:w-[243px] sm:w-[156px]   justify-end items-center lg:p-[7px_12px_7px_20px]  sm:p-[7px_8px_7px_10px] rounded-[4px]">
                  <button
                    onMouseOver={() => setSearch(true)}
                    onMouseLeave={() => setSearch(false)}
                  >
                    {" "}
                    <img
                      className={`transition-all duration-300 ${search && " sm:pr-[14px] lg:pr-[34px]"
                        }`}
                      src={"/src/assets/svg/search.svg"}
                      alt="image1"
                    />
                  </button>
                  <input
                    className={`font-normal   text-xs leading-[18px] transition-all duration-300  border-b border-solid truncate border-gray-300 outline-none   ${search ? "sm:w-[100px] lg:w-[153px]" : "w-[0]"
                      } `}
                    placeholder="What are you looking for?"
                    onMouseOver={() => setSearch(true)}
                    onMouseLeave={() => setSearch(false)}
                  />
                </div>
                <div className="flex  max-w-[120px] justify-between items-center sm:gap-[8px] lg:gap-[10px]">
                  <img src="/src/assets/svg/Wishlist.svg" alt="image2" />
                  <img
                    className="w-[32px] h-[32px]"
                    src="/src/assets/svg/Cartwithbuy.svg"
                    alt="image3"
                  />
                  <button
                    className="relative  "
                    onMouseOver={() => setUser(true)}
                    onMouseLeave={() => setUser(false)}
                  >
                    {" "}
                    {!user && (
                      <img  src="/src/assets/svg/user.svg" alt="image4" />
                    )}{" "}
                    {user && <img src="/src/assets/svg/user-red.svg" />}
                  </button>
                  <ul
                    className={`flex  flex-col gap-[13px] rounded  z-10  p-[18px_12px_10px_20px] max-w-[244px] text-white backdrop-blur-2xl w-full  absolute top-[124px] transition-all duration-300 right-[255px] ${user ? "block opacity-100" : "hidden opacity-0"
                      }`}
                    onMouseOver={() => setUser(true)}
                    onMouseLeave={() => setUser(false)}
                  >
                    {HeaderJson.length > 0 &&
                      HeaderJson &&
                      HeaderJson?.map((item, index) => (
                        <div key={Date.now() + index + item?.name}>
                          <Link to={item.to}>
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
        </nav>
      </header>
    </>
  );
};

export default Header;
