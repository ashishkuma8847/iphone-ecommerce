import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import newartical from '../../json/Newartical.json'
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
                <section className="pb-[140px] relative">
                    <div className="container  flex flex-col gap-[140px]">
                        <div className="flex ">
                            {
                                newartical.map((item, index) => (
                                    <div className={`${item.key}`} key={index + Date.now() + item}>
                                        <Link to={item.to}>
                                        <div className={` grid ${item.stylemain} grid-cols-1 `}>
                                            <div className={`${item.stylehead} rounded bg-no-repeat  bg-[url('${item.bg}')]`} >
                                                <div className={`${item.style2} flex h-full flex-col   justify-end`}>
                                                    <h2 className="text-[#FAFAFA] font-semibold lg:text-2xl font-customfont leading-6 tracking-[0.03em]">
                                                        {item.heading}
                                                    </h2>
                                                    <h4 className={`text-[#FAFAFA] font-normal lg:text-sm font-customfont12 leading-[21px] ${item.styleh4}`} >
                                                        {item.tittle}
                                                    </h4>
                                                    <h4 className="text-white w-[81px] font-medium lg:text-base font-customfont12 leading-6 border-b">
                                                        {item.shopnow}
                                                    </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }

                            
                                </div>


                        <div className="flex justify-between">
                            {services.map((item, index) => (
                                <div key={index}>
                                    <Link to={item.to}>
                                        <div className="flex w-[262px] flex-col items-center justify-center gap-[24px]">
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
