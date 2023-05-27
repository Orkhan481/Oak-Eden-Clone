import React from 'react'
import {FaInstagram, FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-[807px] flex flex-col justify-between pt-6 bg-footer-pattern bg-cover'>
      <div className='flex px-[77px] py-[72px] rounded-t-3xl bg-golden  mx-8'>

        {/* LEFT */}
        <div className='w-[50%] flex flex-col gap-6'>
        <h2 className='text-[30px] leading-[30px] mb-8'>GET UPDATES & <br />
STAY CONNECTED</h2>
        <div className='w-[50%] h-12 relative flex items-center justify-center border-b-[1px] border-custom-black mb-6'>
            <input className='bg-transparent outline-none w-[90%]' type="text" name="" id="" placeholder='YOUR EMAIL' required/>
            <button className='absolute top-1/2 -translate-y-1/2 right-2'>JOIN</button>
        </div>

        <div className='flex gap-8'>
       <FaInstagram className='cursor-pointer text-custom-black' size={24}/>
       <FaFacebook className='cursor-pointer text-custom-black' size={24}/>
        </div>
        </div>

        {/* RIGHT */}
        <div className='w-[50%] flex gap-20'>
               <nav>
                <ul className='flex flex-col gap-6'>
                    <li className='font-semibold cursor-pointer text-lg tracking-wider'>Shop all</li>
                    <li className='font-semibold cursor-pointer text-lg tracking-wider'>Our story</li>
                    <li className='font-semibold cursor-pointer text-lg tracking-wider'>Journal</li>
                    <li className='font-semibold cursor-pointer text-lg tracking-wider'>Find us</li>
                </ul>
               </nav>

               <nav>
               <ul className='flex flex-col gap-6'>
                    <li className='font-semibold cursor-pointer text-lg tracking-wider'>Contact</li>
                    <li className='font-semibold cursor-pointer text-lg tracking-wider'>Collaborations</li>
                    <li className='font-semibold cursor-pointer text-lg tracking-wider'>Media Inquiries</li>
                    <li className='font-semibold cursor-pointer text-lg tracking-wider'>Press</li>
                    <li className='font-semibold cursor-pointer text-lg tracking-wider'>FAQ</li>
                </ul>
               </nav>
        </div>
      </div>

      <div className='flex w-full  justify-between text-dark-golden tracking-widest px-10 pb-4'>
       <div className='flex flex-col gap-3'>
       <div>Terms & Conditions | Privacy Policy | Intellectual Property</div>
        <div>COPYRIGHT © 2022 OAK & EDEN. ALL RIGHTS RESERVED.</div>
       </div>


       <div>
        <img src="https://cdn.shopify.com/s/files/1/0625/3215/7671/files/SS-2021-Logos-Secondary_black_on_white_1_100x.png?v=1644363425" alt="" />
       </div>
      </div>
    </div>
  )
}

export default Footer
