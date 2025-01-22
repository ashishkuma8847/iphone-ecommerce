import React from 'react'

const Button = ({className, onClick,children,variant}) => {
  return (
   <>
   {
    variant === "solid" ? (<>  <button className={`py-4 px-12 rounded-lg bg-orange-600 transition-all duration-200 hover:bg-orange-400 text-center text-white capitalize ${className}`} onClick={onClick} >
        {children}
        </button></>):(<>  <button className={`py-4 px-12 rounded-lg bg-white hover:bg-orange-600 hover:text-white transition-all duration-200  text-center text-orange-600 capitalize ${className}`} onClick={onClick} >
   {children}
   </button></>)
   }
 
 
   </>
  )
}

export default Button