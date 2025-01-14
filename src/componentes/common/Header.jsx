import React from 'react'
const Header = () => {
  return (
    <>
    <div className='bg-black flex items-center justify-center w-screen text-white pl-[310px] py-[12px]' >
      <div className="flex w-[859px] gap-[231px] items-center">

      <div className='flex gap-[8px] items-center'>

      <h1 className='font-customfont12 font-normal text-sm leading-[21px] '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
      <a className='font-customfont12 font-semibold text-sm leading-[24px] underline decoration-1'>ShopNow</a>
      </div>
    <div className='flex items-end justify-end gap-[5px] ]'>
      <h1>English</h1>
      <img src="/src/assets/svg/DropDown.svg" alt="" />
    </div>
      </div>
    </div>
    <section >

    <div className='container'>
      <div className='w-full flex justify-between items-center font-poppins '>
        <div className="w-[118px] ">
            <h1 className='font-customfont  font-bold text-2xl leading-6 tracking-[0.03em]'>Exclusive</h1>
        </div>
        <div className=" flex gap-[48px] items-center w-[367px]  font-customfont12 text-base leading-6  font-normal">
            <h4>Home</h4>
            <h4>Contact</h4>
            <h4>About</h4>
            <h4>SignUp</h4>
        </div>
        <div className=" flex justify-between items-center font-customfont12 w-[347px]">
          <div className=" flex w-[243px] bg-[#F5F5F5] justify-between items-center p-[7px_12px_7px_20px] rounded-[4px]">
            <input className='font-normal text-xs leading-[18px] border-none outline-none w-[153px]' type="text"  placeholder='What are you looking for?' />
            <img src={"/src/assets/svg/search.svg"}  alt="image1" />
          </div>
          <div className="flex w-[ 80px] justify-between items-center gap-[16px]">
                <img src="/src/assets/svg/Wishlist.svg" alt="image2" />
                <img src="/src/assets/svg/Cartwithbuy.svg" alt="image3" />
          </div>
        </div>
      </div>
    </div>
    
    </section>
    </>
  )
}

export default Header