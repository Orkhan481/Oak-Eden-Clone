import React from "react";
import Slider from "react-slick";

export default function AutoPlay ({info, rtl}) {

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 0,
      cssEase: "linear",
      rtl:{rtl}
    }
  
    return (
      <div className="w-full h-auto absolute top-40 left-0">
     
        <Slider {...settings}>
        {info.map((i)=>(   <div className="w-[100vw] flex justify-center items-center">
           
                <h3 className="text-[55px] opacity-50">{i.text}</h3>
          
          </div>
             ))}
        </Slider>
  
      
     
      </div>
    );
  }
