import React from "react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const SignUpFile = () => {
  return (
    <>
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
              <h4 className="font-customfont font-medium text-4xl leading-[30px] tracking-[0.04em]">Create an account</h4>
              <h6 className="font-customfont12 font-normal text-base leading-6">Enter your details below</h6>
              </div>
              <div className="flex gap-[40px] mb-[40px] flex-col text-customGray-0 font-customfont12 font-normal text-base leading-6 ">
                  <input className="border-b border-customGray-0 outline-none  " type="text" placeholder="Name" />
                  <input className="border-b border-customGray-0 outline-none " type="text" placeholder="Email or Phone Number" />
                  <input className="border-b border-customGray-0 outline-none " type="text" placeholder="Password"/>
              </div>
              <Button variant={"solid"} children={"Create Account"} className={"max-w-[371px] w-full"} />
              <div className="mt-[16px] flex flex-col gap-[32px]">    
                <button className="flex  max-w-[371px] w-full items-center justify-center gap-[16px] font-customfont12 border border-transparent hover:text-customGray-0 font-medium text-base leading-[24px] p-[16px_48px_16px_48px] bg-customGray-0 text-white rounded hover:bg-white hover:border-customGray-0 transition-all duration-300">
                    <img src="/src/assets/svg/icon-google.svg" alt="google" />
                    <h4 className="font-customfont12 font-normal text-base leading-6">Sign up with Google</h4>
                </button>
                <div className="flex justify-center text-black items-center gap-[16px] font-customfont12 font-normal text-base leading-6">
                    <h4  className="opacity-[70%]">Already have account?</h4>
                    <Link className="font-medium border-b border-black">Log in</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignUpFile;
