import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
    <div className='container'>
        <div className="flex flex-col pt-[80px] pb-[140px]">
        <div className="flex gap-3 font-customfont12 font-normal text-sm leading-[21px] ">
            <Link to={"/"} className="opacity-[50%]">Home</Link>
            <h4 className="opacity-[50%]">/</h4>
            <h4>Cart</h4>
          </div>
        </div>
        <div className="pt-[80px] pb-[80px]">
                 
        </div>
    </div>
    </>
  )
}

export default Cart