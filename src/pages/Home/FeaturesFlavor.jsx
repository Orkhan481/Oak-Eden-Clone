import React, { Component } from "react";
import {GoStar} from 'react-icons/go'

import Slider from "react-slick";

import TextSlider from '../../components/TextSlider'


export default class CenterMode extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }

      state = {
        activeSlide: 0,
        activeSlide2: 1,
      };
    
  render() {
   
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "385px",
      slidesToShow: 1,
      speed: 500,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current })
    };
    return (
        <div className="pt-[108px] pb-[230px] bg-page-golden">
                 <h2 className="w-full flex gap-2 items-center justify-center">FEATURED <GoStar  size={20}/> FLAVORS</h2>
                 <div className="relative pt-8" >
                   {/* TEXT SLIDER */}
              <TextSlider className="inset-0"/>


              
            <div className="!z-99">
            <Slider className="!z-40" ref={c => (this.slider = c)} {...settings}>
        
        <div key={1} className="relative ">
          <img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0625/3215/7671/products/image-2_1000x.png?v=1653601726" alt="" 
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="300"
          />
         { this.state.activeSlide === 0 && (
          <div className="max-w-[250px] absolute right-[-120px] top-[50%] translate-y-[50%] "
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="700">
          <h1 className="text-[28px] mb-3">WHEAT & HONEY</h1>
          <p>Wheated Bourbon finished with a honey soaked American Oak spire.</p>
          <div className="max-w-[175px] group bg-transparent  hover:bg-golden transition-all ease-linear duration-300 p-[2px] mt-5">
<button className="h-10 text-sm text-golden bg-custom-black px-[37px]  font-bold tracking-widest uppercase border-[1px] border-custom-black group-hover:bg-golden group-hover:text-custom-black transition-all ease-linear duration-300 cursor-pointer">
 Shop now
</button>
</div>
         </div> )}
        
          
         </div>

         <div key={2} className="relative">
         <img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0625/3215/7671/products/1-min_1000x.png?v=1652733683" alt="" 
         data-aos="zoom-in"
         data-aos-easing="linear"
         data-aos-duration="300"
         />
         { this.state.activeSlide === 1 && (
          <div  className="max-w-[300px] absolute right-[-120px] top-[50%] translate-y-[50%]" 
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="700">
          <h1 className="text-[28px] mb-3">BOURBON & SPIRE</h1>
          <p>
Bourbon finished with a toasted American Oak spire.</p>
<div className="max-w-[175px] group bg-transparent  hover:bg-golden transition-all ease-linear duration-300 p-[2px] mt-5">
<button className="h-10 text-sm text-golden bg-custom-black px-[37px]  font-bold tracking-widest uppercase border-[1px] border-custom-black group-hover:bg-golden group-hover:text-custom-black transition-all ease-linear duration-300 cursor-pointer">
 Shop now
</button>
</div>
         </div> )}
       
         </div>
         <div key={3} className="relative">
         <img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0625/3215/7671/products/image-3_1000x.png?v=1653601786" alt="" 
         data-aos="zoom-in"
         data-aos-easing="linear"
         data-aos-duration="300"
         />
         { this.state.activeSlide2 === 2 && (
          <div className="max-w-[250px] absolute right-[-120px] top-[50%] translate-y-[50%]"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="700">
          <h1 className="text-[28px] mb-3">WHEAT & SPIRE
</h1>
          <p>
Wheated Bourbon finished with a toasted French Oak spire.</p>
<div className="max-w-[175px] group bg-transparent  hover:bg-golden transition-all ease-linear duration-300 p-[2px] mt-5">
<button className="h-10 text-sm text-golden bg-custom-black px-[37px]  font-bold tracking-widest uppercase border-[1px] border-custom-black group-hover:bg-golden group-hover:text-custom-black transition-all ease-linear duration-300 cursor-pointer">
 Shop now
</button>
</div>
         </div> )}
         </div>
         <div key={4} className="relative">
         <img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0625/3215/7671/products/image-2_1000x.png?v=1653601726" alt="" 
         data-aos="zoom-in"
         data-aos-easing="linear"
         data-aos-duration="300"
         />
         { this.state.activeSlide2 === 3 && (
          <div className="max-w-[250px] absolute right-[-120px] top-[50%] translate-y-[50%]"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="700">
          <h1 className="text-[28px] mb-3">4 GRAIN & SPIRE</h1>
          <p>
4 Grain bourbon finished with a torched American Oak spire.</p>
<div className="max-w-[175px] group bg-transparent  hover:bg-golden transition-all ease-linear duration-300 p-[2px] mt-5">
<button className="h-10 text-sm text-golden bg-custom-black px-[37px]  font-bold tracking-widest uppercase border-[1px] border-custom-black group-hover:bg-golden group-hover:text-custom-black transition-all ease-linear duration-300 cursor-pointer">
 Shop now
</button>
</div>
         </div> )}
         </div>
         <div key={5} className="relative">
         <img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0625/3215/7671/products/image-3_b7f88e55-7b79-4658-8f0a-fe4d6816c702_1000x.png?v=1653602105" alt="" 
         data-aos="zoom-in"
         data-aos-easing="linear"
         data-aos-duration="300"
         />
         { this.state.activeSlide2 === 4 && (
          <div  className="max-w-[250px] absolute right-[-120px] top-[50%] translate-y-[50%]"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="700">
          <h1 className="text-[28px] mb-3">WHEAT & HONEY</h1>
          <p>Wheated Bourbon finished with a honey soaked American Oak spire.</p>
          <div className="max-w-[175px] group bg-transparent  hover:bg-golden transition-all ease-linear duration-300 p-[2px] mt-5">
<button className="h-10 text-sm text-golden bg-custom-black px-[37px]  font-bold tracking-widest uppercase border-[1px] border-custom-black group-hover:bg-golden group-hover:text-custom-black transition-all ease-linear duration-300 cursor-pointer">
 Shop now
</button>
</div>
         </div> )}
         </div>
         <div key={6} className="relative">
         
         <img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0625/3215/7671/products/1-min_1000x.png?v=1652733683" alt="" 
         data-aos="zoom-in"
         data-aos-easing="linear"
         data-aos-duration="300"
         />
         { this.state.activeSlide2 === 5 && (
          <div className="max-w-[300px] absolute right-[-120px] top-[50%] translate-y-[50%]"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="700">
          <h1 className="text-[28px] mb-3">BOURBON & SPIRE</h1>
          <p>
Bourbon finished with a toasted American Oak spire.</p>
<div className="max-w-[175px] group bg-transparent  hover:bg-golden transition-all ease-linear duration-300 p-[2px] mt-5">
<button className="h-10 text-sm text-golden bg-custom-black px-[37px]  font-bold tracking-widest uppercase border-[1px] border-custom-black group-hover:bg-golden group-hover:text-custom-black transition-all ease-linear duration-300 cursor-pointer">
 Shop now
</button>
</div>
         </div> )}
        </div>
       </Slider>
            </div>
        
                 <div style={{ textAlign: "center" }}>
                   <button className="w-20 h-20 rounded-full bg-dark-golden absolute left-2 top-[50%] translate-y-[50%]" onClick={this.previous}>
                     Previous
                   </button>
                   <button className="w-20 h-20 rounded-full bg-dark-golden absolute right-2 top-[50%] translate-y-[50%]" onClick={this.next}>
                     Next
                   </button>
                 </div> 
                
            </div>

           
              </div>
    );
  }
}