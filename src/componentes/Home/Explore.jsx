import React from "react";
import Button from "../ui/Button";
import Featurecard from "../cards/Featurecard";
import explore from "../../json/Explore.json";

const Explore = () => {
   

    
const clr = ["#000000","#DB4444"]
    

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
                    <Featurecard colgroup={clr} data={explore}/>
                    
                    <div className="flex justify-center items-center">
                        <Button variant={"solid"} children={"View All Products"} />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Explore;
