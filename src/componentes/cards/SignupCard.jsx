import React from "react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
const SignupCard = ({ heading, title, inpotforname, variant }) => {
  return (
    <main className="pt-[60px] pb-[140px] ">
      <section className=" ">
        <div className=" flex justify-center items-center gap-[129px]">
          <div className="">
            <img
              className=" w-full "
              src="/src/assets/images/SideImage.png"
              alt="signup"
            />
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col gap-[24px] mb-[48px]">
              <h4 className="font-customfont font-medium text-4xl leading-[30px] tracking-[0.04em]">
                {heading}
              </h4>
              <h6 className="font-customfont12 font-normal text-base leading-6">
                {title}
              </h6>
            </div>
            <div className="flex gap-[40px] mb-[40px] flex-col text-customGray-0 font-customfont12 font-normal text-base leading-6 ">
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
                <div className="mt-[16px] flex flex-col gap-[32px]">
                  <Link to={"/Error"}>
                    {" "}
                    <Button children={"Sign up with Google"} />
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
