import React from "react";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineClose } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Header = () => {
  let [modal1, setModal1] = useState(false);
  let [modal2, setModal2] = useState(false);

  if (modal1 === true || modal2 === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }



  return (
    <header className="w-full h-[71px] px-[30px] py-[10px] bg-dark-golden border-b-[1px] border-[#B8ADA0]  text-custom-black fixed z-20 ">
      <div className="flex justify-between items-center">
        <div className="flex ">
          <img
            className="w-[125px] h-[27px] mr-6"
            src="https://cdn.shopify.com/s/files/1/0625/3215/7671/files/logo_f3570b57-45c6-461c-93a3-481899655069_300x.png?v=1644202123"
            alt=""
          />
          <nav className="px-8">
            <ul className="flex gap-12">
              <button
                onClick={() => setModal1(!modal1)}
                className="flex items-center gap-1 font-semibold tracking-widest uppercase mr-6 cursor-pointer"
              >
                OUR WHISKEY
                {modal1 ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </button>
              <button
                onClick={() => setModal2(!modal2)}
                className="flex items-center gap-1 font-semibold tracking-widest uppercase cursor-pointer"
              >
                INSIDE OAK & EDEN
                {modal2 ? <AiFillCaretUp /> : <AiFillCaretDown />}
              </button>
            </ul>
          </nav>
        </div>

        <div className="flex ">
          <nav className="flex items-center gap-6 px-8">
            <ul className="flex items-center gap-16">
              <li className="flex items-center gap-1 font-semibold tracking-widest uppercase cursor-pointer">
                BUY ONLINE
              </li>
              <li className="flex items-center gap-1 font-semibold tracking-widest uppercase cursor-pointer">
                STORE LOCATOR
              </li>

              <div className="group bg-transparent  hover:bg-golden transition-all ease-linear duration-300">
                <button className="h-10 text-sm text-golden bg-custom-black px-[37px] text-center font-bold tracking-widest uppercase border-[1px] border-custom-black group-hover:bg-golden group-hover:text-custom-black transition-all ease-linear duration-300 m-1 cursor-pointer">
                  build a bottle
                </button>
              </div>
            </ul>
            <SlBasket size={32} className="cursor-pointer" />
          </nav>
        </div>
      </div>

      {/* Modal 1 */}
      {modal1 && (
        <div
          className="w-full flex justify-between z-10 absolute top-full left-0"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="300"
        >
          <img
            className="max-w-[720px] max-h-[720px]"
            src="https://cdn.shopify.com/s/files/1/0625/3215/7671/collections/inspired-min_a027ae5e-c151-48a6-94c3-0f97ae4010df_1000x.png?v=1656043762"
            alt=""
          />

          <div className="pl-[90px] pr-[60px] py-[50px] flex-1 bg-custom-orange relative">
            <h2 className="text-[17px] mb-6 tracking-[.15rem]">OUR WHISKEY</h2>

         
           <p className="text-[45px] tracking-[.2rem] mb-4">
              FINISHED WHISKEYS
            </p>

            <p className="text-[45px] mb-4 tracking-[.2rem]">
              INFUSED WHISKEYS
            </p>

            <p className="text-[45px] mb-4 tracking-[.2rem]">COLLABORATIONS</p>

            <p className="text-[45px] mb-4 tracking-[.2rem]">SHOP ALL</p>

            <button
              onClick={() => setModal1(!modal1)}
              className="absolute right-5 top-5 bg-transparent"
            >
              <AiOutlineClose size={24} />
            </button>
          </div>
        </div>
      )}
      {/* Modal 2 */}
      {modal2 && (
        <div
          className="w-full flex justify-between z-10 absolute top-full left-0"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="300"
        >
        <div className="w-[50%] flex items-center justify-center bg-dark-golden">
        <img
            className="max-w-[720px] max-h-[720px]"
            src="https://cdn.shopify.com/s/files/1/0625/3215/7671/files/6_1000x.jpg?v=1656041965"
            alt=""
          />
        </div>

          <div className="pl-[90px] pr-[60px] py-[50px] flex-1 bg-custom-orange relative">
            <h2 className="text-[17px] mb-4 tracking-[.15rem]">
              INSIDE OAK & EDEN
            </h2>

            <p className="text-[45px] mb-3 tracking-[.2rem] font-semibold">OUR STORY</p>
            <p className="text-[45px] mb-3 tracking-[.2rem] font-semibold">JOURNAL</p>
            <p className="text-[45px] mb-3 tracking-[.2rem] font-semibold">RECIPES</p>
            <p className="text-[45px] mb-3 tracking-[.2rem] font-semibold">RECIPES</p>
            <p className="text-[45px] mb-3 tracking-[.2rem] font-semibold">FLAGSHIP</p>
            <p className="text-[45px] mb-3 tracking-[.2rem] font-semibold">STORE LOCATOR</p>

            <button
              onClick={() => setModal2(!modal2)}
              className="absolute right-5 top-5 bg-transparent"
            >
              <AiOutlineClose size={24} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
