import React from 'react'

const Sbanner = () => {
  return (
    <>
    <main>
        <section className='container'>
          <div className="flex gap-6 flex-col">
             <ul className='flex items-center w-[100px] justify-between '>
                <li className='w-[20px] h-[40px] rounded bg-CustomRed-0'></li>
                <li className='font-customfont12 text-CustomRed-0 leading-[20px] font-semibold text-base'> Today’s</li>
             </ul>
            <ul className='flex gap-[87px]'>
                <li className='font-customfont leading-[48px] font-semibold text-4xl tracking-[4%]'>Flash Sales</li>
                <ul className='flex gap-[17px] items-center'>
                        <ul className='flex flex-col gap-1'>
                            <li className='font-customfont12 font-medium text-xs leading-[18px  ]'>Days</li>
                            <li className='font-customfont font-bold text-[32px] leading-[30px] tracking-[4%]  '>03</li>
                        </ul>
                        <ul>
                            <li className='w-1 h-4 text-CustomRed-0'>:</li>
                        </ul>
                        <ul className='flex flex-col gap-1'>
                        <li className='font-customfont12 font-medium text-xs leading-[18px  ]'>Hours</li>
                        <li className='font-customfont font-bold text-[32px] leading-[30px] tracking-[4%]  '>23</li>
                     </ul>
                     <ul>
                        <li className='w-1 h-4 text-CustomRed-0'>:</li>
                     </ul >
                     <ul className='flex flex-col gap-1'>
                        <li className='font-customfont12 font-medium text-xs leading-[18px  ]'>Minutes</li>
                        <li className='font-customfont font-bold text-[32px] leading-[30px] tracking-[4%]  '>19</li>
                     </ul>
                     <ul>
                        <li className='w-1 h-4 text-CustomRed-0'>:</li>
                     </ul>
                     <ul className='flex flex-col gap-1'>
                        <li className='font-customfont12 font-medium text-xs leading-[18px  ]'>Seconds</li>
                        <li className='font-customfont font-bold text-[32px] leading-[30px] tracking-[4%]  '>56</li>
                     </ul>
                </ul>
            </ul>
                <ul>
                    <ul className='w-[270px] '>
                       <ul className=' flex p-[35px_40px_35px_40px] relative  bg-[#F5F5F5] '>
                        <li className='font-customfont12 font-normal text-xs leading-[18px] w-[55px] h-[26px] bg-CustomRed-0 text-center text-white rounded pt-1 absolute top-[12px] left-[16px]'>-40%</li>
                        <img className='flex justify-center ' src="/src/assets/svg/console.svg" alt="sdkf" />
                       <ul className='top-[10px] right-[13px] absolute w-[34px] h-[76px] flex flex-col justify-between items-center'>
                           <img className='w-[24px] h-[24px] pt-[5px]' src="/src/assets/svg/Wishlist.svg" alt="dfs" />
                           <img src="/src/assets/svg/Fill-Eye.svg" alt="dfs" />
                       </ul>
                       </ul>
                       <ul></ul>
                    </ul>
                </ul>
          </div>
          <div className="">

          </div>
        </section>
    </main>
    </>
  )
}

export default Sbanner