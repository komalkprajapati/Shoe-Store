import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <section className="text-gray-600 body-font bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-white leading-tight">
              Discover Your Style
              <br className="hidden lg:inline-block" />
              Own the Trend
            </h1>
            <p className="mb-8 leading-relaxed text-gray-300 text-lg">
              Stay ahead of the fashion curve with our exclusive collection.
              Crafted for trendsetters, our range blends comfort with style.
              Elevate your wardrobe with timeless pieces that redefine luxury.
            </p>
            <div className="flex justify-center">
              <button 
              onClick={()=>{navigate('/product')}}
              className="inline-flex text-white bg-indigo-600 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-700 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                Shop Now
              </button>
              <button className="ml-4 inline-flex text-gray-900 bg-gray-100 border-0 py-3 px-8 focus:outline-none hover:bg-gray-200 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 h-[430px]"
              alt="hero"
              src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
      </section>
      <section>
  <div class="font-sans bg-gray-50 px-4 py-8 my-24">
    <div class="mx-auto lg:max-w-6xl md:max-w-4xl">
      <h2 class="text-4xl font-extrabold text-gray-800 text-center mb-12">Top Sneakers</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

       
        <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
          <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/product9.webp" alt="Sole Elegance"
              class="h-full w-5/6 mx-auto block object-contain" />
          </div>
          <div class="text-center mt-4">
            <h3 class="text-sm font-bold text-gray-800">Sole Elegance</h3>
            <h4 class="text-base text-blue-600 font-bold mt-2">₹2000</h4>
            <p class="text-xs text-gray-600 mt-1">Premium sneakers for comfort and elegance.</p>
          </div>
        </div>

     
        <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
          <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/product10.webp" alt="Urban Sneakers"
              class="h-full w-5/6 mx-auto block object-contain" />
          </div>
          <div class="text-center mt-4">
            <h3 class="text-sm font-bold text-gray-800">Urban Sneakers</h3>
            <h4 class="text-base text-blue-600 font-bold mt-2">₹2500</h4>
            <p class="text-xs text-gray-600 mt-1">Stylish sneakers with urban durability.</p>
          </div>
        </div>

        
        <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
          <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/product13.webp" alt="Zenith Glow"
              class="h-full w-5/6 mx-auto block object-contain" />
          </div>
          <div class="text-center mt-4">
            <h3 class="text-sm font-bold text-gray-800">Zenith Glow</h3>
            <h4 class="text-base text-blue-600 font-bold mt-2">₹4000</h4>
            <p class="text-xs text-gray-600 mt-1">Sleek sneakers with a glowing touch.</p>
          </div>
        </div>

        
        <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
          <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/product15.webp" alt="Blaze Burst"
              class="h-full w-5/6 mx-auto block object-contain" />
          </div>
          <div class="text-center mt-4">
            <h3 class="text-sm font-bold text-gray-800">Blaze Burst</h3>
            <h4 class="text-base text-blue-600 font-bold mt-2">₹2800</h4>
            <p class="text-xs text-gray-600 mt-1">Stylish and comfortable sneakers.</p>
          </div>
        </div>

        
        <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
          <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/product14.webp" alt="Echo Elegance"
              class="h-full w-5/6 mx-auto block object-contain" />
          </div>
          <div class="text-center mt-4">
            <h3 class="text-sm font-bold text-gray-800">Echo Elegance</h3>
            <h4 class="text-base text-blue-600 font-bold mt-2">₹3200</h4>
            <p class="text-xs text-gray-600 mt-1">Elegant shoes with premium quality.</p>
          </div>
        </div>

        

        
        <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
          <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/product11.webp" alt="Velvet Boots"
              class="h-full w-5/6 mx-auto block object-contain" />
          </div>
          <div class="text-center mt-4">
            <h3 class="text-sm font-bold text-gray-800">Velvet Boots</h3>
            <h4 class="text-base text-blue-600 font-bold mt-2">₹3800</h4>
            <p class="text-xs text-gray-600 mt-1">Luxurious boots for trendsetters.</p>
          </div>
        </div>

        
       
      </div>
    </div>
  </div>
</section>

<Footer/>
      
    </div>
  );
};
