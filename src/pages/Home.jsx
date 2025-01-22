import React from "react";
import Banner from "../componentes/Home/Banner";
import Flashsales from "../componentes/Home/Flashsales";
import Catogry from "../componentes/Home/Catogry";
import BestSelling from "../componentes/Home/BestSelling";

const Home = () => {
  return (
    <>
      <Banner />
      <Flashsales/>
      <Catogry/>
      <BestSelling/>
    </>
  );
};

export default Home;
