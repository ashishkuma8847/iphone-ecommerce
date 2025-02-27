import React, { useRef } from "react";
import Catogryjson from "../../json/Catogry.json";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

const Catogry = () => {
  const swiperRef = useRef();
  return (
    <>
      <main className="lg:mb-[70px] sm:mb-[50px] mb-[50px]">
        <section className="pb-[70px] border-b border-customGray-0 container flex flex-col sm:gap-[24px] gap-[24px] lg:gap-[60px]">
          <motion.div
            initial={{ opacity: 0, y: 0, x: -100 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1.1 }}
          >
            <div className=" flex flex-col gap-[20px] sm:mt-[60px] mt-[0px] lg:mt-[80px]">
              <ul className="flex items-center w-[126px] justify-between ">
                <li className="w-[20px] h-[40px] rounded bg-CustomRed-0"></li>
                <li className="font-customfont12 text-CustomRed-0 leading-[20px] font-semibold text-base">
                  Categories
                </li>
              </ul>
              <div className="flex  justify-between  font-customfont list-none lg:leading-[48px] sm:leading-[28px] leading-[28px] font-semibold  lg:text-4xl sm:text-2xl text-2xl tracking-[4%] undefined] items-end">
                <div className="flex items-end">
                  <h4>Browse By Category</h4>
                </div>
                <div className="flex gap-2 items-end h-full ">
                  <button
                    className="flex items-center justify-center w-[46px] h-[46px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300"
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    <img src={"/assets/svg/swiperlefticon.svg"} alt="left" />
                  </button>
                  <button
                    className=" flex items-center justify-center w-[46px] h-[46px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300"
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <img src={"/assets/svg/swiperrighticon.svg"} alt="right" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100, x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 1.1 }}
          >
            <div className=" flex gap-[30px]">
              <Swiper
                slidesPerView={6}
                loop={true}
                spaceBetween={10}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                breakpoints={{
                  375: {
                    slidesPerView: 1.8,
                  },
                  640: {
                    slidesPerView: 3,
                  },
                  800: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                  1200: {
                    slidesPerView: 6,
                  },
                }}
                className="mySwiper"
              >
                {Catogryjson?.length &&
                  Catogryjson &&
                  Catogryjson &&
                  Catogryjson?.map((item, index) => (
                    <SwiperSlide key={index + Date.now() + item}>
                      <Link to={"/error"}>
                        <div className=" group hover:bg-CustomRed-0 hover:border-none  hover:text-white     transition-all duration-300  w-[170px] flex flex-col gap-4 border border-customGray-0 rounded h-[145px] justify-center items-center ">
                          <img
                            className="hidden group-hover:block"
                            src={`/assets/svg/${item?.imgwhite}`}
                            alt="dhsd"
                          />
                          <img
                            className=" group-hover:hidden"
                            src={`/assets/svg/${item?.img}`}
                            alt="items"
                          />
                          <h4 className="font-customfont12 font-normal text-base leading-[24px]">
                            {item?.name}
                          </h4>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Catogry;
