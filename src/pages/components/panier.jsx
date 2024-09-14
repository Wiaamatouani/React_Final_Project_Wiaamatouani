import React from 'react';
import modal1 from "../../assets/images/modal1.webp"
import modal3 from "../../assets/images/modal3.webp"
import { useNavigate } from 'react-router-dom';

const Panier = () => {
    let navigate = useNavigate();
    return (
        <div>
            
            <section class="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-center">
     
    </div>

    <div class="mx-auto mt-8 max-w-md md:mt-12">
      <div class="rounded-3xl bg-white shadow-lg">
        <div class="px-4 py-6 sm:px-8 sm:py-10">
          <div class="flow-root">
            <ul class="-my-8">
              <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="shrink-0 relative">
                  <span class="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">1</span>
                  <img class="h-24 w-24 max-w-full rounded-lg object-cover" src={modal1} alt="" />
                </div>

                <div class="relative flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">t-shirt</p>
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
                    </div>

                    <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">$1259.00</p>
                    </div>
                  </div>

                  <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button type="button" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class=""></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
              <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="shrink-0 relative">
                  <span class="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">1</span>
                  <img class="h-24 w-24 max-w-full rounded-lg object-cover" src={modal3} alt="" />
                </div>

                <div class="relative flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">t-jacket</p>
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
                    </div>

                    <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">$1259.00</p>
                    </div>
                  </div>

                  <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button type="button" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg class="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class=""></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          

          <div class="mt-6 space-y-3 border-t border-b py-8">
            <div class="flex items-center justify-between">
              <p class="text-gray-400">Subtotal</p>
              <p class="text-lg font-semibold text-gray-900">$2399.00</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-gray-400">Shipping</p>
              <p class="text-lg font-semibold text-gray-900">$8.00</p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total</p>
            <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400">USD</span> 2499.00</p>
          </div>

          <div class="mt-6 text-center">
            <button onClick={() => {navigate("/")}} type="button" class="group inline-flex w-full items-center justify-center rounded-md bg-gray-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
              Place Order

            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
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
                <button className="block rounded-full  mt-5 bg-black px-11 py-3 font-medium text-white hover:bg-[#e4553f] duration-500">
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

export default Panier;