import React from 'react';
import Vector from './Images/vector1.png'

const Banner = () => {
    return (


    // <div className=" md:flex md:gap-10 pt-10 max-w-[1320px] mx-auto">
    //     <div className="relative  rounded-xl h-[252px]  flex-1 bg-gradient-to-r from-[#6731E4] to-[#9C5FF1]">
    //         <div className="flex justify-between">
    //             <img className="w-[300px]" src={Vector} alt="" />
    //             <img className="w-[300px] transform scale-x-[-1]" src={Vector} alt="" />
    //         </div>

    //         <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
    //             <p className="text-4xl ">In-Progress</p>
    //             <p className="text-6xl font-semibold pt-2">0</p>
    //         </div>
    //     </div>

    //     <div className="relative  rounded-xl h-[252px]  flex-1 bg-gradient-to-r from-[#52CE68] to-[#068879]">
    //         <div className="flex justify-between">
    //             <img className="w-[300px]" src={Vector} alt="" />
    //             <img className="w-[300px] transform scale-x-[-1]" src={Vector} alt="" />
    //         </div>

    //         <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
    //             <p className="text-4xl ">Resolved</p>
    //             <p className="text-6xl font-semibold 3xl pt-2">0</p>
    //         </div>
    //     </div>
    // </div>

    <div className="flex flex-col gap-6 md:flex-row md:gap-10 pt-10 max-w-[1320px] mx-auto px-4">
        <div className="relative rounded-xl h-[200px] md:h-[252px] flex-1 bg-gradient-to-r from-[#6731E4] to-[#9C5FF1]">
            <div className="flex justify-between">
                <img className="w-[150px] md:w-[300px]" src={Vector} alt="" />
                <img className="w-[150px] md:w-[300px] transform scale-x-[-1]" src={Vector} alt="" />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <p className="text-2xl md:text-4xl">In-Progress</p>
                <p className="text-4xl md:text-6xl font-semibold pt-2">0</p>
            </div>
        </div>

        <div className="relative rounded-xl h-[200px] md:h-[252px] flex-1 bg-gradient-to-r from-[#52CE68] to-[#068879]">
            <div className="flex justify-between">
                <img className="w-[150px] md:w-[300px]" src={Vector} alt="" />
                <img className="w-[150px] md:w-[300px] transform scale-x-[-1]" src={Vector} alt="" />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <p className="text-2xl md:text-4xl">Resolved</p>
                <p className="text-4xl md:text-6xl font-semibold pt-2">0</p>
            </div>
        </div>
    </div>




    );
};

export default Banner;