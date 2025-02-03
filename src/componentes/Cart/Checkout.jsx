import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [checked, setChecked] = useState(false);
  const checkoutMap = [
    {
      title: "First Name*",
      for: "text1",
      id: "text1",
    },
    {
      title: "Company Name",
      for: "text2",
      id: "text2",
    },
    {
      title: "Street Address*",
      for: "text3",
      id: "text3",
    },
    {
      title: "Apartment, floor, etc. (optional)",
      for: "text4",
      id: "text4",
    },
    {
      title: "Town/City*",
      for: "text5",
      id: "text5",
    },
    {
      title: "Phone Number*",
      for: "text6",
      id: "text6",
    },
    {
      title: "Email Address*",
      for: "text7",
      id: "text7",
    },
  ];
  return (
    <>
      <main>
        <div className="container">
          <div className="mt-[80px] mb-[140px] flex flex-col gap-[80px] font-customfont12 font-normal text-base leading-6 ">
            <div className="flex flex-col ">
              <div className="flex gap-3 font-customfont12 font-normal text-sm leading-[21px]">
                <Link to={"/"} className="opacity-[50%]">
                  Home
                </Link>
                <h4 className="opacity-[50%]">/</h4>
                <Link to={"/error"} className="opacity-[50%]">
                  My Account
                </Link>
                <h4 className="opacity-[50%]">/</h4>
                <Link to={"/error"} className="opacity-[50%]">
                  Product
                </Link>
                <h4 className="opacity-[50%]">/</h4>
                <Link to={"/error"} className="opacity-[50%]">
                  View Cart
                </Link>
                <h4 className="opacity-[50%]">/</h4>
                <h4>CheckOut</h4>
              </div>
            </div>
            <div className="flex flex-col gap-[48px]">
              <h4 className="font-customfont font-medium text-4xl leading-[30px] tracking-[0.04em]">
                Billing Details
              </h4>
              <div className="flex font-customfont12 font-normal text-base leading-6 ">
                <div className="flex flex-col  w-[470px]  ">
                  <div className="flex flex-col gap-[32px]">
                  {checkoutMap.map((item, index) => (
                    <div
                      className="flex flex-col gap-[8px]"
                      key={index + Date.now() + item}
                    >
                      <label className="opacity-[40%]" htmlFor={item.for}>
                        {item.title}
                      </label>
                      <input
                        className="outline-none pl-[10px] h-[50px] rounded bg-[#F5F5F5]"
                        id={item.id}
                        type="text"
                      />
                    </div>
                  ))}</div>

                  {/* --------------------------- */}
                  <div className="flex gap-[21px] mt-[24px]">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="peer hidden"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                      />

                      <div
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center transition
          ${checked ? "bg-CustomRed-0 border-CustomRed-0" : "border-gray-400"}`}
                      >
                        {checked && (
                          <img src="/src/assets/svg/trueicon.svg" alt="" />
                        )}
                      </div>
                    </label>
                    <h4>
                      Save this information for faster check-out next time
                    </h4>
                  </div>
                  {/* ---------------------- */}
                </div>
                <div className="flex flex-col"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;
