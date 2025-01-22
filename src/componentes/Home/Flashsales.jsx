import React, { useRef } from "react";
import banner from "../../json/Sbanner.json";
import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import left from "../../assets/svg/swiperlefticon.svg";
import right from "../../assets/svg/swiperrighticon.svg";
import couter from '../../json/Counter.json'
import Button from "../ui/Button";
import ProductCard from "../cards/ProductCard";
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
                Today's
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
                        <ProductCard bannerbg={item.bannerbg} discount={item.discount} oldprice={item.oldprice} price={item.price} rating={item.rating} reviews={item.reviews} tittle={item.tittle} view={item.view} wishlist={item.wishlist}/>
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
     <Button variant={"solid"} children={"new one"}/>
     <Button children={"new one"}/>
      </main>
    </>
  );
};

export default Flashsales;
