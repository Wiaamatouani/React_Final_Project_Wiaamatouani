import React from 'react';
import About from "../../assets/images/about.jpg.png"
import About2 from "../../assets/images/about_story.webp"
const about = () => {
    return (

        <div >
            <div>
                <img src={About} alt="" />
            </div>
            
            <div className='flex pt-16  w-full  justify-center  py-10 gap-x-10'>
                <div className='w-[25vw] h-[60vh] overflow-hidden '>
                    <img src={About2} className='w-[100%] h-[100%] hover:scale-110 duration-500'  alt="" /></div>
                <div className='flex   flex-col gap-y-5 w-[50vw] '>
                    <h1 className='text-3xl font-light'>Our Story</h1>

                    <p className=' text-[#978897]'>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
                    <p className='ps-7 border-s-2 w-[50vw]  text-[#978897] border-[#e6e6e6]'>
            Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while
            <p className='text-black text-sm p-3 font-light'>- Steve Job’s</p>
            </p>
       
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

export default about;