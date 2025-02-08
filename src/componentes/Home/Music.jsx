import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

const Music = () => {
    return (
        <>
            <main className= ' sm:mt-[80px] lg:mt-[140px] sm:mb-[50px] lg:mb-[71px]'>
                <section className='container     text-white'>
                    <div className="bg-black flex xl:flex-row sm:flex-col-reverse sm:gap-[14px] xl:gap-0  justify-between items-center sm:p-[39px_30px_38px_36px] lg:p-[69px_60px_68px_56px]">
                        <div className='flex max-w-[499px] sm:gap-[24px] lg:gap-[32px] w-full  flex-col'>
                            <h4 className='font-customfont12 text-customgreen-0 leading-[20px] font-semibold text-base'>Categories</h4>
                            <h1 className='font-semibold font-customfont lg:text-5xl leading-[60px] tracking-[0.04em] max-w-[443px] sm:text-3xl w-full'>Enhance Your Music Experience</h1>
                            <div className='flex gap-[24px] max-w-[320px] w-full'>
                                {
                                    [{
                                        "name": "23",
                                        "font": "Hours"
                                    },
                                    {
                                        "name": "05",
                                        "font": "Days"
                                    },
                                    {
                                        "name": "59",
                                        "font": "Minutes"
                                    },
                                    {
                                        "name": "35",
                                        "font": "Seconds"
                                    }

                                    ].map((item, index) => (
                                        <div key={index + Date.now() + item}>
                                            <Link to={item.to}>
                                                <div className="flex items-center justify-center pt-[11px]  pb-[11px] flex-col w-[62px] rounded-[100%] bg-white text-black">
                                                    <h4 className='font-customfont12 font-semibold text-base leading-[20px  ]'>{item.name}</h4>
                                                    <h4 className='font-customfont12 font-normal text-[11px]  leading-[18px  ]'>{item.font}</h4>
                                                </div></Link>
                                        </div>
                                    ))
                                }
                            </div>
                            <Link to={"/checkout"} className="pt-[8px]">

                                <Button variant={"solid"} className={"bg-customgreen-0 w-[173px]  hover:border-customgreen-0 hover:text-customgreen-0"}  children={"Buy Now!"} />
                            </Link>
                        </div>
                        <div>
                        </div>
                           <img className='w-[568px] h-[330px] drop-shadow-custom12  ' src="/src/assets/images/musicbox.png" alt="box" />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Music