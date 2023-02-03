import React from "react";

const Hero = ({
  heroapi: { title, subtitle, btntext, image, sociallinks, videos },
}) => {
  return (
    <div className="relative h-auto w-auto flex flex-col">
      <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10">
        <div className="relativity opacity-100 z-20 grid items-center justify-items-center nike-container">
          <div className="grid items-center justify-items-center mt-28 md:mt-24">
            <h1 className="text-6x1 lg:text-5x1 md:text-4x1 sm:text-3x1 xsm:text-2x1 font-extrabold filter drop-shadow-sm text-slate-200">
              {title}
            </h1>
            <h1 className="text-6x1 lg:text-5x1 md:text-4x1 sm:text-3x1 xsm:text-2x1 font-extrabold filter drop-shadow-sm text-slate-200">
              {subtitle}
            </h1>
            <button
              type="button"
              className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5"
            >
              {btntext}
            </button>
            <div>
              <div></div>
              <div></div>
              <img src={img} alt="hero-img/img" className="w-auto h-[45vh] lg:h-[35vh] md:h-[31] sm:h-[21vh] xsm:h-[19vh] transitions-theme-rotate-[25deg] hover:rotate-0 cursor-pointer object-fill " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
