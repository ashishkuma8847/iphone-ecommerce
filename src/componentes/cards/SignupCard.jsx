import React from "react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
const SignupCard = ({ heading, title, inpotforname, variant }) => {
  return (
    <main className=" lg:pt-[60px] lg:pb-[140px] sm:pt-[40px] pt-[40px]  sm:pb-[80px] pb-[80px]">
      <section className=" ">
        <div className=" flex sm:flex-col flex-col  xl:flex-row  justify-center lg:items-center sm:items-center items-center sm:m-auto m-auto lg:ml-0 lg:gap-[129px] sm:gap-[60px] gap-[60px]">
          <div className="">
            <img
              className=" xl:w-[805px] xl:h-[781px] lg:w-[700px] lg:h-[681px] md:w-[600px] md:h-[581px] sm:w-[500px] w-[500px] h-[400px]"
              src="/src/assets/images/SideImage.png"
              alt="signup"
            />
          </div>
          <div className="flex flex-col p-[0px_24px] sm:p-0 max-w-[371px] w-full">
            <div className="flex flex-col lg:gap-[24px] sm:gap-4 gap-4 lg:mb-[48px] sm:mb-[24px] mb-[24px]">
              <h4 className="font-customfont font-medium lg:text-4xl sm:text-3xl text-3xl leading-[30px] tracking-[0.04em]">
                {heading}
              </h4>
              <h6 className="font-customfont12 font-normal text-base leading-6">
                {title}
              </h6>
            </div>
            <div className="flex lg:gap-[40px] sm:gap-[24px] gap-[24px] lg:mb-[40px] sm:mb-[30px] mb-[30px] flex-col text-customGray-0 font-customfont12 font-normal text-base leading-6 ">
              <input
                className={`${inpotforname} border-b border-customGray-0 outline-none  `}
                type="text"
                placeholder="Name"
              />
              <input
                className={` border-b border-customGray-0 outline-none  `}
                type="text"
                placeholder="Email or Phone Number"
              />
              <input
                className={` border-b border-customGray-0 outline-none  `}
                type="text"
                placeholder="Password"
              />
            </div>
            {variant === "data" ? (
              <>
                <Link to={"/Error"}>
                  <Button
                    variant={"solid"}
                    children={"Create Account"}
                    className={"max-w-[371px] w-full"}
                  />
                </Link>
                <div className="mt-[16px] flex flex-col lg:gap-[32px] sm:gap-6 gap-6">
                  <Link to={"/Error"}>
                    {" "}
                    <Button className={"w-full"} children={"Sign up with Google"} />
                  </Link>

                  <div
                    className={` flex justify-center text-black items-center gap-[16px] font-customfont12 font-normal text-base leading-6`}
                  >
                    <Link to={"/Error"} className="opacity-[70%]">
                      Already have account?
                    </Link>
                    <Link
                      to={"/signupforlogin"}
                      className="font-medium border-b border-black"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className=" flex  justify-between items-center">
                  <Link to={"/Error"}>
                    {" "}
                    <Button
                      variant={"solid"}
                      children={"Log In"}
                      className={"w-[146px]"}
                    />
                  </Link>
                  <Link to={"/Error"}>
                    {" "}
                    <Button
                      variant={"full"}
                      children={"Forget Password?"}
                      className={"w-[141px]"}
                    />{" "}
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignupCard;
