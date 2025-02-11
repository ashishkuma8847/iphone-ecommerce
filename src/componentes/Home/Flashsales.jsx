import React, { useRef, useState } from "react";
import banner from "../../json/Sbanner.json";
import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import couter from "../../json/Counter.json";
import Button from "../ui/Button";
import ProductCard from "../cards/ProductCard";
import Countdown from "../ui/Countdown";
const Flashsales = ({
  heading,
  tittle,
  data,
  show,
  buttonarrow,
  clock,
  titleclass,
  buttonclass,
  headingclass,
  classmain,
  classhead
}) => {
  const swiperRef = useRef();
  const [border, setBorder] = useState(false);

  const handleClick = () => {
    setBorder(true);

    setTimeout(() => {
      setBorder(false);
    }, 1000);
  };
  return (
    <>
      {/* <button onClick={handleClick} className={`${border ? "border " : "border-none"}`}>adsa</button> */}
      <main>
        <section className="container">
          <div className={`flex gap-6 flex-col ${classhead}`}>
            <ul
              className={`${headingclass} flex items-center gap-[16px] w-[126px]  `}
            >
              <li className="w-[20px] h-[40px] rounded bg-CustomRed-0"></li>
              <li className="font-customfont12 text-CustomRed-0 leading-[20px] font-semibold text-base">
                {heading}
              </li>
            </ul>

            <div className={`${classmain} flex     items-start justify-between`}>
              <div className="flex lg:flex-row sm:flex-col flex-col lg:gap-[87px] sm:gap-[20px] gap-[20px] lg:items-end sm:items-start items-start ">
                <li
                  className={`font-customfont list-none lg:leading-[48px] sm:leading-[28px] leading-[28px] font-semibold  lg:text-4xl sm:text-3xl text-xl tracking-[4%] ${titleclass}`}
                >
                  {tittle}
                </li>
                <ul className="flex gap-[17px] sm:gap-[17px]  ">
                  {clock && (
                    <>
                      <Countdown targetDate="2025-02-20" />
                    </>
                    //  couter.map((item, index) => (
                    //     <div key={index + Date.now() + item}>
                    //       <Link to={item.to}>
                    //       <div className="flex items-center justify-center">
                    //         <ul className="flex flex-col gap-1">
                    //           <li className="font-customfont12 font-medium text-xs leading-[18px  ]">
                    //             {item.name}
                    //            </li>
                    //           <li className="font-customfont font-bold text-[32px] leading-[30px] tracking-[4%]  ">
                    //             {item.syns}
                    //           </li>
                    //         </ul>
                    //         <ul>
                    //           <li className="w-1 h-4 ml-[17px] text-CustomRed-0">{item.dots}</li>
                    //         </ul>
                    //       </div>
                    //       </Link>
                    //     </div>
                    //   ))
                  )}
                </ul>
              </div>
              <div className={`${buttonclass}`}>
                {buttonarrow === "solid" ? (
                  <Link  to={"/Viewallprojects"}>
                  <Button
                    variant={"solid"}
                    ClassForDiv={"pb-[0px] pb-0 pt-0 pt-[0px] border-none"}
                    children={"View All"}
                  /></Link>
                ) : (
                  <>
                    {" "}
                    <div className="flex justify-end items-end h-[96px] sm:h-[46px]">
                    <div className="flex gap-2 items-end h-full  justify-end">
                      <button
                        className={`flex items-center justify-center w-[46px] h-[46px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300`}
                        onClick={() => swiperRef.current?.slidePrev()}
                      >
                        <img
                          src={"src/assets/svg/swiperlefticon.svg"}
                          alt="left"
                        />
                      </button>
                      <button
                        className=" flex items-center justify-center w-[46px] h-[46px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300"
                        onClick={() => swiperRef.current?.slideNext()}
                      >
                        <img
                          src={"src/assets/svg/swiperrighticon.svg"}
                          alt="right"
                        />
                      </button>
                    </div></div>
                  </>
                )}
              </div>
            </div>
            <div className="flex  w-full gap-[30px]">
              <Swiper
              slidesPerView={2}
              loop={true}
              spaceBetween={10}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                375: {
                  slidesPerView: 1.1,
                },
                640: {
                  slidesPerView: 2,
                },
                800:{
                  slidesPerView: 2.5,

                },
                1024: {
                  slidesPerView: 3,
                },
                1200:{
                  slidesPerView:4,
                }
              }}
                className="mySwiper"
              >
                {data.length > 0 &&
                  data &&
                  data?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <NavLink to={item.to}>
                        <ProductCard
                          bannerbg={item.bannerbg}
                          discount={item.discount}
                          oldprice={item.oldprice}
                          price={item.price}
                          rating={item.rating}
                          reviews={item.reviews}
                          tittle={item.tittle}
                          view={item.view}
                          wishlist={item.wishlist}
                        />
                      </NavLink>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
          {show && (
            <>
              <Link to={"/Viewallprojects"} className=" flex justify-center items-center sm:pt-[53px] pt-[53px] sm:pb-[40px] mb-[60px] pb-[40px] lg:pt-[73px] lg:pb-[60px] lg:mb-[80px] sm:mb-[60px] border-b border-customGray-0">
                <Button variant={"solid"} children={"View All Products"} />
              </Link>
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default Flashsales;
