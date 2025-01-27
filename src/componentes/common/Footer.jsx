import React from 'react'
import footer from '../../json/Footer.json'
import { Link } from 'react-router-dom'
const Footer = () => {
  const linkNames = footer[0].name.map((link) => link.name);
  return (
    <>
      <footer>
        <section className=' bg-black text-white pt-[80px] pb-[60px]'>
          <div className="container flex justify-between">
            <div className="flex flex-col gap-[16px] max-w-[217px]">


              <div className="  flex flex-col gap-[24px]">
                <h1 className='font-customfont font-bold text-2xl leading-6 tracking-[0.03em]'>Exclusive</h1>
                <h2 className='text-[#FAFAFA] font-customfont12 font-medium text-xl leading-7    '>Subscribe</h2>
                <h3 className='text-[#FAFAFA] font-customfont12 font-normal text-base leading-6'>Get 10% off your first order</h3>

              </div>
              <div className="max-w-[217px] gap-[32px]  flex border border-white rounded p-[12px_15px_12px_16px]">
                <input className='w-[130px] bg-black outline-none text-[#FAFAFA] font-customfont12 font-normal text-base leading-6' type="text" placeholder='Enter your email' />
                <img src="/src/assets/svg/icon-send.svg" alt="img1" />
              </div>
            </div>
            <div className="flex gap-[87px] ">
              {
                footer.map((item, index) => (
                  <div className='' key={index + Date.now() + item}>
                    <Link className='' to={item.to}>
                      <div className="flex flex-col">
                        <h2>{item.heading}</h2>
                        {
                          linkNames.map((item, index) => (
                            <div  key={index  + item}>
                              <div className="flex flex-col">
                                    {item}
                        </div>
                            </div>
                          ))
                        }
                       
                      </div>



                    </Link>
                  </div>
                ))
              }


            </div>
            <div className="flex flex-col gap-[24px]">
              <h1 className='font-customfont12 font-medium text-xl leading-7'>Download App</h1>
              <div className="flex flex-col gap-[8px] ">
                <h2 className=' text-[#FAFAFA] opacity-[70%] font-customfont12 font-medium text-xs leading-[18px]'>Save $3 with App New User Only</h2>
                <div className="flex gap-[8px] items-center">
                  <div className="">
                    <img src="/src/assets/images/QrCode.png" alt="qr" />
                  </div>
                  <div className="flex flex-col gap-[4px]">
                    <div className="p-[5px_3px_5px_3px]">
                      <img className=' w-[104px] h-[30px]' src="/src/assets/images/playstore.png" alt="playstore" /> </div>
                    <div className="p-[3px]">  <img className='w-[104px] h-[34px]' src="/src/assets/images/appstore.png" alt="appstore" />
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex items-center gap-[24px]">
                <img src="/src/assets/svg/Facebook.svg" alt="Facebook" />
                <img className='mt-[2px] w-[18px] h-[18px]' src="/src/assets/images/x.png" alt="x" />
                <img src="/src/assets/svg/instagram.svg" alt="instagram" />
                <img src="/src/assets/svg/Linkedin.svg" alt="Linkedin" />
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer