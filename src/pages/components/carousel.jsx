import React from "react";
import Slider from "react-slick";
import Crsl1  from "../../assets/images/carousel1.jpg"
import Crsl2  from "../../assets/images/carousel2.jpg"
import Crsl3  from "../../assets/images/carousel3.webp"






function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="Relative">
         <img src={Crsl1} alt="" />
         <div className="absolute">
            <h6>Women Collection 2018</h6>
            <h1>NEW ARRIVALS</h1>
            <button>SHOP NOW</button>
         </div>
        </div>
        <div>
        <img src={Crsl2} alt="" />
        </div>
        <div>
        <img src={Crsl3} alt="" />
        </div>
       
      </Slider>
    </div>
  );
}

export default Carousel;
