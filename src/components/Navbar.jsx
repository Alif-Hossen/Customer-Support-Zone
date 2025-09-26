import React from 'react';

const Navbar = () => {
  return (
    <div class=" flex justify-between max-w-[1320px] mx-auto mt-10">
      
      <div class=" ">
        <h4 className='text-3xl font-bold'>CS--Ticket System</h4>
      </div>

      <div class="flex justify-between items-center gap-10">
        <a class=" " href=''>Home</a>
        <a class=" " href=''>FAQ</a>
        <a class=" " href="">Changelog</a>
        <a class=" " href="">Blog</a>
        <a class=" " href="">Download</a>
        <a class=" " href="">Contact</a>
        <button className='bg-violet-500 text-white font-bold p-3 rounded-xl'> + New Ticket </button>
      </div>
    </div>
  );
};

export default Navbar;
