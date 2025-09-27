// MAIN -->

import React from 'react';
import Vector from './Images/vector1.png';

function Banner({ inProgress, resolved }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-10 pt-10 max-w-[1320px] mx-auto px-4 mt-8">
      
      <div className="relative rounded-xl h-[200px] md:h-[252px] flex-1 bg-gradient-to-r from-[#6731E4] to-[#9C5FF1] p-4 flex items-center justify-center overflow-hidden">
        <div className="flex justify-between absolute ">
          <img className="w-[150px] md:w-[320px]" src={Vector} alt="" />
          <img className="w-[150px] md:w-[300px] transform scale-x-[-1]" src={Vector} alt="" />
        </div>
        <div className="relative text-white text-center">
          <p className="text-2xl md:text-4xl">In-Progress</p>
          <p className="text-4xl md:text-6xl font-semibold pt-2">{inProgress}</p>
        </div>
      </div>

    
      <div className="relative rounded-xl h-[200px] md:h-[252px] flex-1 bg-gradient-to-r from-[#52CE68] to-[#068879] p-4 flex items-center justify-center overflow-hidden">
        <div className="flex justify-between absolute ">
          <img className="w-[150px] md:w-[320px]" src={Vector} alt="" />
          <img className="w-[150px] md:w-[300px] transform scale-x-[-1]" src={Vector} alt="" />
        </div>
        <div className="relative text-white text-center">
          <p className="text-2xl md:text-4xl">Resolved</p>
          <p className="text-4xl md:text-6xl font-semibold pt-2">{resolved}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;




































