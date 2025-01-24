import React, { useRef } from "react";
import Catogryjson from "../../json/Catogry.json";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const Catogry = () => {
  const swiperRef = useRef();
  return (
    <>
      <main className="mb-[70px]">
        <section className="pb-[70px] border-b border-customGray-0 container flex flex-col gap-[60px]">
          <div className=" flex flex-col gap-[20px] mt-[80px]">
            <ul className="flex items-center w-[126px] justify-between ">
              <li className="w-[20px] h-[40px] rounded bg-CustomRed-0"></li>
              <li className="font-customfont12 text-CustomRed-0 leading-[20px] font-semibold text-base">
                Categories
              </li>
            </ul>
            <div className="flex justify-between items-center font-customfont list-none leading-[48px] font-semibold text-4xl tracking-[4%]">
              <h4>Browse By Category</h4>
              <div className="flex gap-2 items-center ">
                <button
                  className="flex items-center justify-center w-[46px] h-[46px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <img src={"src/assets/svg/swiperlefticon.svg"} alt="left" />
                </button>
                <button
                  className=" flex items-center justify-center w-[46px] h-[46px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <img src={"src/assets/svg/swiperrighticon.svg"} alt="right" />
                </button>
              </div>
            </div>
          </div>

          <div className=" flex gap-[30px]">
            <Swiper
              slidesPerView={6}
              loop={true}
              spaceBetween={10}
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="mySwiper"
            >
              {Catogryjson?.length &&
                Catogryjson &&
                Catogryjson &&
                Catogryjson?.map((item, index) => (
                  <SwiperSlide key={index + Date.now() + item}>
                    <Link to={item?.to}>
                      <div className=" group hover:bg-CustomRed-0 hover:border-none hover:outline-none hover:text-white     transition-all duration-300  w-[170px] flex flex-col gap-4 border border-customGray-0 rounded h-[145px] justify-center items-center ">
                        <img
                          className="hidden group-hover:block"
                          src={`/src/assets/svg/${item?.imgwhite}`}
                          alt="dhsd"
                        />
                        <img
                          className=" group-hover:hidden"
                          src={`/src/assets/svg/${item?.img}`}
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
        </section>
      </main>
    </>
  );
};

export default Catogry;
