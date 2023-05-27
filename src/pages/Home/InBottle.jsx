import React from 'react'
import {GoStar} from 'react-icons/go'

const InBottle = () => {
  return (
    <div className=' min-h-[90vh] w-full py-[100px] px-8 bg-custom-black flex relative group'>
      <div className='w-[50%] relative'>
                  <img className='w-[12.55vw] absolute top-[-25px] left-0 right-0 mx-auto group-hover:rotate-[-15deg] transition-transform duration-700' src="https://cdn.shopify.com/s/files/1/0625/3215/7671/files/Spire_400x.png?v=1651682883" alt="" />
                   <img className='w-[258px] mx-auto my-0 block' src="https://cdn.shopify.com/s/files/1/0625/3215/7671/files/Spire-Backdrop_33e62f0e-b9a9-4b3a-99c2-ce4d38539e2b_400x.png?v=1651683782" alt="" />
         <div className='w-full flex flex-col items-center justify-center text-dark-golden'
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="700"
         >
          <h4 className='text-[28px]'>In-Bottle Finishing</h4>
          <p><GoStar size={24}/></p>
         </div>
      </div>
      <div className=''>
        <span className='w-[3px] h-[72px]  bg-dark-golden absolute left-1/2 top-0 translate-x-1/2'></span>
        <span className='w-[3px] h-[72px] bg-dark-golden absolute left-1/2 bottom-0 translate-x-1/2'></span>
      </div>

      <div className='w-[50%] flex justify-center items-center text-dark-golden'>
       <div className='w-[60%] flex justify-around items-center flex-col'>
       <div className='w-full flex justify-center items-center gap-2  text-center' >
        <p className='text-lg'>The</p>
          <span className='h-[2px] group-hover:w-[250px] w-0  transition-all duration-[1.4s] bg-dark-golden'></span>
                  <p className='text-lg'>Spire</p>
        </div>
        <p className='text-[60px] leading-[60px] mt-5 mb-9 text-center'
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
        AGED in TRADITION. STEEPED in INNOVATION.
        </p>
        <p className='tracking-[.05rem]'
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >At Oak & Eden, we place a 5” long spiral cut piece of wood into every bottle of our fully aged whiskey.</p>
        
        <div className="max-w-[220px] group bg-transparent  hover:bg-golden transition-all ease-linear duration-300 p-[2px] mt-12"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <button className="h-10 text-sm text-golden bg-custom-black px-[37px]  font-bold tracking-widest uppercase border-[1px] border-custom-black group-hover:bg-golden group-hover:text-custom-black transition-all ease-linear duration-300 cursor-pointer">
            Learn more
          </button>
        </div>

       </div>
      </div>
    </div>
  )
}

export default InBottle
