import React from "react";
import ProductUi from "./ProductUi";
import { data } from "../data";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductLIst = () => {
  return (
    <>
    <Navbar/>
    <div className="text-center mb-8 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800">Our Products</h1>
        <p className="text-gray-500 mt-2">
          Explore our collection of the finest sneakers for your style and comfort.
        </p>
    </div>
     <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-7">

        {data.map((d) => {
            return (
                <>
              <ProductUi item={d} key={d.id} />
            </>
          );
        })}
        </div>

    <Footer/>
    </>
  );
};

export default ProductLIst;
