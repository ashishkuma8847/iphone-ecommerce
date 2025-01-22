import React, { useRef } from 'react'

const Button = ({className,ClassForDiv, onClick,children,variant}) => {

  return (
   <>
   {
    variant === "solid" ?  (<>    <div className={`flex justify-center items-center   pt-[73px] pb-[60px] border-b border-customGray-0 ${ClassForDiv}`}>
      <button className={` ${className} font-customfont12 font-medium text-base leading-[24px] p-[16px_48px_16px_48px] bg-CustomRed-0 text-white rounded hover:bg-white hover:text-black hover:shadow-custom transition-all duration-300 `} onClick={onClick}> {children}</button>  
</div></>): variant === "doted" ? (<>  <button className={`py-4 px-12 rounded-lg bg-white hover:bg-orange-600 hover:text-white transition-all duration-200  text-center text-orange-600 capitalize ${className}`} onClick={onClick} >
   {children}
   </button></>) :  (<>  {(()=>{
    const swiperRef = useRef();

    return (
    <div className="flex gap-2 items-center ">
                <button
                  className="flex items-center justify-center w-[46px] h-[46px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <img src={"src/assets/svg/swiperlefticon.svg"} alt="left" />
                </button>
                <button
                  className=" flex items-center justify-center w-[46px] h-[46px] rounded-[50%] hover:bg-[#F5F5F5] transition-all duration-300"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <img src={"src/assets/svg/swiperrighticon.svg"} alt="right" />
                </button>
              </div>
   )})()}
               </>)
   }
 
 
   </>
  )
}

export default Button