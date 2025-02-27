import React from "react";
import { Link } from "react-router-dom";
import Input from "../componentes/ui/Input";
import Button from "../componentes/ui/Button";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { x: "100vw", opacity: 0 }, 
  animate: { x: 0, opacity: 1, transition: { duration: 0.3 } }, 
  exit: { x: "-100vw", opacity: 0, transition: { duration: 0.3 } } 
};
const Contact = () => {
  return (
    <>
      <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container">
        <div className="flex flex-col xl:pt-[80px] xl:pb-[140px] sm:pt-[40px] pt-[40px] sm:pb-[80px] pb-[80px] sm:gap-10 gap-10 xl:gap-[80px]">
          <div className="flex gap-3 font-customfont12 font-normal text-sm leading-[21px]">
            <Link to={"/"} className="opacity-[50%]">
              Home
            </Link>
            <h4 className="opacity-[50%]">/</h4>
            <h4>Contact</h4>
          </div>
          <div className="flex justify-between  xl:flex-row sm:flex-col flex-col">
            <div className="flex flex-col sm:flex-row  xl:gap-0 sm:gap-4 gap-4 xl:flex-col sm:p-[20px_15px_31px_15px] p-[20px_15px_31px_15px]   xl:p-[40px_35px_51px_35px] max-w-[640px] sm:max-w-[640px]  w-full  lg:w-full sm:w-full hover:shadow-custom transition-all duration-200">
              <div className="flex flex-col  gap-[24px] xl:pb-[32px] sm:pb-0 pb-0 xl:border-b sm:border-none border-none border-customGray-0">
                <div className="flex gap-[16px] items-center font-customfont12 font-medium text-base">
                  <img
                    src="/assets/svg/icons-phone.svg"
                    alt="icons-phone"
                  />
                  <h4>Call To Us</h4>
                </div>
                <div className="flex flex-col gap-[16px] font-customfont12 font-normal text-sm leading-[21px]">
                  <h4>We are available 24/7, 7 days a week.</h4>
                  <h4>Phone: +8801611112222</h4>
                </div>
              </div>
              <div className="flex flex-col gap-[24px] xl:pt-[32px] sm:pt-0 pt-0">
                <div className="flex gap-[16px] items-center font-customfont12 font-medium text-base">
                  <img src="/assets/svg/icons-mail.svg" alt="icons-phone" />
                  <h4>Write To US</h4>
                </div>
                <div className="flex flex-col gap-[16px] font-customfont12 font-normal text-sm leading-[21px]">
                  <h4>
                    Fill out our form and we will contact you within 24 hours.
                  </h4>
                  <h4>Emails: customer@exclusive.com</h4>
                  <h4>Emails: support@exclusive.com</h4>
                </div>
              </div>
            </div>
            <div className="max-w-[800px] w-full xl:p-[40px_32px] sm:p-[20px_12px] p-[20px_12px] flex flex-col gap-[32px] transition-all duration-200 hover:shadow-custom">
              <div className="flex justify-between xl:flex-row sm:flex-col flex-col xl:gap-0 sm:gap-6 gap-6">
                <div>
                  <Input
                    inputclass={"xl:w-[235px] pl-[16px] sm:max-w-[737px] max-w-[737px] w-full "}
                    placeholder={`Your Name *`}
                  />
                </div>
                <div>
                  <Input
                    inputclass={"xl:w-[235px] pl-[16px] sm:max-w-[737px] max-w-[737px] w-full "}
                    placeholder={"Your Email *"}
                  />
                </div>
                <div>
                  <Input
                    inputclass={"xl:w-[235px] pl-[16px] sm:max-w-[737px] max-w-[737px] w-full "}
                    placeholder={"Your Phone *"}
                  />
                </div>
              </div>
              <div className="">
                <textarea
                  className="bg-[#F5F5F5] p-[13px_14px] max-w-[737px] w-full  outline-none xl:h-[207px] sm:h-[107px] h-[107px]"
                  rows="3"
                  placeholder="Your Massage"
                ></textarea>
              </div>
              <div className="flex justify-end ">
                {" "}
                <Button variant={"solid"} children={"Send Massage"} />
              </div>
            </div>
          </div>
        </div>
      </div></motion.div>
    </>
  );
};

export default Contact;
