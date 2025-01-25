import React from "react";
import Banner from "../componentes/Home/Banner";
import Flashsales from "../componentes/Home/Flashsales";
import Catogry from "../componentes/Home/Catogry";
import Flashsalesdata from "../../src/json/Sbanner.json";
import Bestselling from '.././json/BestSelling.json'
import Music from "../componentes/Home/Music";
import Explore from "../componentes/Home/Explore";

 const Home = () => {
  return (
    <>
      <Banner />
      <Flashsales  clock={true} show={true} tittle={"Flash Sales"} heading={"Today’s"} data={Flashsalesdata}/>
      <Catogry/>
      <Flashsales  buttonarrow={"solid"} show={false} tittle={"Best Selling Products"} heading={"This Month"} data={Bestselling} />
     <Music/>
     <Explore/>
    </>
  );
};

export default Home;
