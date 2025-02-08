import React from "react";
import footer from "../../json/Footer.json";
const Footer = () => {
  const linkNames = footer[0].name.map((link) => link.title);
  const linkNames1 = footer[1].name.map((link) => link.title);
  const linkNames2 = footer[2].name.map((link) => link.title);

  return (
    <>
      <footer>
        <section className=" bg-black text-white   xl:pt-[80px] xl:pb-[60px] sm:pt-[50px] sm:pb-[40px] ">
          <div className="container flex  sm:gap-6 xl:gap-0 xl:flex-row sm:flex-col justify-between">
            <div className="flex flex-col gap-4 max-w-[217px]">
              <div className="  flex flex-col xl:gap-[24px] sm:gap-4 ">
                <h1 className="font-customfont font-bold text-2xl leading-6 tracking-[0.03em]">
                  Exclusive
                </h1>
                <h2 className="text-[#FAFAFA] font-customfont12 font-medium text-xl leading-7    ">
                  Subscribe
                </h2>
                <h3 className="text-[#FAFAFA] font-customfont12 font-normal text-base leading-6">
                  Get 10% off your first order
                </h3>
              </div>
              <div className="max-w-[217px] gap-[32px]  flex border border-white rounded p-[12px_15px_12px_16px]">
                <input
                  className="w-[130px] bg-black outline-none text-[#FAFAFA] font-customfont12 font-normal text-base leading-6"
                  type="text"
                  placeholder="Enter your email"
                />
                <img src="/src/assets/svg/icon-send.svg" alt="img1" />
              </div>
            </div>
            <div className="flex md:m-auto xl:m-0 justify-between max-w-[581px] w-full">
            <div className="flex  flex-col w-[165px] gap-[24px]  font-customfont12 ">
              <div className="">
                <h4 className=" font-medium text-xl leading-7">Support</h4>
              </div>
              <div className="flex  flex-col gap-[16px] text-[#FAFAFA] w-[175px]">
                {linkNames.map((item, index) => (
                  <div key={index + item}>
                    <div className="flex flex-col font-customfont12 font-normal text-base leading-6">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-[123px] gap-[24px]">
              <div className=" font-medium text-xl leading-7">
                <h4>Account</h4>
              </div>
              <div className=" flex flex-col gap-[16px]  text-[#FAFAFA] ">
                {linkNames1.map((item, index) => (
                  <div key={index + item}>
                    <div className="flex flex-col font-customfont12 font-normal text-base leading-6">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-[109px] gap-[24px]">
              <div className=" font-medium text-xl leading-7">
                <h4>Quick Link</h4>
              </div>
              <div className="flex flex-col gap-[16px]  text-[#FAFAFA]">
                {linkNames2.map((item, index) => (
                  <div key={index + item}>
                    <div className="flex flex-col font-customfont12 font-normal text-base leading-6 ">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
            <div className="flex flex-col xl:gap-[24px] sm:gap-4">
              <h1 className="font-customfont12 font-medium text-xl leading-7">
                Download App
              </h1>
              <div className="flex flex-col gap-[8px] ">
                <h2 className=" text-[#FAFAFA] opacity-[70%] font-customfont12 font-medium text-xs leading-[18px]">
                  Save $3 with App New User Only
                </h2>
                <div className="flex gap-[8px] items-center">
                  <div className="">
                    <img src="/src/assets/images/QrCode.png" alt="qr" />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="p-[5px_3px_5px_3px]">
                      <img
                        className=" w-[104px] h-[30px]"
                        src="/src/assets/images/playstore.png"
                        alt="playstore"
                      />{" "}
                    </div>
                    <div className="p-[3px]">
                      {" "}
                      <img
                        className="w-[104px] h-[34px]"
                        src="/src/assets/images/appstore.png"
                        alt="appstore"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[24px]">
                <img src="/src/assets/svg/Facebook.svg" alt="Facebook" />
                <img
                  className="mt-[2px] w-[18px] h-[18px]"
                  src="/src/assets/images/x.png"
                  alt="x"
                />
                <img src="/src/assets/svg/instagram.svg" alt="instagram" />
                <img src="/src/assets/svg/Linkedin.svg" alt="Linkedin" />
              </div>
            </div>
          </div>
        </section>
        <div className="bg-black text-white border-t border-[#141414] ">
          <div className="container flex items-center justify-center opacity-[60%] gap-[6px] pt-[16px] pb-[24px] ">
            <img
              className="pt-[2px] pb-[2px]"
              src="/src/assets/svg/copyright.svg"
              alt=""
            />
            <h4 className="font-customfont12 font-normal text-base leading-6">
              Copyright Rimel 2022. All right reserved
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
