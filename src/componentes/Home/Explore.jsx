import React, { useState } from "react";
import explore from "../../json/Explore.json";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Explore = () => {
    const [dotStates, setDotStates] = useState(
        explore.map(() => ({ inputdot: false, inputdot1: false }))
    );

    const toggleDot = (index, dotType) => {
        setDotStates((prevStates) =>
            prevStates.map((state, i) =>
                i === index ? { ...state, [dotType]: !state[dotType] } : state
            )
        );
    };

    const getDotColor = (index) => {
        const uniqueColors = {
            0: "bg-[#FB1314]",
            1: "bg-[#EEFF61]",
            2: "bg-[#000000]",
            3: "bg-[#184A48]",
            4: "bg-[#FB1314]",
            5: "bg-[#EEFF61]",
            6: "bg-[#000000]",
            7: "bg-[#184A48]",
        };
        return uniqueColors[index] || "bg-CustomRed-0";
    };

    return (
        <main>
            <section className="mb-[140px]">
                <div className="container flex flex-col gap-[60px]">
                    <div className="flex flex-col gap-[20px]">
                        <ul className="flex items-center gap-[16px] w-[142px]">
                            <li className="w-[20px] h-[40px] rounded bg-CustomRed-0"></li>
                            <li className="font-customfont12 text-CustomRed-0 leading-[20px] font-semibold text-base">
                                Our Products
                            </li>
                        </ul>
                        <div className="font-customfont list-none lg:leading-[48px] sm:leading-[28px] font-semibold lg:text-4xl sm:text-2xl tracking-[4%]">
                            Explore Our Products
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-y-[60px] gap-x-[10px] mb-[60px]">
                        {explore.map((item, index) => (
                            <div key={index}>
                                <Link to={item.to}>
                                    <div className="w-[270px] flex flex-col sm:gap-4 md:gap-5 lg:gap-[16px] rounded">
                                        <div className="flex flex-col rounded relative overflow-hidden bg-[#F5F5F5]">
                                            {index >= 4 && index <= 6 && item.new && (
                                                <h4 className="font-customfont12 font-normal text-xs leading-[18px] w-[55px] h-[26px] bg-customgreen-0 text-center text-white rounded pt-1 absolute top-[12px] left-[16px]">
                                                    {item.new}
                                                </h4>
                                            )}
                                            <div className="relative group">
                                                <img
                                                    className="p-[35px_40px_35px_40px] w-[269px] h-[249px] flex justify-center transition-all duration-200 hover:scale-75"
                                                    src={`/src/assets/images/${item.headimg}`}
                                                    alt="product"
                                                />
                                                <h4 className="flex justify-center absolute text-center duration-300 items-center h-0 bottom-0 font-custom font12 font-semibold text-sm leading-[21px] transform-all text-white bg-black w-full group-hover:h-[41px]">
                                                    Add To Cart
                                                </h4>
                                            </div>

                                            <div className="top-[10px] right-[13px] absolute w-[34px] h-[76px] flex flex-col justify-between items-center">
                                                <button className="flex w-[34px] items-center justify-center bg-white rounded-[50%] h-[34px]">
                                                    <img
                                                        className="w-[24px] h-[24px]"
                                                        src={`/src/assets/svg/${item.wishlistimg}`}
                                                        alt="wishlist"
                                                    />
                                                </button>

                                                <img
                                                    src={`/src/assets/svg/${item.viewimg}`}
                                                    alt="view"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className="font-customfont12 font-semibold text-sm leading-[21px]">
                                                {item.tittle}
                                            </h4>
                                            <div className="flex gap-[8px]">
                                                <h4 className="font-customfont12 font-medium text-base leading-[24px] text-CustomRed-0">
                                                    {item.price}
                                                </h4>
                                                <img
                                                    className="w-[100px] h-[20px]"
                                                    src={`/src/assets/svg/${item.stars}`}
                                                    alt="rating"
                                                />
                                                <h4 className="font-customfont12 font-semibold text-sm leading-[21px] text-black opacity-[50%]">
                                                    {item.recents}
                                                </h4>
                                            </div>
                                            <div className="flex gap-[8px]">
                                                <button
                                                    onClick={() => toggleDot(index, "inputdot")}
                                                    className={`w-[20px] h-[20px] rounded-[50%] ${getDotColor(index)
                                                        } ${dotStates[index]?.inputdot
                                                            ? "outline outline-black border-[3px] border-white"
                                                            : "outline-0 border-0"
                                                        }`}
                                                ></button>
                                                <button
                                                    onClick={() => toggleDot(index, "inputdot1")}
                                                    className={`w-[20px] h-[20px] bg-CustomRed-0 rounded-[50%] ${dotStates[index]?.inputdot1
                                                            ? "outline outline-black border-[3px] border-white"
                                                            : "outline-0 border-0"
                                                        }`}
                                                ></button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center">
                        <Button variant={"solid"} children={"View All Products"} />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Explore;
