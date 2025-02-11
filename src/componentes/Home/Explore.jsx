import React from "react";
import Button from "../ui/Button";
import Featurecard from "../cards/Featurecard";
import { Link } from "react-router-dom";

const Explore = ({data,headingclass,classbutton}) => {
   
 
    
   

    return (
        <main>
            <section className="lg:mb-[140px] sm:mb-[80px] mb-[80px]" >
                <div className="container flex flex-col sm:gap-[24px] gap-[24px] lg:gap-[60px]">
                    <div className="flex flex-col gap-[20px]">
                        <ul className={`${headingclass} flex items-center gap-[16px] w-[142px]`}>
                            <li className="w-[20px] h-[40px] rounded bg-CustomRed-0"></li>
                            <li className="font-customfont12 text-CustomRed-0 leading-[20px] font-semibold text-base">
                                Our Products
                            </li>
                        </ul>
                        <div className="font-customfont list-none lg:leading-[48px] sm:leading-[28px] leading-[28px] font-semibold lg:text-4xl sm:text-2xl text-2xl tracking-[4%]">
                            Explore Our Products
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:grid-cols-2    lg:grid-cols-3 gap-x-[8px] sm:gap-y-[24px] gap-y-[24px] xl:gap-y-[60px]">

                    {
                        data.map((item,index)=>(
                           <div key={index+ Date.now() + item}>
                            <Link to={item.to}>
                            <div className="w-[270px] flex flex-col sm:gap-4 gap-4 md:gap-5 lg:gap-[16px] rounded">

                            <Featurecard type={true} color={item.color}   headimg={item.headimg}  stars={item.stars} recents={item.recents} price={item.price} tittle={item.tittle} topnew={item.topnew}/>
                           </div> </Link>
                           </div>
                        ))
                    }
                    </div>
                    <Link to={"/Viewallprojects"} className={`${classbutton} flex justify-start sm:justify-center items-center`}>

                        <Button variant={"solid"} children={"View All Products"} />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Explore;
