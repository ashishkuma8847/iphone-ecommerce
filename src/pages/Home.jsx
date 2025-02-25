import React, { useEffect, useRef, useState } from "react";
import Banner from "../componentes/Home/Banner";
import Flashsales from "../componentes/Home/Flashsales";
import Catogry from "../componentes/Home/Catogry";
import Flashsalesdata from "../../src/json/Sbanner.json";
import Bestselling from ".././json/BestSelling.json";
import Music from "../componentes/Home/Music";
import Explore from "../componentes/Home/Explore";
import Newartical from "../componentes/Home/Newartical";
import explorejson from "../json/Explore.json";
import { motion } from "framer-motion";
const pageVariants = {
  initial: { x: "100vw", opacity: 0 }, 
  animate: { x: 0, opacity: 1, transition: { duration: 0.3 } }, 
  exit: { x: "-100vw", opacity: 0, transition: { duration: 0.3 } } 
};
const Home = () => {
  // const inputref = useRef();
  // const [value, setvalue] = useState("jaswant");
  // const [value1, setValue1] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setValue1((prev) => !prev);

  //     }, 1000); 
  //   return () => clearInterval(interval); 
  // }, [value1]); 

 
  // useEffect(() => {
  //   inputref.current.focus();
  //   console.log("logged");
  // }, [value]);

// const [time,settime]=useState(false)
// useEffect(()=>{
//   setTimeout(()=>{
//     settime(false)
//   },150)
// },[time])
  
  return (
    <>
      <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="container mx-auto p-6"
    >
    {/* <button onClick={()=>settime(!time)} className={`transition-all duration-150 ${time? "text-red-700 scale-150 bg-black" :"text-black bg-white scale-100 "} `}>
sdas
    </button> */}
   {/* <button>i am ashish {value1 ? "taak": "develoaper"}</button> */}
   {/* <h4>{value}</h4>
      <input
        value={value}
        onChange={(event) => setvalue(event.target.value)}
        type="text"
        ref={inputref}
        className="bg-red-500"
      />
      <button  onClick={()=>inputref.current.focus()}  >Focus Input</button> */}
      <Banner />
      <Flashsales
      classmain={"sm:flex-row "}
        clock={true}
        show={true}
        tittle={"Flash Sales"}
        heading={"Today's"}
        data={Flashsalesdata}
      />
      <Catogry />
      <Flashsales
      classmain={"flex-col"}
        buttonarrow={"solid"}
        show={false}
        tittle={"Best Selling Products"}
        heading={"This Month"}
        data={Bestselling}
      />
      <Music />
      <Explore data={explorejson} />
      <Newartical />
      </motion.div>
    </>
  );
};

export default Home;
