import React from 'react'
import {GoStar} from 'react-icons/go'

const ShopWheatHoney = () => {
  return (
    <div className='flex'>
      <div className='w-[33%]'>
        <img src="https://cdn.shopify.com/s/files/1/0625/3215/7671/files/Infused-Feature-1_800x.jpg?v=1664421531" alt="" />
      </div>
      <div className='w-[33%] flex  gap-6 flex-col items-center justify-center px-4 text-custom-black'>
         <GoStar size={32} />
 
              <p  
               className="text-center text-[26px]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="300"
              >WHEATED BOURBON MEETS AMERICAN HONEY. AVAILABLE FOR A LIMITED TIME ONLY.</p>
  <GoStar size={32}/>
              <div
          className="group bg-transparent  hover:bg-golden transition-all ease-linear duration-300 p-[2px]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="300"
        >
          <button className="h-14 text-sm text-golden bg-custom-black px-[37px]  font-bold tracking-widest uppercase border-[1px] border-custom-black group-hover:bg-golden group-hover:text-custom-black transition-all ease-linear duration-300 cursor-pointer">
          SHOP WHEAT & HONEY
          </button>
        </div>

       

      </div>
      <div className='w-[33%]'>
        <img src="https://cdn.shopify.com/s/files/1/0625/3215/7671/files/Infused-Feature-2_800x.jpg?v=1664421531" alt="" />
      </div>
    </div>
  )
}

export default ShopWheatHoney
