// MAIN -->


import React from 'react';

const Navbar = () => {
  return (
    <div class=" md:flex  justify-between max-w-[1310px] mx-auto pt-10">
      
      <div class=" ">
        <h4 className='text-3xl font-bold text-center text-black'>CS--Ticket System</h4>
      </div>

      <div class="md:flex justify-between items-center flex flex-col md:flex-row md:gap-10 gap-4 md:pt-0 pt-8">
        <a class="text-black " href=''>Home</a>
        <a class=" text-black " href=''>FAQ</a>
        <a class=" text-black " href="">Changelog</a>
        <a class=" text-black " href="">Blog</a>
        <a class=" text-black " href="">Download</a>
        <a class=" text-black " href="">Contact</a>
        <button className='bg-gradient-to-r from-[#6731E4] to-[#9C5FF1] text-white font-bold px-4 py-2 rounded-l rounded mr-2'> + New Ticket </button>
      </div>
    </div>
  );
};

export default Navbar;
