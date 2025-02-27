import React from 'react'
import SignUpFile from '../componentes/SignUp/SignUpFile'
import { motion } from "framer-motion";

const pageVariants = {
  initial: { x: "100vw", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.3 } }, 
  exit: { x: "-100vw", opacity: 0, transition: { duration: 0.3 } }
};
const Signup = () => {
  return (
    <>
      <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
    <SignUpFile/></motion.div>
    </>
  )
}

export default Signup