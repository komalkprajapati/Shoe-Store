import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { decrement,increment, removeitem ,clearCart ,selectTotalPrice} from "../redux/slice/cartSlice";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";


const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const totalPrice = useSelector(selectTotalPrice);
  const cartItems = useSelector((state) => state.cart.items);


  const handleRemoveitems = (item) => {
    dispatch(removeitem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const formatCurrency = (value) => `$${value.toFixed(2)}`;

  return (
    <>
      <Navbar />

      <div className=" flex flex-col justify-start m-10 gap-5 sm:flex-row xlg:justify-center  md:justify-center ">
        <div className="mx-auto">
          {cartItems.length == 0 ? (
            <div className="flex flex-col items-center text-center">
              <p className="font-bold text-lg mb-4">Your cart is empty!</p>
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded-md"
                onClick={() => navigate("/product")}
              >
                Back to Shop
              </button>
            </div>
          ) : (
            cartItems.map((item) => {
              return (
                <>
                  <div
                    className="font-sans max-w-5xl max-md:max-w-xl  py-4 "
                    key={item.id}
                  >
                    <div className="grid md:grid-cols-2 ">
                      <div className="md:col-span-3 space-y-4 ">
                        <div className="grid grid-cols-3 items-center gap-x-20">
                          <div className="col-span-2 flex items-start justify-center gap-4 ">
                            <div className="w-40 h-32 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
                              <img
                                src={item.image}
                                className="w-full h-full object-contain"
                              />
                            </div>

                            <div className="flex flex-col ">
                              <h3 className="text-base font-bold text-gray-800">
                                {item.title}
                              </h3>
                              <p className="text-xs font-semibold text-gray-500 mt-0.5">
                                Size: MD
                              </p>

                              <button
                                onClick={() => handleRemoveitems(item)}
                                type="button"
                                className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-4 fill-current inline"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                    data-original="#000000"
                                  ></path>
                                  <path
                                    d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                    data-original="#000000"
                                  ></path>
                                </svg>
                                REMOVE
                              </button>
                            </div>
                          </div>

                          <div className="ml-auto  ">
                            <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
                              {item.price}
                            </h4>

                          <div className="flex items-center mt-3">

                          
                              <button
                                className="px-2 py-1 border border-gray-300 rounded-md"
                                onClick={() => dispatch(decrement(item))}
                              >
                                -
                              </button>
                              <span className="px-4">{item.quantity}</span>
                              <button
                                className="px-2 py-1 border border-gray-300 rounded-md"
                                onClick={() => dispatch(increment(item))}
                              >
                                +
                              </button>
                              </div>
                          </div>
                        </div>

                        <hr className="border-gray-300" />
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          )}
        </div>

        <div className="bg-gray-100 rounded-md p-4 h-max lg:mx-auto">
          <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
            Order Summary
          </h3>

         

          <ul className="text-gray-800 mt-6 space-y-3">
            <hr className="border-gray-300" />
            <li className="flex flex-wrap gap-4 text-sm font-bold">
              Total
              <span className="ml-auto">{formatCurrency(totalPrice)}</span>
            </li>
          </ul>

          <div className="mt-6 space-y-3">
            <button
            onClick={()=>{navigate('/order')}}
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
            >
              Checkout
            </button>
            <button
            onClick={(e)=>{
              e.preventDefault();
              const cart = window.confirm('Are you sure you want to cancel your order?') 
              if(cart){
                handleClearCart()
              }
            }}
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
            >
             Clear Cart
            </button>
            <button
             onClick={()=>{navigate('/product')}}
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Cart;
