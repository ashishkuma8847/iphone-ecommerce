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



  
  return (
    <>
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
    </>
  );
};

export default Home;
