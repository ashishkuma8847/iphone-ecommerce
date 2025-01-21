import React, { useRef } from "react";
import banner from "../../jsonfiles/Sbanner.json";
import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import left from "../../assets/svg/swiperlefticon.svg";
import right from "../../assets/svg/swiperrighticon.svg";
import couter from '../../jsonfiles/Counter.json'
const Flashsales = () => {
  const swiperRef = useRef();

  return (
    <>
      <main>
        <section className="container">
          <div className="flex gap-6 flex-col">
            <ul className="flex items-center w-[100px] justify-between ">
              <li className="w-[20px] h-[40px] rounded bg-CustomRed-0"></li>
              <li className="font-customfont12 text-CustomRed-0 leading-[20px] font-semibold text-base">
                Today’s
              </li>
            </ul>

            <div className="flex gap-[87px] justify-between">
              <div className="flex gap-[87px]">
                <li className="font-customfont list-none leading-[48px] font-semibold text-4xl tracking-[4%]">
                  Flash Sales
                </li>
                <ul className="flex gap-[17px] items-center">
                  {
                    couter.map((item, index) => (
                      <div key={index + Date.now() + item}>
                        <Link to={item.to}>
                        <div className="flex items-center justify-center">
                          <ul className="flex flex-col gap-1">
                            <li className="font-customfont12 font-medium text-xs leading-[18px  ]">
                              {item.name}
                             </li>
                            <li className="font-customfont font-bold text-[32px] leading-[30px] tracking-[4%]  ">
                              {item.syns}
                            </li>
                          </ul>
                          <ul>
                            <li className="w-1 h-4 ml-[17px] text-CustomRed-0">{item.dots}</li>
                          </ul>
                        </div>
                        </Link>
                      </div>
                    ))
                  }
                </ul>
              </div>

              <div className="flex gap-2 items-center ">
                <button
                  className="flex items-center justify-center w-[46px] h-[46px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <img src={left} alt="left" />
                </button>
                <button
                  className=" flex items-center justify-center w-[46px] h-[46px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <img src={right} alt="right" />
                </button>
              </div>
            </div>
            <div className="flex  w-full gap-[30px]">
              <Swiper
                slidesPerView={4}
                loop={true}
                spaceBetween={10}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="mySwiper"
              >
                {banner.length > 0 &&
                  banner &&
                  banner?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <NavLink to={item.to}>
                        <div>
                          <div className="w-[270px]  flex flex-col gap-4 rounded ">
                            <div className=" flex  flex-col rounded  relative overflow-hidden  bg-[#F5F5F5] ">
                              <h4 className="font-customfont12 font-normal text-xs leading-[18px] w-[55px] h-[26px] bg-CustomRed-0 text-center text-white rounded pt-1 absolute top-[12px] left-[16px]">
                                {item.rednum}
                              </h4>
                              <div className="relative group">
                                <img
                                  className=" p-[35px_40px_35px_40px] flex justify-center transition-all duration-200 hover:scale-75 "
                                  src={item.img1}
                                  alt="sdkf"
                                />

                                <h4 className=" flex justify-center absolute text-center duration-300 items-center h-0  bottom-0 font-custom font12 font-semibold text-sm leading-[21px] transform-all  text-white bg-black w-full group-hover:h-[41px] ">
                                  Add To Cart
                                </h4>
                              </div>

                              <div className="top-[10px] right-[13px] absolute w-[34px] h-[76px] flex flex-col justify-between items-center">
                                <button >
                                   <img
                                  className="w-[34px] h-[34px] pt-[5px]"
                                  src={item.wishlist}
                                  alt="dfs"
                                />
                                </button>
                               

                                <img src={item.eye} alt="dfs" />
                              </div>
                            </div>
                            <div className="flex flex-col gap-2">
                              <h4 className="font-customfont12 font-semibold text-sm leading-[21px]">
                                {item.font1}
                              </h4>
                              <div className="flex gap-3">
                                <h4 className="font-customfont12 font-medium text-base leading-[24px] text-CustomRed-0">
                                  {item.font2}
                                </h4>
                                <h4 className="font-customfont12 font-medium text-base leading-[24px] line-through text-black opacity-[50%]">
                                  {item.font3}
                                </h4>
                              </div>
                              <div className="flex gap-2">
                                <img
                                  className="w-[100px] h-[20px]"
                                  src={item.stars}
                                  alt=""
                                />
                                <h4 className="font-customfont12 font-semibold text-sm leading-[21px] text-black opacity-[50%]">
                                  {item.font4}
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
          <div className="flex justify-center items-center   pt-[73px] pb-[60px] border-b border-customGray-0">
                  <button className="font-customfont12 font-medium text-base leading-[24px] p-[16px_48px_16px_48px] bg-CustomRed-0 text-white rounded hover:bg-white hover:text-black hover:shadow-custom transition-all duration-300 ">View All Products</button>   
          </div>
        </section>
      </main>
    </>
  );
};

export default Flashsales;
