import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import checkoutMap from "../../json/CheckoutMap.json";
import cartjson from "../../json/Cart.json";
import Button from "../ui/Button";
const Checkout = () => {
  const [checked, setChecked] = useState(false);
  const [isborder, setIsborder] = useState(0);
  const color = [
    {
      heading: "Bank",
      image: "Bkash.svg",
      image2: "Visa.svg",
      image3: "Mastercard.svg",
      image4: "Nagad.svg",
    },
    {
      heading: "Cash on delivery",
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
                <Link to={"/Account"} className="opacity-[50%]">
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
              <div className="flex font-customfont12 font-normal text-base leading-6 gap-[173px] ">
                <div className="flex flex-col  w-[470px]  ">
                  <div className="flex flex-col gap-[32px]">
                    {checkoutMap.map((item, index) => (
                      <div
                        className="flex flex-col gap-[8px]"
                        key={index + Date.now() + item}
                      >
                        <label className="opacity-[40%]" htmlFor={item.for}>
                          {item.title}
                          <span className="text-CustomRed-0">{item.star}</span>
                        </label>
                        <input
                          className="outline-none pl-[10px] h-[50px] rounded bg-[#F5F5F5]"
                          id={item.id}
                          type="text"
                        />
                      </div>
                    ))}
                  </div>

                  {/* --------------------------- */}
                  <div className="flex gap-[16px] mt-[24px]">
                    <label className="flex items-center  cursor-pointer">
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
                <div className="flex flex-col  gap-[32px] max-w-[527px] w-full">
                  <div className="flex  flex-col-reverse gap-[32px] max-w-[425px] w-full">
                    {cartjson.map((item, index) => (
                      <div key={item + index + Date.now()}>
                        <Link
                          className="flex items-center justify-between"
                          to={item.to}
                        >
                          <div className="flex  items-center gap-[24px]  ">
                            <img
                              src={`src/assets/svg/${item.imagehead}`}
                              alt=""
                            />

                            <h4 className="">{item.product}</h4>
                          </div>
                          <h4 className="">{item.price2}</h4>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className=" max-w-[425px] w-full">
                    <div className="flex border-b border-customGray-0 pb-[16px] mb-[16px] justify-between">
                      <h4>Subtotal:</h4>
                      <h4>$1750</h4>
                    </div>
                    <div className="flex border-b border-customGray-0 pb-[16px] mb-[16px] justify-between">
                      <h4>Shipping:</h4>
                      <h4>Free</h4>
                    </div>
                    <div className="flex  justify-between">
                      <h4>Total:</h4>
                      <h4>$1750</h4>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[32px] max-w-[425px] w-full">
                    {color &&
                      color.map((item, index) => (
                        <Fragment key={index}>
                          <div className="flex justify-between">
                            <div className="flex gap-[16px]">
                              <div
                                className={`flex  items-center w-6 h-6  justify-center rounded-full border-[2px]  ${
                                  isborder === index
                                    ? " border-black"
                                    : " border-black"
                                }`}
                              >
                                <button
                                  onClick={() => setIsborder(index)}
                                  className={`  rounded-full ${
                                    isborder === index
                                      ? " w-[14px] h-[14px] bg-black"
                                      : " w-4 h-4 "
                                  } `}
                                ></button>
                              </div>
                              <h4>{item.heading}</h4>
                            </div>
                            {item.image !== undefined && (
                              <>
                                <div className="flex w-[192px] justify-between">
                                  <img
                                    src={`/src/assets/svg/${item.image}`}
                                    alt="Bkash"
                                  />
                                  <img
                                    src={`/src/assets/svg/${item.image2}`}
                                    alt="Visa"
                                  />
                                  <img
                                    src={`/src/assets/svg/${item.image3}`}
                                    alt="Mastercard"
                                  />
                                  <img
                                    src={`/src/assets/svg/${item.image3}`}
                                    alt="Nagad"
                                  />
                                </div>
                              </>
                            )}
                          </div>
                        </Fragment>
                      ))}
                  </div>
                    <div className="flex  max-w-[527px] h-[56px] w-full font-customfont12 font-normal text-base leading-6 justify-between">
                      <input
                        className="max-w-[300px] w-full p-[16px_24px_16px_24px] outline-none border border-black rounded"
                        type="text"
                        placeholder="Coupon Code"
                      />
                      <Button variant={"solid"} children={"Apply Coupon"} />
                    </div>
                    <Button variant={"solid"} children={"Place Order" } className={"w-[192px]"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;
