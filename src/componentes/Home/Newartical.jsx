import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Newartical = () => {
    const scrollToTop = () => {
        window.scrollTo({top: 0,  behavior: "smooth", }); };

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
                <section className="mb-[140px]">
                    <div className="container flex flex-col gap-[140px]">
                        <div className="flex">
                            <div className="mr-[30px] rounded bg-no-repeat bg-bottom w-[570px] pl-[32px] pb-[32px] h-[600px] bg-black bg-[url('/src/assets/images/ps5.png')]">
                                <div className="flex h-full flex-col w-[242px] justify-end gap-[16px]">
                                    <h2 className="text-[#FAFAFA] font-semibold lg:text-2xl font-customfont leading-6 tracking-[0.03em]">
                                        PlayStation 5
                                    </h2>
                                    <h4 className="text-[#FAFAFA] font-normal lg:text-sm font-customfont12 leading-[21px]">
                                        Black and White version of the PS5 coming out on sale.
                                    </h4>
                                    <h4 className="text-white w-[81px] font-medium lg:text-base font-customfont12 leading-6 border-b">
                                        Shop Now
                                    </h4>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[30px]">
                                <div className="rounded flex pl-[24px] pb-[24px] w-[570px] h-[286px] bg-[#0D0D0D] bg-no-repeat bg-right bg-[url('/src/assets/images/woman-character.png')]">
                                    <div className="flex flex-col w-[272px] justify-end gap-[16px]">
                                        <h2 className="text-[#FAFAFA] font-semibold lg:text-2xl font-customfont12 leading-6 tracking-[0.03em]">
                                            Women’s Collections
                                        </h2>
                                        <h4 className="text-[#FAFAFA] w-[255px] font-normal lg:text-sm font-customfont12 leading-[21px]">
                                            Featured woman collections that give you another vibe.
                                        </h4>
                                        <h4 className="text-white w-[81px] font-medium lg:text-base font-customfont12 leading-6 border-b">
                                            Shop Now
                                        </h4>
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <div className="rounded flex pl-[24px] pb-[24px] w-[270px] h-[284px] bg-[#242424] bg-no-repeat bg-center bg-[url('/src/assets/images/speacer.png')]">
                                        <div className="flex flex-col w-[191px] justify-end gap-[8px]">
                                            <h2 className="text-[#FAFAFA] font-semibold lg:text-2xl font-customfont12 leading-6 tracking-[0.03em]">
                                                Speakers
                                            </h2>
                                            <h4 className="text-[#FAFAFA] w-[255px] font-normal lg:text-sm font-customfont12 leading-[21px]">
                                                Amazon wireless speakers
                                            </h4>
                                            <h4 className="text-white w-[81px] font-medium lg:text-base font-customfont12 leading-6 border-b">
                                                Shop Now
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="rounded flex pl-[24px] pb-[24px] w-[270px] h-[284px] bg-[#242424] bg-no-repeat bg-center bg-[url('/src/assets/images/perfume.png')]">
                                        <div className="flex flex-col w-[191px] justify-end gap-[8px]">
                                            <h2 className="text-[#FAFAFA] font-semibold lg:text-2xl font-customfont12 leading-6 tracking-[0.03em]">
                                                Perfume
                                            </h2>
                                            <h4 className="text-[#FAFAFA] w-[255px] font-normal lg:text-sm font-customfont12 leading-[21px]">
                                                GUCCI INTENSE OUD EDP
                                            </h4>
                                            <h4 className="text-white w-[81px] font-medium lg:text-base font-customfont12 leading-6 border-b">
                                                Shop Now
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

                        <motion.div
                            className="fixed bottom-4 right-4"
                        >
                            <button
                                onClick={scrollToTop}
                                className="flex justify-center items-center rounded-[50%] w-[46px] h-[46px] group hover:bg-gray-200 "
                            >
                                <img className=" group-hover:bg-gray-200" src={"/src/assets/svg/arrow-up.svg"} alt="arrow up" />
                            </button>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Newartical;
