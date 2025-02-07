import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Newartical = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth", });
    };

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
            <main>
                <section className="lg:pb-[140px] sm:pb-[80px] relative">
                    <div className="container  flex flex-col lg:gap-[140px] sm:gap-[80px] ">
                        <div className="flex sm:flex-col lg:flex-row sm:gap-[24px] lg:gap-0  lg:justify-between sm:justify-center ">


                            <div className={`bg-bottom  max-w-[570px] w-full pl-[32px] pb-[32px] sm:h-[500px] lg:h-[600px] bg-black rounded  bg-no-repeat flex sm:m-auto lg:m-0  bg-[url('/src/assets/images/ps5.png')]`} >
                                <div className={` max-w-[242px]  w-full gap-[16px]  flex h-full flex-col   justify-end`}>
                                    <h2 className="text-[#FAFAFA] font-semibold lg:text-2xl font-customfont leading-6 tracking-[0.03em]">
                                        PlayStation 5
                                    </h2>
                                    <h4 className={`text-[#FAFAFA] font-normal lg:text-sm font-customfont12 leading-[21px] `} >
                                        Black and White version of the PS5 coming out on sale.
                                    </h4>
                                    <Link to={"/checkout"} className="text-white w-[81px] font-medium lg:text-base font-customfont12 leading-6 border-b">
                                        Shop Now
                                    </Link>
                                </div>
                            </div>


                            <div className="flex flex-col justify-between sm:gap-[24px] lg:gap-0">
                                <div className="flex sm:m-auto lg:m-0">
                                    <div className={`pl-[24px] pb-[24px] w-[570px] h-[286px] bg-[#0D0D0D]  bg-right rounded bg-no-repeat  bg-[url('/src/assets/images/woman-character.png')]`} >
                                        <div className={` w-[242px] gap-[16px]  flex h-full flex-col   justify-end`}>
                                            <h2 className="text-[#FAFAFA] font-semibold lg:text-2xl font-customfont leading-6 tracking-[0.03em]">
                                                Women’s Collections
                                            </h2>
                                            <h4 className={`text-[#FAFAFA] font-normal lg:text-sm font-customfont12 leading-[21px] `} >
                                                Featured woman collections that give you another vibe.
                                            </h4>
                                            <Link to={"/checkout"} className="text-white w-[81px] font-medium lg:text-base font-customfont12 leading-6 border-b">
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex lg:justify-between sm:gap-[30px] lg:gap-0 sm:m-auto lg:m-0">
                                    <div className="flex">
                                    <div className={` pl-[24px] pb-[24px] w-[270px] h-[284px] bg-[#242424]  bg-center rounded bg-no-repeat  bg-[url('/src/assets/images/speacer.png')]`} >
                                        <div className={` w-[242px] gap-[8px]  flex h-full flex-col   justify-end`}>
                                            <h2 className="text-[#FAFAFA] font-semibold lg:text-2xl font-customfont leading-6 tracking-[0.03em]">
                                            Speakers
                                            </h2>
                                            <h4 className={`text-[#FAFAFA] font-normal lg:text-sm font-customfont12 leading-[21px] `} >
                                            Amazon wireless speakers
                                            </h4>
                                            <Link to={"/checkout"} className="text-white w-[81px] font-medium lg:text-base font-customfont12 leading-6 border-b">
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>

                                    </div>
                                    <div className="flex">
                                    <div className={` pl-[24px] pb-[24px] w-[270px] h-[284px] bg-[#242424]  bg-center rounded bg-no-repeat  bg-[url('/src/assets/images/perfume.png')]`} >
                                        <div className={` w-[242px] gap-[8px]  flex h-full flex-col   justify-end`}>
                                            <h2 className="text-[#FAFAFA] font-semibold lg:text-2xl font-customfont leading-6 tracking-[0.03em]">
                                            Perfume
                                            </h2>
                                            <h4 className={`text-[#FAFAFA] font-normal lg:text-sm font-customfont12 leading-[21px] `} >
                                            GUCCI INTENSE OUD EDP
                                            </h4>
                                            <Link to={"/checkout"} className="text-white w-[81px] font-medium lg:text-base font-customfont12 leading-6 border-b">
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex lg:justify-between flex-wrap sm:justify-center sm:gap-x-6 lg:gap-x-0 sm:gap-y-6 lg:gap-y-0" >
                            {services.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.to}>
                                        <div className="flex max-w-[262px]  w-full flex-col items-center justify-center gap-[24px]">
                                            <img src={`/src/assets/svg/${item.img}`} alt={item.heading} />
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
                    <motion.div
                        className="absolute bottom-10 right-32"
                    >
                        <button
                            onClick={scrollToTop}
                            className="flex justify-center items-center rounded-[50%] w-[46px] h-[46px] group bg-[#F5F5F5] "
                        >
                            <img className="bg-[#F5F5F5] " src={"/src/assets/svg/arrow-up.svg"} alt="arrow up" />
                        </button>
                    </motion.div>
                </section>
            </main>
        </>
    );
};

export default Newartical;
