import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import hjson from './Header.json'
const Header = () => {
  const [user, setUser] = useState(false)
  const [search ,setSearch]=useState(false)
  return (
    <>
    <header className='border-b border-#b2b2b2' >
    <div className="bg-black">

      <div className='container bg-black flex items-center justify-end w-full text-white  py-[12px] ' >
        <div className="flex  max-w-[859px] w-full justify-between  ">

          <div className='max-w-[550px] w-full flex gap-[8px] items-center '>

            <h1 className='sm:text-xs md:text-sm font-customfont12 font-normal text-sm leading-[21px] '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
            <a className='sm:text-xs md:text-sm font-customfont12 font-semibold  leading-[24px] underline decoration-1'>ShopNow</a>
          </div>
          <div className='flex w-[78px]  gap-[5px] md:text-sm items-center sm:text-xs '>
            <h1>English</h1>
            <img src="/src/assets/svg/DropDown.svg" alt="" />
          </div>
        </div>
      </div>
    </div>

        <nav className='container mt-[40px] mb-[16px]' >
          <div className='w-full flex justify-between items-center font-poppins '>
            <div className="w-[118px] ">
              <h1 className='font-customfont  font-bold text-2xl leading-6 tracking-[0.03em]'>Exclusive</h1>
            </div>
            <ul className=" flex gap-[48px] items-center w-[367px]  font-customfont12 text-base leading-6  font-normal">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/Contect"}>Contact</NavLink>
              <NavLink to={"/About"}>About</NavLink>
              <NavLink to={"/Signup"}>SignUp</NavLink>
            </ul>
            <div className=" flex justify-between items-center font-customfont12 w-[395px]">
              <div className=" flex w-[243px]  justify-end items-center p-[7px_12px_7px_20px] rounded-[4px]">
              
                
                <button onClick={()=>setSearch(!search)}> <img className={`transition-all duration-300 ${search && ' pr-[34px]'}`} src={"/src/assets/svg/search.svg"} alt="image1" /></button>
               {search &&   <input className='font-normal  text-xs leading-[18px] border-none outline-none w-[153px]' type="text" placeholder='What are you looking for?' />}
              
              </div>
              <div className="flex  w-[ 128px] justify-between items-center gap-[16px]">
                <img src="/src/assets/svg/Wishlist.svg" alt="image2" />
                <img className='w-[32px] h-[32px]' src="/src/assets/svg/Cartwithbuy.svg" alt="image3" />
                <button className='relative  ' onClick={() => setUser(!user)}> <img src="/src/assets/svg/user.svg" alt="image4" /></button>
                {user && <ul className='flex flex-col gap-[13px] rounded  z-10  p-[18px_12px_10px_20px] max-w-[244px] text-white bg-red-600 w-full  absolute top-[123px] right-[89px]'>
                  {
                    hjson.map((item, index) => (
                      <div key={index}>
                        <Link to={item.to}>
                          <ul className='flex w-full items-center gap-4 font-customfont12 font-normal text-sm leading-[21px]'>
                            <img src={item.img} alt="dsaj" />
                            <li>{item.name}</li>
                          </ul>
                        </Link>
                      </div>
                    ))
                  }



                </ul>}
              </div>
            </div>
          </div>
        </nav > 

      </header >
    </>
  )
}

export default Header