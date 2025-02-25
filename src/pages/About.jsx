import React from "react";
import { Link } from "react-router-dom";
import Heading from "../componentes/About/Heading";
import Ourstory from "../componentes/About/Ourstory";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { x: "100vw", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.3 } }, 
  exit: { x: "-100vw", opacity: 0, transition: { duration: 0.3 } } 
};
const About = () => {

  return (
    <>
      <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="container mx-auto p-6"
    >
    <Heading/>
    <Ourstory/></motion.div>
    </>
  );
};

export default About;
