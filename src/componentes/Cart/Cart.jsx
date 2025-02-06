import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartjson from "../../json/Cart.json";
import Button from "../ui/Button";

const Cart = () => {
  const [cart, setCart] = useState(
    cartjson.map((item) => ({
      ...item,
      Price: parseFloat(item.Price.replace("$", "")) || 0,
      quantity: 1,
      subtotal: parseFloat(item.Price.replace("$", "")) || 0,
    }))
  );

  const formatPrice = (price) => {
    return price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
  };

  const handleQuantityChange = (index, increment) => {
    setCart((prevCart) =>
      prevCart.map((item, i) => {
        if (i === index) {
          const newQuantity = increment ? item.quantity + 1 : item.quantity - 1;
          if (newQuantity < 1) return item;
          return {
            ...item,
            quantity: newQuantity,
            subtotal: newQuantity * item.Price,
          };
        }
        return item;
      })
    );
  };

 
  const totalSubtotal = cart.reduce((acc, item) => acc + item.subtotal, 0);

  return (
    <div className="container pt-[80px] pb-[140px]">
      <div className="flex flex-col">
        <div className="flex gap-3 font-customfont12 font-normal text-sm leading-[21px]">
          <Link to={"/"} className="opacity-[50%]">
            Home
          </Link>
          <h4 className="opacity-[50%]">/</h4>
          <h4>Cart</h4>
        </div>
      </div>

      <div className="flex flex-col gap-[40px] pt-[80px] pb-[24px] font-customfont12 font-normal text-base leading-6">
        <div className="flex justify-between items-center p-[24px_39px_24px_40px] shadow-Customnew rounded">
          <h4>Product</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Subtotal</h4>
        </div>

        {cart.map((item, index) => (
          <div key={index}>
            <Link to={item.to}>
              <div className="flex items-center p-[24px_66px_24px_40px] shadow-Customnew rounded">
                <div className="relative flex items-center gap-5 mr-[167px] group ">
                  <img
                    src={`src/assets/svg/${item.imagehead}`}
                    alt={item.product}
                  />
                    <img
                      className="absolute top-[-5px] left-[-12px] w-[0] h-[0] transition-all duration-200 group-hover:w-[24px] group-hover:h-[24px]"
                      src={`src/assets/svg/${item.cencel}`}
                      alt="Cancel icon"
                    />
                  <h4 className="w-[107px]">{item.product}</h4>
                </div>
                <h4 className="mr-[282px]">${formatPrice(item.Price)}</h4>
                <div className="mr-[281px] flex items-center w-[72px] justify-between p-[6px_12px_6px_12px] border border-customGray-0 rounded">
                  <h2>{item.quantity}</h2>
                  <div className="flex flex-col">
                    <button onClick={() => handleQuantityChange(index, true)}>
                      <img
                        src="src/assets/svg/Drop-Up-Small.svg"
                        alt="Increase quantity"
                      />
                    </button>
                    <button onClick={() => handleQuantityChange(index, false)}>
                      <img
                        src="src/assets/svg/Drop-Down-Small.svg"
                        alt="Decrease quantity"
                      />
                    </button>
                  </div>
                </div>
                <h4>${formatPrice(item.subtotal)}</h4>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-between pb-[80px]">
        <Link to={"/"}><Button google={"hidden"} children={"Return To Shop"} /></Link>
        <Link to={"/Wishlist"}><Button google={"hidden"} children={"Update Cart"} /></Link>
        
        
      </div>

      <div className="flex font-customfont12 font-normal text-base leading-6 justify-between">
        <div className="flex max-w-[527px] h-[56px] w-full font-customfont12 font-normal text-base leading-6 justify-between">
          <input
            className="max-w-[300px] w-full p-[16px_24px_16px_24px] outline-none border border-black rounded"
            type="text"
            placeholder="Coupon Code"
          />
          <Button variant={"solid"} children={"Apply Coupon"} />
        </div>

        <div className="max-w-[470px] gap-[24px] w-full flex flex-col p-[32px_24px_32px_24px] border border-black rounded">
          <h4 className="font-normal text-xl leading-7">Cart Total</h4>
          <div>
            <div className="flex border-b border-customGray-0 pb-[16px] mb-[16px] justify-between">
              <h4>Subtotal:</h4>
              <h4>${formatPrice(totalSubtotal)}</h4>
            </div>
            <div className="flex border-b border-customGray-0 pb-[16px] mb-[16px] justify-between">
              <h4>Shipping:</h4>
              <h4>Free</h4>
            </div>
            <div className="flex  pb-[16px] justify-between">
              <h4>Total:</h4>
              <h4>${formatPrice(totalSubtotal)}</h4>
            </div>
            <div className="flex justify-center">
              <Link to={"/checkout"}>
              <Button variant={"solid"} children={"Proceed to Checkout"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
