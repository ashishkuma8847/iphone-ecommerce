import React from "react";
import Catogryjson from "../../json/Catogry.json";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
const Catogry = () => {
  return (
    <>
      <main>
        <section className="container flex flex-col gap-[60px]">
          <div className=" flex flex-col gap-[20px] mt-[80px]">
            <ul className="flex items-center w-[126px] justify-between ">
              <li className="w-[20px] h-[40px] rounded bg-CustomRed-0"></li>
              <li className="font-customfont12 text-CustomRed-0 leading-[20px] font-semibold text-base">
                Categories
              </li>
            </ul>
            <div className="font-customfont list-none leading-[48px] font-semibold text-4xl tracking-[4%]">
              Browse By Category
            </div>
          </div>
          <div className=" flex gap-[30px]">
            {Catogryjson.map((item, index) => (
              <div key={index + Date.now() + item}>
                <Link to={item.to}>
                  <div className=" hover:border-none hover:outline-none hover:text-white     transition-all duration-300  w-[170px] flex flex-col gap-4 border border-customGray-0 rounded h-[145px] justify-center items-center bg-orange-600">
                    <img className="" src={item.img} alt="items" />
                    <h4 className="font-customfont12 font-normal text-base leading-[24px]">
                     {item.name}
                    </h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
            <Button children={"view more"} />
        </section>
      </main>
    </>
  );
};

export default Catogry;
