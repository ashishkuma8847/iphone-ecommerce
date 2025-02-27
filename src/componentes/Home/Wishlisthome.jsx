import React from 'react'
import Wishlist from '../cards/Wishlist'
import { Link,  NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import { motion } from "framer-motion";

const pageVariants = {
    initial: { x: "100vw", opacity: 0 }, 
    animate: { x: 0, opacity: 1, transition: { duration: 0.3 } }, 
    exit: { x: "-100vw", opacity: 0, transition: { duration: 0.3 } } 
  };
const Wishlisthome = ({ data ,data2 }) => {
    return (
        <>
  <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
            <div className="container">
                <div className="flex flex-col sm:pt-[40px] pt-[40px] sm:pb-[80px] pb-[80px] lg:pt-[80px] lg:pb-[140px] ">
                    <div className="flex flex-col  sm:pb-[40px] pb-[40px] lg:pb-[80px] sm:gap-[40px] gap-[40px] lg:gap-[60px]">
                        <div className=" flex items-center justify-between">
                            <div className="flex gap-[5px] font-customfont12 font-normal lg:text-xl sm:text-lg text-lg leading-[26px]">
                                <h4 >Wishlist </h4>
                                <h4>({data.length}) </h4>
                            </div>
                            <div className="">
                                <Button google={'hidden'} children={"Move All To Bag"} />
                            </div>

                        </div>
                        <div className="xl:flex sm:grid grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-y-8 gap-y-8  sm:justify-between">
                            {
                                data.map((item, index) => (
                                    <div key={index + Date.now() + item}>
                                        <NavLink to={item.to}>
                                            <Wishlist trasnsport={"true"}  discount={item.discount} mainimage={item.mainimage} price={item.price} heading={item.heading} lessprice={item.lessprice} />
                                        </NavLink>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-[60px]">
                        <div className="flex justify-between">
                            <ul className=" flex items-center max-w-[156px] w-full justify-between ">
                                <li className="w-[20px] h-[40px] rounded bg-CustomRed-0"></li>
                                <li className="font-customfont12  leading-[26px] font-normal lg:text-xl sm:text-lg text-lg">
                                Just For You
                                </li>
                            </ul>
                            <Button google={"hidden"} className={"max-w-[152px] w-[152px]"} children={"See All"}/>
                        </div>
                        <div className=" xl:flex sm:grid grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-y-8 gap-y-8 justify-between">
                            {
                                data2.map((item,index)=>(
                                    <div key={index + Date.now() + item}>
                                        <Link to={item.to}>
                                        <Wishlist style={item.style} youheadimage={item.youheadimage} discountforyou={item.discountforyou} headingyou={item.headingyou} priceyou={item.priceyou} lesspriceyou={item.lessprice} />
                                        </Link>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
            </div></motion.div>
        </>
    )
}

export default Wishlisthome