import React from "react";
import { Link } from "react-router-dom";
import Input from "../componentes/ui/Input";
import Button from "../componentes/ui/Button";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col pt-[80px] pb-[140px] gap-[80px]">
          <div className="flex gap-3 font-customfont12 font-normal text-sm leading-[21px]">
            <Link to={"/"} className="opacity-[50%]">
              Home
            </Link>
            <h4 className="opacity-[50%]">/</h4>
            <h4>Contact</h4>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col p-[40px_35px_51px_35px] w-[340px]">
              <div className="flex flex-col gap-[24px] pb-[32px] border-b border-customGray-0">
                <div className="flex gap-[16px] items-center font-customfont12 font-medium text-base">
                  <img
                    src="/src/assets/svg/icons-phone.svg"
                    alt="icons-phone"
                  />
                  <h4>Call To Us</h4>
                </div>
                <div className="flex flex-col gap-[16px] font-customfont12 font-normal text-sm leading-[21px]">
                  <h4>We are available 24/7, 7 days a week.</h4>
                  <h4>Phone: +8801611112222</h4>
                </div>
              </div>
              <div className="flex flex-col gap-[24px] pt-[32px]">
                <div className="flex gap-[16px] items-center font-customfont12 font-medium text-base">
                  <img src="/src/assets/svg/icons-mail.svg" alt="icons-phone" />
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
            <div className="max-w-[800px] w-full p-[40px_32px] flex flex-col gap-[32px]">
              <div className="flex justify-between">
                <div>
                  <Input
                    inputclass={"w-[235px] pl-[16px] "}
                    placeholder={`Your Name *`}
                  />
                </div>
                <div>
                  <Input
                    inputclass={"w-[235px] pl-[16px] "}
                    placeholder={"Your Email *"}
                  />
                </div>
                <div>
                  <Input
                    inputclass={"w-[235px] pl-[16px] "}
                    placeholder={"Your Phone *"}
                  />
                </div>
              </div>
              <div className="">
                <textarea
                  className="bg-[#F5F5F5] p-[13px_14px] max-w-[737px] w-full  outline-none h-[207px]"
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
      </div>
    </>
  );
};

export default Contact;
