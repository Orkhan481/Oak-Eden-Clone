import React from "react";
import { GoStar } from "react-icons/go";

const Cocktails = () => {
  return (
    <div className="w-full h-[120vh] max-h-auto bg-cover flex  justify-center items-center  bg-coctails-pattern">
      <div className="max-w-[540px] h-full flex flex-col justify-center items-center mb-6">
        <span
          className="flex gap-4 items-center"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="300"
        >
          <GoStar size={32} />
          <h3 className="text-[60px]">COCKTAILS</h3>
          <GoStar size={32} />
        </span>

        <p
          className="w-[60%] text-[30px] text-center mb-8 "
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="300"
        >
          Crafted right from the comfort of home sweet home.
        </p>

        <p
          className="max-w-[288px] text-center mb-8"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="300"
        >
          Ease back with a cocktail created by some of the best mixologists in
          the game.
        </p>

        <div
          className="group bg-transparent  hover:bg-golden transition-all ease-linear duration-300 p-[2px]"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="300"
        >
          <button className="h-10 text-sm text-golden bg-custom-black px-[37px]  font-bold tracking-widest uppercase border-[1px] border-custom-black group-hover:bg-golden group-hover:text-custom-black transition-all ease-linear duration-300 cursor-pointer">
            SEE ALL RECIPES
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cocktails;
