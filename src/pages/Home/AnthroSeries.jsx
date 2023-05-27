import React, { Component } from 'react'
import SliderText from '../../components/SliderText'
import Slider from "react-slick";
import {GoStar} from 'react-icons/go'

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{ ...style,display:"flex" ,alignItems:'center' ,justifyContent: "center" , position: "absolute", top: "50%",transform : "translate-y-50%" ,right: "-60px" ,width: "50px",height: "50px",text:"center", borderRadius:"50%" ,  background: "#e4ddcd", cursor:"pointer" }}
      onClick={onClick}
    >Next</div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
    
      style={{ ...style,display:"flex" ,alignItems:'center' ,justifyContent: "center" , position: "absolute", top: "50%",transform : "translate-y-50%" ,left: "-60px" ,width: "50px",height: "50px",text:"center", borderRadius:"50%" ,  background: "#e4ddcd", cursor:"pointer"}}
      onClick={onClick}
    >Prev</div>
  );
}

export default class AnthroSeries  extends Component {


      state = {
        activeSlide: 0,
        activeSlide2: 1,
      };
  
    render() {  
        let info  = [
        {
          text : "Anthro Series -"
        },
        {
            text : "Anthro Series -"
        },
        {
            text : "Anthro Series -"
        },
        {
            text : "Anthro Series -"
        },
        {
            text : "Anthro Series -"
        },
    ]
    const settings = {
        infinite: true,
        speed: 0,
        autoplaySpeed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current, next) => this.setState({ activeSlide: next }),
        afterChange: current => this.setState({ activeSlide2: current })
      }
   
    
  return (
    <div className='min-h-[100vh] w-full bg-custom-red relative'>
       <span className='h-[120px] w-[2px] bg-custom-black absolute -top-[60px] left-[50%] translate-y-[1/2]'></span>
       <span className='h-[120px] w-[2px] bg-custom-black absolute -bottom-[60px] left-[50%] translate-y-[1/2]'></span>

       <div>
        <SliderText info={info} rtl={true}/> 

        <div className="w-full flex items-center justify-center" >
            


              
          <div className='w-[80%] pt-[200px]'>
            <Slider {...settings}>
        
          <div className='h-full w-full !flex'>
                 <img className='w-[49%] px-[5%] mt-[2%]' src="https://cdn.shopify.com/s/files/1/0625/3215/7671/files/1_5a43d493-0ea9-4896-a5c4-c95918aaaebf_1000x.png?v=1651714410" alt="" />

                <div className='w-[49%] flex items-center justify-center'>
                <div className='w-[60%] flex flex-col items-center gap-4'> 
                    <h3 className='text-[28px]'>JOHN PAUL WHITE</h3>
                    <GoStar size={32}/>
                    <p className='text-[18px] text-center'>Four time Grammy Award winner and half of Americana duet, The Civil Wars, John Paul White stepped up to crafting his own bourbon</p>

                 
<div className="max-w-[175px] group bg-transparent  hover:bg-golden transition-all ease-linear duration-300 p-[2px] mt-5">
<button className="h-10 text-sm text-golden bg-custom-black px-[37px]  font-bold tracking-widest uppercase border-[1px] border-custom-black group-hover:bg-golden group-hover:text-custom-black transition-all ease-linear duration-300 cursor-pointer">
 Shop now
</button>

         </div>
                 </div>

                </div>
                 
               
          </div>

          <div className='h-full w-full !flex'>
                 <img className='w-[49%] px-[5%] mt-[2%]' src="https://cdn.shopify.com/s/files/1/0625/3215/7671/files/1_6b24d996-b328-4092-99db-90091c6249f6_1000x.png?v=1651713096" alt="" />

                <div className='w-[49%] flex items-center justify-center'>
                <div className='w-[60%] flex flex-col items-center gap-4'> 
                    <h3 className='text-[28px]'>JFORRIE J. SMITH</h3>
                    <GoStar size={32}/>
                    <p className='text-[18px] text-center'>The seasoned cowboy and legacy Hollywood stuntman created his very own coffee-infused bourbon.</p>

                 
<div className="max-w-[175px] group bg-transparent  hover:bg-golden transition-all ease-linear duration-300 p-[2px] mt-5">
<button className="h-10 text-sm text-golden bg-custom-black px-[37px]  font-bold tracking-widest uppercase border-[1px] border-custom-black group-hover:bg-golden group-hover:text-custom-black transition-all ease-linear duration-300 cursor-pointer">
 Shop now
</button>

         </div>
                 </div>

                </div>
                 
               
          </div>

          <div className='h-full w-full !flex'>
                 <img className='w-[49%] px-[5%] mt-[2%]' src="https://cdn.shopify.com/s/files/1/0625/3215/7671/files/1_acd98535-7964-426c-9dfc-888db9e56693_1000x.png?v=1651714045" alt="" />

                <div className='w-[49%] flex items-center justify-center'>
                <div className='w-[60%] flex flex-col items-center gap-4'> 
                    <h3 className='text-[28px]'>JAMESTOWN REVIVAL</h3>
                    <GoStar size={32}/>
                    <p className='text-[18px] text-center'>Americana duet produces a barrel proof rye whiskey inspired by their hit song "Round Prairie Road"</p>

                 
<div className="max-w-[175px] group bg-transparent  hover:bg-golden transition-all ease-linear duration-300 p-[2px] mt-5">
<button className="h-10 text-sm text-golden bg-custom-black px-[37px]  font-bold tracking-widest uppercase border-[1px] border-custom-black group-hover:bg-golden group-hover:text-custom-black transition-all ease-linear duration-300 cursor-pointer">
 Shop now
</button>

         </div>
                 </div>

                </div>
                 
               
          </div>

         

         

       
         
         
        
       </Slider></div>
          
{/*         
            <div style={{ textAlign: "center" }}>
                   <button className="w-20 h-20 rounded-full bg-dark-golden absolute left-2 top-[50%] translate-y-[50%]"  onClick={this.previous}>
                     Previous
                   </button>
                   <button className="w-20 h-20 rounded-full bg-dark-golden absolute left-2 top-[50%] translate-y-[50%]" onClick={this.next}>
                     Next
                   </button>
                 </div>  */}
                
            </div>
       </div>
    </div>
  ) 
};
}

