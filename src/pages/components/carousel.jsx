import React from "react";
import Slider from "react-slick";
import Crsl1  from "../../assets/images/carousel1.jpg"
import Crsl2  from "../../assets/images/carousel2.jpg"
import Crsl3  from "../../assets/images/carousel3.webp"


import { useNavigate } from 'react-router-dom';




function Carousel() {
  let navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div className="relative">
         <img className="h-[80vh]" src={Crsl1} alt="" />
         <div className="absolute   p-20 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className=" font-light text-2xl p-2 text-white ">Women Collection 2018</h1>
          <h1 className=" text-7xl text-white p-3 font-bold ">NEW ARRIVALS</h1>
          <button onClick={() => {navigate("/shop")}} className=" rounded-full  mt-5 bg-white p-3 px-11 py-3 font-medium hover:text-purple-500 text-black">SHOP NOW</button>
         </div>
         
        </div>
        <div className="relative">
        <img className="h-[80vh]" src={Crsl2} alt="" />
        <div className="absolute   p-20 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className=" font-light text-2xl p-2 text-white ">Women Collection 2018</h1>
          <h1 className=" text-7xl text-white p-3 font-bold ">NEW ARRIVALS</h1>
          <button onClick={() => {navigate("/shop")}} className=" rounded-full  mt-5 bg-white p-3 px-11 py-3 font-medium hover:text-purple-500 text-black">SHOP NOW</button>
         </div>
        </div>
        <div className="relative">
        <img className="h-[80vh]" src={Crsl3} alt="" />
        <div className="absolute   p-20 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className=" font-light text-2xl p-2 text-white ">Women Collection 2018</h1>
          <h1 className=" text-7xl text-white p-3 font-bold ">NEW ARRIVALS</h1>
          <button  onClick={() => {navigate("/shop")}} className=" rounded-full  mt-5 bg-white p-3 px-11 py-3 font-medium hover:text-purple-500 text-black">SHOP NOW
            
          </button>
         </div>
        </div>
       
      </Slider>
    </div>
  );
}

export default Carousel;
