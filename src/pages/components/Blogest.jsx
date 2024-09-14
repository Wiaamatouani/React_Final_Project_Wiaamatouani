import React from 'react';
import imglog from "../../assets/images/blog.png"
import Blog1 from "../../assets/images/blog-01.jpg"
import Blog2 from "../../assets/images/blog-02.jpg"
import Blog3 from "../../assets/images/blog-03.jpg"
import image from '../../constant/image';
import data from "../../json/product.json"
import { useNavigate } from 'react-router-dom';

const Blogest = () => {
  let navigate= useNavigate()
  return (
    <div>
    <div>
        <img src={imglog} alt="" />
    </div>
    <div className='flex-row flex gap-3'>
    <div className='flex-col pt-16 pl-32'>
        <div >
            <div className='overflow-hidden w-[55vw]'>
                 <img  onClick={() => {navigate("/describlog")}} className='w-[100%] h-[100%] hover:scale-110 duration-500  p-3' src={Blog1} alt="" />
                 </div>
           
            <h1 className='text-3xl p-5   hover:text-red-700 font-normal'>The White Sneakers Nearly Every Fashion Girls Own</h1>
            <p className='font-light pl-6  text-[#97888f]'>by fashe-theme Admin |
               <span className='text-[#666666]   hover:text-red-700 font-normal'>crafts, street style</span>  |
                0 Comments</p>
            <p className='text-[#97888f]  pl-6 p-4 w-[50vw]'>
                Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames
            </p>
          
            <a href="" onClick={() => {navigate("/describlog")}} className=' hover:text-red-700  pl-6 pb-14 text-[#97888f] text-lg font-light'> Continue Reading </a>

        </div>


       

        
        <div>
          <div className='overflow-hidden w-[55vw]'>
                 <img onClick={() => {navigate("/describlog")}} className='w-[100%] h-[100%]  p-3 hover:scale-110 duration-500 ' src={Blog2} alt="" />
                 </div>
        <h1 className='text-3xl p-5 hover:text-red-700 font-normal'>The White Sneakers Nearly Every Fashion Girls Own</h1>
            <p className='font-light pl-6  text-[#97888f]'>by fashe-theme Admin |
               <span className='text-[#666666]  hover:text-red-700 font-normal'>crafts, street style</span>  |
                0 Comments</p>
            <p className='text-[#97888f]  pl-6 p-4 w-[50vw]'>
                Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames
            </p>
            <a href="" onClick={() => {navigate("/describlog")}} className='  hover:text-red-700  pl-6 pb-14 text-[#97888f] text-lg font-light'> Continue Reading </a> 
        </div>
        <div>
        <div className='overflow-hidden w-[55vw]'>
                 <img onClick={() => {navigate("/describlog")}} className='w-[100%] h-[100%] hover:scale-110 duration-500 ' src={Blog3} alt="" />
                 </div>
        <h1 className='text-3xl p-5 font-normal hover:text-red-700'>The White Sneakers Nearly Every Fashion Girls Own</h1>
            <p className='font-light pl-6  text-[#97888f]'>by fashe-theme Admin |
               <span className='text-[#666666] font-normal  hover:text-red-700'>crafts, street style</span>  |
                0 Comments</p>
            <p className='text-[#97888f]  pl-6 p-4 w-[50vw]'>
                Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames
            </p>
            <a href="" onClick={() => {navigate("/describlog")}} className='  hover:text-red-700 pl-6 pb-14 text-[#97888f] text-lg font-light'> Continue Reading </a>
        </div>

    </div >
    <div className='flex-col'> 
        <input type="text" className='p-4 m-12 ml-14 font-light text-gray-500 border rounded-full w-[18vw] flex h-[6vh]' placeholder='Search all articles... ' /> 
          <div className=' p-4 m-16 ml-14  h-[80vh]'>
          <p className='text-[#333] text-[22px] font-extrabold  pb-10 '>Featured Products</p>

<div className='flex flex-col gap-8 '>
{
data.slice(0,5).map((e) => (
    <div className='w-[100%] flex gap-8 pb-8 '>
        <div className='w-[30%]'>
            <img src={image[e.img]} alt="" className='w-[100%]' />
        </div>
        <div>
            <p className='text-[#555] pb-2 transition duration-500 hover:text-[#e65540] cursor-pointer'>{e.name}</p>
            <p className='text-[#555] text-[13px] pb-2'>${e.price}</p>
        </div>
    </div>
))
}

</div>


<p className='text-[#333] text-[22px] font-extrabold pt-10 pb-10 '>Tags Cloud</p>
            <div className='flex gap-3'>
                <button className='border-[1px] border-[#888] text-[#888] px-4 py-1 rounded-full transition duration-500 hover:text-[#e65540] hover:border-[#e65540] '>crafts</button>
                <button className='border-[1px] border-[#888] text-[#888] px-4 py-1 rounded-full transition duration-500 hover:text-[#e65540] hover:border-[#e65540] '>street style</button>

            </div>






            
          </div>
        </div>
   

    </div>
    <footer className="bg-[#f0f0f0]">
<div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 mt-[7vh]  py-10 md:grid-cols-2 xl:flex justify-around xl:px-10 ">
<div className="max-w-sm">
  <div className="mb-6 flex h-12 items-center space-x-2">
    <span className="text-base font-semibold">GET IN TOUCH</span>
  </div>
  <div className="text-gray-500">
    Any questions? Let us know in store at 8th floor, 379 Hudson St, New
    York, NY 10018 or call us on (+1) 96 716 6879
  </div>
</div>
<div className="">
  <div className="mt-4 mb-2 font-semibold xl:mb-4 text-base ">
    CATEGORIES
  </div>
  <nav aria-label="Footer Navigation" className="text-gray-500">
    <ul className="space-y-3">
      <li>
        <a className="hover:text-[#e4553f] " href="#">
          Men
        </a>
      </li>
      <li>
        <a className="hover:text-[#e4553f] " href="#">
          Women
        </a>
      </li>
      <li>
        <a className="hover:text-[#e4553f] " href="#">
          Dresses
        </a>
      </li>
      <li>
        <a className="hover:text-[#e4553f] " href="#">
          Sunglasses
        </a>
      </li>
    </ul>
  </nav>
</div>
<div className="">
  <div className="mt-4 mb-2  text-base font-semibold xl:mb-4">Links</div>
  <nav aria-label="Footer Navigation" className="text-gray-500">
    <ul className="space-y-3">
      <li>
        <a className="hover:text-[#e4553f]" href="#">
          Search
        </a>
      </li>
      <li>
        <a className="hover:text-[#e4553f]" href="#">
          About Us
        </a>
      </li>
      <li>
        <a className="hover:text-[#e4553f]" href="#">
          Contact Us
        </a>
      </li>
      <li>
        <a className="hover:text-[#e4553f]" href="#">
          Returns
        </a>
      </li>
    </ul>
  </nav>
</div>
<div className="w-[15vw]">
  <div className="mt-4 mb-2  text-base font-semibold xl:mb-4">HELP</div>
  <nav aria-label="Footer Navigation" className="text-gray-500">
    <ul className="space-y-3">
      <li>
        <a className="hover:text-[#e4553f]" href="#">
          Track Order
        </a>
      </li>
      <li>
        <a className="hover:text-[#e4553f]" href="#">
          Returns
        </a>
      </li>
      <li>
        <a className="hover:text-[#e4553f]" href="#">
          Shipping
        </a>
      </li>
      <li>
        <a className="hover:text-[#e4553f]" href="#">
          FAQs
        </a>
      </li>
    </ul>
  </nav>
</div>
<div className="">
  <div className="mt-4 mb-2 font-medium xl:mb-4">
    Subscribe to our Newsletter
  </div>
  <div className="flex flex-col">
    <div className="mb-4">
      <input
        type="email"
        className="focus:outline mb-2 block h-14 w-fulltext-base font-light border-b-2 w-full bg-[#f0f0f0] px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600"
        placeholder="Enter your email"
      />
      <button className="block rounded-full mt-5 bg-black px-11 py-3 font-medium text-white hover:bg-[#e4553f] duration-500">
        Subscribe
      </button>
    </div>
  </div>
</div>
</div>
<div className="bg-[#f0f0f0]">
<div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-center sm:text-left ">
  <div className="">
    Copyright Â© 2022 Shopify Theme Developed by MassTechnologist All
    rights reserved.
  </div>
</div>
</div>
</footer>
  
</div>
  );
};

export default Blogest;

