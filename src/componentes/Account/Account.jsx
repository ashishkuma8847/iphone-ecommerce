import React from "react";
import { Link } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { motion } from "framer-motion";
const pageVariants = {
  initial: { x: "100vw", opacity: 0 }, 
  animate: { x: 0, opacity: 1, transition: { duration: 0.3 } }, 
  exit: { x: "-100vw", opacity: 0, transition: { duration: 0.3 } } 
};
const Account = () => {
  return (
    <>
      <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <main>
        <div className="container">
          <div className="flex flex-col font-customfont12 font-normal text-sm leading-[21px] sm:mt-[40px] mt-[40px] sm:mb-[80px] mb-[80px] lg:mt-[80px] lg:mb-[140px] lg:gap-[80px] sm:gap-10 gap-10">
            <div className="flex justify-between ">
              <div className="flex gap-3">
                <Link to={"/"} className="opacity-[50%]">
                  Home
                </Link>
                <h4 className="opacity-[50%]">/</h4>
                <h4>My Account</h4>
              </div>
              <h4>
                Welcome! <span className="text-CustomRed-0"> Md Rimel</span>
              </h4>
            </div>
            <div className="flex xl:flex-row sm:flex-col flex-col  xl:gap-[100px] sm:gap-[50px] gap-[50px] font-customfont12 font-normal text-sm leading-[24px]">
              <div className="flex sm:flex-row flex-col gap-6 sm:gap-0  xl:flex-col sm:justify-between justify-between  lg:justify-start">
                <div className="flex flex-col gap-[16px]">
                  <h4 className="font-customfont12 font-medium text-sm leading-[24px]">
                    Manage My Account
                  </h4>
                  <div className="flex flex-col  ml-[35px]">
                    <h5 className="text-CustomRed-0 ">My Profile</h5>
                    <h5 className="opacity-[50%]">Address Book</h5>
                    <h5 className="opacity-[50%]">My Payment Options</h5>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] lg:pt-[24px] sm:p-0 p-0 lg:pb-[16px]">
                  <h4 className="font-customfont12 font-medium text-sm leading-[24px]">
                    My Orders
                  </h4>
                  <div className="flex flex-col opacity-[50%] ml-[35px]">
                    <h5 className="">My Returns</h5>
                    <h5 className="">My Cancellations</h5>
                  </div>
                </div>
                <h4 className="font-customfont12 font-medium text-sm leading-[24px]">
                  My WishList
                </h4>
                <div className=""></div>
              </div>
              <div className="flex flex-col  sm:p-[24px_40px] p-[0px_10px]    lg:p-[40px_80px]">
                <h4 className="pb-[16px] max-w-[155px] w-full  font-customfont12 font-medium text-xl leading-7 text-CustomRed-0">
                  {" "}
                  Edit Your Profile
                </h4>
                <div className="flex flex-col gap-8 pb-[24px] max-w-[710px] w-full">
                  <div className="flex lg:flex-row sm:flex-col flex-col sm:gap-[24px] gap-[24px] lg:gap-[50px]">
                    <div className="flex flex-col gap-[8px] ">
                      <Input
                        title={"First Name"}
                        className={"text-black   "}
                        inputclass={"lg:w-[330px] sm:w-full w-full pl-[16px] "}
                        placeholder={"Md"}
                        id={"item1"}
                        type={"text"}
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] ">
                      <Input
                        title={"Last Name"}
                        className={"text-black opacity-[100%] "}
                        inputclass={"lg:w-[330px]  sm:w-full w-full  pl-[16px]"}
                        placeholder={"Rimel"}
                        id={"item2"}
                        type={"text"}
                      />
                    </div>
                  </div>
                  <div className="flex lg:flex-row sm:flex-col flex-col sm:gap-6 gap-6 lg:gap-[50px]">
                    <div className="flex flex-col gap-[8px] ">
                      <Input
                        title={"Email"}
                        className={"text-black opacity-[100%] "}
                        inputclass={"lg:w-[330px] sm:w-full w-full pl-[16px]"}
                        placeholder={"rimel1111@gmail.com"}
                        id={"item3"}
                        type={"email"}
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] ">
                      <Input
                        title={"Address"}
                        className={"text-black opacity-[100%] "}
                        inputclass={"lg:w-[330px] sm:w-full w-full pl-[16px]"}
                        placeholder={"Kingston, 5236, United State"}
                        id={"item4"}
                        type={"text"}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] pb-[24px]  max-w-[710px] w-full">
                  <div className="flex flex-col gap-[8px]">
                    <Input
                      title={"Password Changes"}
                      className={"text-black opacity-[100%] "}
                      inputclass={" pl-[16px] "}
                      placeholder={"Current Passwod"}
                      id={"type5"}
                      type={"text"}
                    />
                  </div>
                  <Input
                    className={"hidden "}
                    inputclass={" pl-[16px] "}
                    placeholder={"New Passwod"}
                    type={"Password"}
                  />{" "}
                  <Input
                    className={"hidden "}
                    inputclass={" pl-[16px] "}
                    placeholder={"Confirm New Passwod"}
                    type={"Password"}

                  />
                </div>
                <div className="flex gap-[32px] justify-end items-center">
                     <Button variant={"full"} children={"Cancel"} className={"text-black"}/>
                     <Button variant={"solid"} children={"Save Changes"} className={"w-[]"}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main></motion.div>
    </>
  );
};

export default Account;
