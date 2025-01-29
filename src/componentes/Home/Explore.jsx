import React from "react";
import Button from "../ui/Button";
import Featurecard from "../cards/Featurecard";
import { Link } from "react-router-dom";

const Explore = ({data}) => {
   
 
    
    const colors=["#FB1314","#EEFF61"];

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
                    <div className="grid grid-cols-4 gap-x-[8px] gap-y-[60px]">

                    {
                        data.map((item,index)=>(
                           <div key={index+ Date.now() + item}>
                            <Link to={item.to}>
                            <div className="w-[270px] flex flex-col sm:gap-4 md:gap-5 lg:gap-[16px] rounded">

                            <Featurecard type={true}  colgroup={colors} headimg={item.headimg}  stars={item.stars} recents={item.recents} price={item.price} tittle={item.tittle} />
                           </div> </Link>
                           </div>
                        ))
                    }
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
