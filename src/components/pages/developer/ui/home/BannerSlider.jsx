import React from "react";

const BannerSlider = () => {
  return (
    <>
      <div className="banner-slider">
        <div className="relative flex justify-center items-center h-[58vh]">
          <img
            src="https://via.placeholder.com/800x400"
            alt=""
            className="object-cover h-[58vh] w-full absolute top-0 left-0 -z-[1] blur-sm"
          />
          <div className="text-center">
            <ul className="flex justify-center gap-2">
                <li className="bg-stone-600 py-1 px-2 tracking-wider rounded-lg text-white font-bold text-xs">Travel</li>
                <li className="bg-stone-600 py-1 px-2 tracking-wider rounded-lg text-white font-bold text-xs">Travel</li>
            </ul>
            <h2 className="px-1 mt-4 text-balance text-3xl text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
            <ul className="flex justify-center gap-4 text-sm text-primary">
                <li>loverboy</li>
                <li>May 22, 2023</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;
