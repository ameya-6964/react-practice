import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 to-black text-white">
      <div className="text-center pt-10">
        <h1 className="text-2xl font-bold"> Your Cart Items </h1>
        <div className="w-6/12 m-auto">
          <button
            className="p-2 m-2 bg-red-600 text-center  text-white rounded-3xl"
            onClick={handleClearCart}
          >
            Clear Cart Items 🗑️
          </button>
          {cartItems.length === 0 ? (
            <div className="flex flex-col justify-center align-middle h-[200px]">
              <h1 className="mt-auto mb-auto text-xl">Your Cart Is Empty 😿</h1>
              <h1 className="mt-auto mb-auto text-xl">
                Add Items To Your Cart 😀
              </h1>
            </div>
          ) : (
            <>
              <MenuList items={cartItems} />
              <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-1 px-2 rounded">
                Proceed To Payment
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
