import React from 'react'
import Flashsales from '../Home/Flashsales'
import Bestselling from '../../json/BestSelling.json'
import Flashsalesdata from "../../json/Sbanner.json";
import Explore from '../Home/Explore';
import explorejson from '../../json/Explore.json';
import { motion } from "framer-motion";
const pageVariants = {
  initial: { x: "100vw", opacity: 0 }, 
  animate: { x: 0, opacity: 1, transition: { duration: 0.5 } }, 
  exit: { x: "-100vw", opacity: 0, transition: { duration: 0.5 } } 
};
const Viewallprojects = () => {
  return (
   <>
 <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
   <div className="flex flex-col lg:gap-[80px] sm:gap-[32px] gap-[32px] lg:pt-[80px]  sm:pt-[40px ] pt-[40px] ">
    <div className="">
    <Flashsales  headingclass={"hidden"}  tittle={"Flash Sales"} heading={"Today’s"} data={Flashsalesdata}/></div>
    <div className="">
      <Flashsales buttonclass={"hidden"}  headingclass={"hidden"}  buttonarrow={"solid"} show={false} tittle={"Best Selling Products"} heading={"This Month"} data={Bestselling} /></div>
      <div className="">
        <Explore  classbutton={"hidden"} headingclass={"hidden"} data={explorejson}/>
      </div>
      </div>
      </motion.div>
   </>
  )
}

export default Viewallprojects