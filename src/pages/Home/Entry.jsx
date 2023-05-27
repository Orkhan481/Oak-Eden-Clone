import React from "react";

const Entry = () => {
  return (
    <div className="w-full h-[761px] bg-entry object-cover bg-cover align-middle"
    
    >
      <div className="h-full flex flex-col justify-center gap-4 pl-24">
        <h2 className="text-[80px] leading-[70px] tracking-tight"
           data-aos="fade-up"
           data-aos-easing="linear"
           data-aos-duration="300"
        >YOUR WHISKEY. <br /> YOUR WAY.</h2>
        <p className="leading-[28px] text-lg tracking-widest"
         data-aos="fade-up"
         data-aos-easing="linear"
         data-aos-duration="300"
        >Build your very own custom bottle of whiskey.</p>

        <div className="max-w-[180px] group bg-transparent  hover:bg-golden transition-all ease-linear duration-300 p-[2px]"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="300"
        >
          <button className="h-10 text-sm text-golden bg-custom-black px-[37px]  font-bold tracking-widest uppercase border-[1px] border-custom-black group-hover:bg-golden group-hover:text-custom-black transition-all ease-linear duration-300 cursor-pointer">
            Build now
          </button>
        </div>

      </div>
    </div>
  );
};

export default Entry;
