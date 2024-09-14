
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png.webp"
import React from 'react';

const Navbar = () => {
    return (
        <>
        <header class="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
  <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black">
    
    <div className="  ">
            <img  src={logo} alt="" />
          </div>
  
   
  </a>
  <input type="checkbox" class="peer hidden" id="navbar-open" />
  <label class="absolute top-5 right-5 cursor-pointer lg:hidden" for="navbar-open">
    <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </label>
  <nav aria-label="Header Navigation" class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
    <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
      <li class="lg:mr-12"><Link to="/" class="roundedmd px-2 py-2 text-base font-light text-black hover:text-red-600 " href="#">Home</Link></li>
      <li class="lg:mr-12"><Link to="/shop" class="rounded md px-2 py-2 text-base font-light text-black hover:text-red-600" href="#">Shop</Link></li>
      <li class="lg:mr-12"><a class="rounded md px-2 py-2 text-base font-light text-black hover:text-red-600" href="#"> Sale</a></li>
      <li class="lg:mr-12"><Link to="features" class="rounded md px-2 py-2 text-base font-light text-black hover:text-red-600 " href="#">Features</Link></li>
      <li class="lg:mr-12"><Link to="/Blogest" class="rounded md px-2 py-2 text-base font-light text-black hover:text-red-600 " href="#"> Blog</Link></li>
      <li class="lg:mr-12"><Link to="about" class="rounded md px-2 py-2 text-base font-light text-black hover:text-red-600 " href="#">About</Link></li>
      <li class="lg:mr-12"><Link to="contact" class="rounded md px-2 py-2 text-base font-light text-black hover:text-red-600 " href="#"> Contact</Link></li>
    </ul>
    <hr class="mt-4 w-full lg:hidden" />
    <div class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
   
            <div>
                
                <div className="h-8 w-8 p-1 mr-3 rounded-full bg-black"></div>
               
              </div>
              <button type="button" class="  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2  border-[black] focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </button>


              
            </div>
   
  </nav>
      </header>
        </>
    );
};

export default Navbar;