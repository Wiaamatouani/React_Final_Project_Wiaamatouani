import React from 'react';
import Contact from "../../assets/images/contact.png"
const contact = () => {
    return (
        <div>  
              <div>
        <img src={Contact} alt="" />
    </div>
        <div className='flex flex-row justify-around p-12'>
            <iframe className='w-[600px] h-[600px] p-10 ml-8' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6950177.510377394!2d-7.082050000000001!3d31.792299999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sfr!2sma!4v1715947932571!5m2!1sfr!2sma"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           <form action="" className="flex flex-col gap-y-5 p-6 w-[40vw] mr-8 ">
          <label htmlFor="" className="text-3xl">
            Send us your message
          </label>
          <input
            type="text"
            placeholder="Name"
            className="px-10 py-4 font-light border border-gray-300"
          />
          <input
            type="text"
            placeholder="Email"
            className="px-10 font-light py-4 border border-gray-300"
          />
          <input
            type="text"
            placeholder="Phone"
            className="px-10 py-4 font-light border border-gray-300"
          />
          <textarea
            placeholder="Message"
            className="px-10 py-4 font-light border border-gray-300"
          />
          <button className="w-[12vw] bg-black text-white px-4 py-3 rounded-full">
            SEND
          </button>
        </form>

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

export default contact;
