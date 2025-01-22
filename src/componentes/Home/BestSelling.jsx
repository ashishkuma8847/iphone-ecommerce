import React from 'react'
import Button from '../ui/Button'
import ProductCard from '../cards/ProductCard'
import BestSell from '../../json/BestSelling.json'
import { Link } from 'react-router-dom'
const BestSelling = () => {
    return (
        <main className='mb-[140px]'>
            <section className='container mt-[70px]'>
                <div className="flex flex-col gap-[60px]">
                    <div className=" flex flex-col gap-[20px] mt-[80px]">
                        <ul className="flex items-center w-[126px] justify-between ">
                            <li className="w-[20px] h-[40px] rounded bg-CustomRed-0"></li>
                            <li className="font-customfont12 text-CustomRed-0 leading-[20px] font-semibold text-base">
                                This Month
                            </li>
                        </ul>
                        <div className="flex justify-between items-center font-customfont list-none leading-[48px] font-semibold text-4xl tracking-[4%]">
                            <h4>Best Selling Products</h4>
                            <Button variant={"solid"} ClassForDiv={"pt-0 pb-0"} children={"View All"} />
                        </div>
                    </div>
                    <div className=" flex gap-[30px]">
                        {
                            BestSell.map((item,index)=>(
                                <div key={index + Date.now() + item}> 
                                <Link to={item.to}>
                                <ProductCard bannerbg={item.bannerbg} DiscountClass={"hidden"} oldprice={item.oldprice} price={item.price} rating={item.rating} reviews={item.reviews} tittle={item.tittle} view={item.view} wishlist={item.wishlist}/>
                                </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BestSelling