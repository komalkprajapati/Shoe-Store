import React from "react";
import { useDispatch } from "react-redux";
import { additem } from "../redux/slice/cartSlice";
import Footer from "./Footer";

const ProductUi = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdditems = () => {
    dispatch(additem(item));
  };

  return (
    <>
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 h-full">
      {/* Product Image */}
      <div className="bg-gray-100 flex justify-center items-center p-4 h-[200px]">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">{item.title}</h3>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{item.desc}</p>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-semibold text-gray-800">₹{item.price}</span>
          <span className="text-sm text-gray-500 line-through">₹5000</span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="flex">
        
      <button
        onClick={()=>{
          handleAdditems(item);
       
        }}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 text-center font-semibold transition-all"
      >
        Add to Cart
      </button>
      <button
        
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 text-center font-semibold transition-all"
      >
       Buy Now
      </button>
    </div>
    </div>
    
    </>
  );
};

export default ProductUi;
