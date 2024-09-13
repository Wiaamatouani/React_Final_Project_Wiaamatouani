
import Model from "../assets/images/banner-08.jpg";
import Carousel from "./components/carousel";
import Robe from "../assets/images/robe.jpg"
import Watch from "../assets/images/watch.webp"
import Bags from "../assets/images/bags.jpg"
import Lunette from "../assets/images/lunette.webp"
import Convrs from "../assets/images/convrs.jpg"
import Assecoires from "../assets/images/access.webp"
import ndader from "../assets/images/ndader.webp";
import Slider from "react-slick";
import React from "react";
import data from "../json/products.json"
import image from "../constant/image";
import { GrFormPrevious } from 'react-icons/gr';
import { MdOutlineNavigateNext } from 'react-icons/md';





function Home() {
 
  const sliderRef2 = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
  };

  const handleNext = (sliderRef) => {
    sliderRef.current.slickNext();
  };

  const handlePrev = (sliderRef) => {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      <Carousel />
      <section>
    <div className='flex  p-9 justify-center justify-items-center gap-5'>
    <div className='flex flex-col gap-5'>
   <div className='w-[25vw] relative overflow-hidden'>
    <img src={Robe} alt="" className=' w-[100%] h-[100%] hover:scale-110 duration-50' />
   <button className='bg-white font-light py-2 px-10 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white'>DRESSES</button></div>
  <div className='relative w-[25vw] h-[40vh] overflow-hidden'> 
    
<img src={Lunette} alt="" className='w-[100%] h-[100%]  hover:scale-110 duration-50 ' />
   <button className='bg-white py-2 px-10 font-light text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white'>SUNGLASSES</button>
   </div>
    </div>
    <div className='flex flex-col gap-5'>
   <div  className='relative overflow-hidden'>
    <img src={Watch} alt=""className='w-[25vw] h-[40vh] hover:scale-110 duration-50' />
    <button className='bg-white font-light py-2 px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white '>WATCHES</button>
    </div>
   <div className='w-[25vw] relative overflow-hidden'>
    <img src={Convrs} alt=""  className='hover:scale-110 duration-50'/>
    <button className='bg-white font-light py-2  px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white '>FOOTERWEAR</button>
    </div>
    </div>
    <div className='flex flex-col gap-5'>
   <div className='w-[25vw] relative overflow-hidden'>
    <img src={Bags} alt="" className='hover:scale-110 duration-50' />
    <button className='bg-white py-2 font-light px-8 text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white'>BAGS</button>
    </div>
   <div className='relative overflow-hidden' >
    <img src={Assecoires} alt="" className='w-[25vw] h-[40vh] hover:scale-110 ' />
    <button className='bg-white py-2 px-8 font-light text-xl shadow-xl absolute bottom-3 left-[50%] translate-x-[-50%]  hover:bg-[#e65540] hover:text-white'>ASSECOIRES</button>
    </div>
    </div>
  
  </div>
</section>
<div className="relative w-full mb-5">
                <Slider ref={sliderRef2} className="overflow-hidden " {...settings}>
                    {/* Slide 1 - Produits */}
                    <div className="relative flex w-[100vw] h-[80vh] items-center   ">
                        <div className='flex  w-[100%] items-center justify-center gap-5'>
                            {data.slice(0, 4).map((item) => (
                                <div key={item.id} className="text-start  flex flex-col  ">
                                    <div className="relative group">
                                        <img src={image[item.img]} alt={item.name} className="w-[21vw]" />
                                        <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-50 transition-opacity duration-600"></div>
                                        <button
                                            className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-3 py-2
                                             rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-600 text-lg hover:bg-red-500 ">
                                            ADD TO CART
                                        </button>
                                    </div>
                                    <p className="text-black  font-light pt-6 text-lg opacity-70">{item.name}</p>
                                    <p className="text-black  font-light text-lg opacity-70 ">{item.price}</p>
                                    
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Slide 2 - Produits */}
                    <div className="relative w-full h-[80vh] items-center ">
                        <div className='flex  w-[100%] items-center justify-center gap-5'>
                            {data.slice(4,8).map((item) => (
                                <div key={item.id} className="text-start  flex flex-col ">
                                   <div className="relative group">
                                        <img src={image[item.img]} alt={item.title} className="w-[21vw]" />
                                        <div className="absolute inset-0 bg-black opacity-5 group-hover:opacity-50 transition-opacity duration-600"></div>
                                        <button
                                            className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-3 py-2
                                             rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-600 text-lg hover:bg-red-500 ">
                                            ADD TO CART
                                        </button>
                                    </div>
                                    <p className="text-black pt-6 text-lg opacity-70">{item.name}</p>
                                    <p className="text-black text-lg opacity-70">{item.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Slider>

       {/* Next  Prev buttons  */}
      <button 
        onClick={() => handlePrev(sliderRef2)} 
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-black opacity-55 text-3xl ">
        <GrFormPrevious/>
      </button>
      <button 
       onClick={() => handleNext(sliderRef2)} 
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-black opacity-55 text-3xl  ">
        <MdOutlineNavigateNext />
      </button>
    </div>

      <div className="bg-[#f2f2f2] h-[70vh] mt-10 flex items-center justify-around">
        <div className=" relative w-[75vh] overflow-hidden">
          <img className=" w-[100%] h-[100%] hover:scale-110 duration-500" src={Model} alt="" />
          <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center'>
                            <p className='text-white text-[30px] font-semibold '>The Beauty</p>
                            <p className='text-white text-[50px] font-bold'>LOOKBOOK</p>
                            <p className='text-white hover:underline cursor-pointer'>VIEW COLLECTION</p>
                        </div>
        </div>
        <div className="w-[75vh] relative overflow-hidden">
          <img className="w-[100%] h-[100%] hover:scale-110 duration-500" src={ndader} alt="" />
          <div className=' absolute text-center top-[55%] left-[20%] flex flex-col justify-center items-center pt-4'>
                            <p className='text-[#555] pb-2 text-[18px] font-light '>Boxy2 T-Shirt with Roll Sleeve</p>
                            <p className='text-[#555] pb-2 font-light text-[18px] '>$20.00</p>
                            <div className='flex gap-4 pb-4 px-10'>
                                <div className='flex flex-col justify-center items-center border-[1px] border-gray-400 p-2'>
                                    <p className='text-[#555] text-[18px] '>-2082</p>
                                    <p className='text-[#999]'>days</p>
                                </div>
                                <div className='flex flex-col justify-center items-center border-[1px] border-gray-400 p-2'>
                                    <p className='text-[#555] text-[18px] '>-20</p>
                                    <p className='text-[#999]'>hrs</p>
                                </div>
                                <div className='flex flex-col justify-center items-center border-[1px] border-gray-400 p-2'>
                                    <p className='text-[#555] text-[18px] '>-53</p>
                                    <p className='text-[#999]'>mins</p>
                                </div>
                                <div className='flex flex-col justify-center items-center border-[1px] border-gray-400 p-2'>
                                    <p className='text-[#555] text-[18px] '>-41</p>
                                    <p className='text-[#999]'>secs</p>
                                </div>
                            </div>
                        </div>
        </div>
       
      </div>
      
      <section >
    <h2 className="text-2xl md:text-3xl font-bold m-10 text-center ">
     OUR BLOG
      </h2>
  <div class="flex items-center justify-center gap-8">
  
  <div class="group cursor overflow-hidden w-[28vw] h-[70vh]  ">
    <div >
      <img src={image.Blog1} className='transform transition-transform duration-500 hover:scale-110 w-full h-[40vh] mb-3 overflow-hidden' />
    </div>
    <div class="flex-1 overflow-hidden bg-white ">
      <h1 className=' font-semibold hover:text-[#e65540] mb-3'>Black Friday Guide: Best Sales & Discount Codes</h1>
      <p class=" text-gray-600 font-light mb-3">by fashe-theme Admin on Dec 28,2017</p>
      <p class=" text-gray-600 font-light ">Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
     
      </div>
    </div>
    <div class="group cursor overflow-hidden w-[28vw] h-[70vh]  ">
    <div >
      <img src={image.Blog2} className='transform transition-transform duration-500 hover:scale-110 w-full h-[40vh] mb-3 overflow-hidden' />
    </div>
    <div class="flex-1 overflow-hidden bg-white ">
      <h1 className='font-semibold hover:text-[#e65540] mb-3'>The White Sneakers Nearly Every Fashion Girls Own</h1>
      <p class=" text-gray-600 font-light mb-3">by fashe-theme Admin on Dec 28,2017</p>
      <p class=" text-gray-600 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
     
      </div>
    </div>
    <div class="group cursor overflow-hidden w-[28vw]  h-[70vh] ">
    <div  className="overflow-hidden">
      <img src={image.Blog3} className='transform transition-transform duration-500 hover:scale-110 w-full h-[40vh] mb-3 overflow-hidden' />
    </div>
    <div class="flex-1 overflow-hidden bg-white ">
      <h1 className='font-semibold  hover:text-[#e65540] mb-3'>New York SS 2018 Street Style: By Annina Mislin</h1>
      <p class=" text-gray-600 font-light mb-3">by fashe-theme Admin on Dec 28,2017</p>
      <p class=" text-gray-600 font-light">Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
     
      </div>
    </div>
  </div>
  </section>
     
      <section className='pt-20'>
                <p className='text-center text-[30px] text-[#222222] font-bold'>@ FOLLOW US ON INSTAGRAM</p>
                <div className='flex  items-center justify-center text-center px-20 py-28'>
                    <div className=' pr-[5vw] pl-[5vw] py-5 '>
                        <p className='text-[18px] text-[#555] '>Free Delivery Worldwide</p>
                        <p className='font-light text-base text-[#888] '>Mirum est notare quam littera gothica</p>
                    </div>
                    <div className='border-r-[1px] border-l-[1px] border-gray-400 pr-[5vw] pl-[5vw] py-5 '>
                        <p className='text-[18px] text-[#555] '>30 Days Return</p>
                        <p className='font-light text-base text-[#888]'>Simply return it within 30 days for an exchange.</p>
                    </div>
                    <div className='pl-[5vw] pr-[5vw] '>
                        <p className='text-[18px] text-[#555] '>Store Opening</p>
                        <p className='font-light text-base text-[#888]'>Shop open from Monday to Sunday</p>
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
    </>
  );
}

export default Home;






