
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png.webp"
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();
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
                
                <div onClick={() => {navigate("/profile")}} className="h-8 w-8 p-1 mr-3 rounded-full bg-black"></div>
               
              </div>
              <button  type="button" class="  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2   focus:ring-white focus:ring-offset-2 ">
              <svg   onClick={() => {navigate("/panier")}} class="h-8 w-8 text-gray-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
              </button>


              
            </div>
   
  </nav>
      </header>
        </>
    );
};

export default Navbar;