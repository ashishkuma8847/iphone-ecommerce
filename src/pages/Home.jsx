import React from "react";
import Banner from "../componentes/Home/Banner";
import Flashsales from "../componentes/Home/Flashsales";
import Catogry from "../componentes/Home/Catogry";
import Flashsalesdata from "../../src/json/Sbanner.json";
import Bestselling from '.././json/BestSelling.json'

 const Home = () => {
  return (
    <>
      <Banner />
      <Flashsales clock={true} show={true} tittle={"Flash Sales"} heading={"Today’s"} data={Flashsalesdata}/>
      <Catogry/>
      <Flashsales  buttonarrow={"solid"} show={false} tittle={"Best Selling Products"} heading={"This Month"} data={Bestselling} />
    </>
  );
};

export default Home;
