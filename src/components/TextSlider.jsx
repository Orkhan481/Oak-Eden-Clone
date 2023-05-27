import React from "react";
import Slider from "react-slick";

export default function AutoPlay ({text}) {

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
  speed: 3000,
  autoplaySpeed: 0,
      cssEase: "linear",
      rtl: true
    }
    const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
  speed: 3000,
  autoplaySpeed: 0,
        cssEase: "linear",
        rtl:false
      }
    return (
      <div className="w-full h-auto absolute top-40 left-0 text-slider ">
     
        <Slider {...settings}>
          <div>
            <h3 className="text-[55px] opacity-50 text-slider">WHEAT & HONEY</h3>
          </div>
          <div>
            <h3 className="text-[55px] opacity-50">BOURBON & SPIRE</h3>
          </div>
          <div>
            <h3 className="text-[55px] opacity-50">WHEAT & SPIRE</h3>
          </div>
          <div>
            <h3 className="text-[55px] opacity-50">4 GRAIN & SPIRE</h3>
          </div>
          <div>
            <h3 className="text-[55px] opacity-50">WHEAT & HONEY</h3>
          </div>
          <div>
            <h3 className="text-[55px] opacity-50">BOURBON & SPIRE</h3>
          </div>
        </Slider>
  
      
       <Slider {...settings2}>
       <div>
            <h3 className="text-[55px] opacity-50 text-slider">WHEAT & HONEY</h3>
          </div>
          <div>
            <h3 className="text-[55px] opacity-50">BOURBON & SPIRE</h3>
          </div>
          <div>
            <h3 className="text-[55px] opacity-50">WHEAT & SPIRE</h3>
          </div>
          <div>
            <h3 className="text-[55px] opacity-50">4 GRAIN & SPIRE</h3>
          </div>
          <div>
            <h3 className="text-[55px] opacity-50">WHEAT & HONEY</h3>
          </div>
          <div>
            <h3 className="text-[55px] opacity-50">BOURBON & SPIRE</h3>
          </div>
       </Slider>

      </div>
    );
  }
