import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "./Custom.css";
const Ourstory = () => {
  const story = [
    {
      image: "characterwithblueshirt.png",
      name: "Tom Cruise",
      title: "Founder & Chairman",
    },
    {
      image: "femalecharater.png",
      name: "Emma Watson",
      title: "Managing Director",
    },
    {
      image: "characterwithblackjecket.png",
      name: "Will Smith",
      title: "Product Designer",
    },
    {
      image: "femalecharater.png",
      name: "Emma Watson",
      title: "Managing Director",
    },
    {
      image: "characterwithblueshirt.png",
      name: "Tom Cruise",
      title: "Founder & Chairman",
    },
  ];
  const services = [
    {
      img: "delevry.svg",
      heading: "FREE AND FAST DELIVERY",
      detail: "Free delivery for all orders over $140",
    },
    {
      img: "service.svg",
      heading: "24/7 CUSTOMER SERVICE",
      detail: "Friendly 24/7 customer support",
    },
    {
      img: "moneyback.svg",
      heading: "MONEY BACK GUARANTEE",
      detail: "We return money within 30 days",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="flex flex-col lg:pb-[140px] sm:pb-[80px]">
          <div className="flex gap-[30px] lg:pb-[140px] sm:pb-[80px]">
            <Swiper
              slidesPerView={3}
              modules={[Pagination, Autoplay]}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.4,
                },
                800: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              autoplay={{ delay: 2500 }}
              loop={true}
              className="customswiper"
            >
              {story.map((item, index) => (
                <div key={index + item + Date.now()}>
                  <Link to={item.to}>
                    <SwiperSlide>
                      <div className="flex flex-col w-[370px] gap-[32px] sm:pb-[40px] lg:pb-[56px]">
                        <img src={`src/assets/images/${item.image}`} alt="" />
                        <div className="flex flex-col gap-[16px]">
                          <div className="flex flex-col gap-[8px]">
                            <h4 className="font-customfont font-medium text-[32px] leading-[30px] tracking-[0.04em]">
                              {item.name}
                            </h4>
                            <h4 className="font-customfont12 font-normal text-base">
                              {item.title}
                            </h4>
                          </div>
                          <div className="flex w-[104px] justify-between">
                            <img
                              src="/src/assets/svg/icon-Twitter.svg"
                              alt=""
                            />
                            <img
                              src="/src/assets/svg/instagramblack.svg"
                              alt=""
                            />
                            <img
                              src="/src/assets/svg/icon-Linkedin.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Link>
                </div>
              ))}
            </Swiper>
          </div>

          <div className="flex lg:justify-between flex-wrap sm:justify-center sm:gap-x-6 lg:gap-x-0 sm:gap-y-6 lg:gap-y-0">
            {services.map((item, index) => (
              <div key={index}>
                <Link to={item.to}>
                  <div className="flex max-w-[262px]  w-full flex-col items-center justify-center gap-[24px]">
                    <img
                      src={`/src/assets/svg/${item.img}`}
                      alt={item.heading}
                    />
                    <div className="flex flex-col gap-[8px]">
                      <h2 className="text-center font-semibold text-xl font-customfont12 leading-[28px]">
                        {item.heading}
                      </h2>
                      <h4 className="text-center font-normal text-sm font-customfont12 leading-[21px]">
                        {item.detail}
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourstory;
