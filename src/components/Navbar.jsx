import React from 'react';

const Navbar = () => {
  return (
    <div className="md:flex justify-between max-w-[1320px] mx-auto mt-10">
      <div className="">
        <h4 className='text-3xl font-bold text-center'>CS--Ticket System</h4>
      </div>
      <div className="md:flex justify-between items-center flex flex-col md:flex-row md:gap-10 gap-4 md:pt-0 pt-8">
        <a className=" " href=''>Home</a>
        <a className=" " href=''>FAQ</a>
        <a className=" " href="">Changelog</a>
        <a className=" " href="">Blog</a>
        <a className=" " href="">Download</a>
        <a className=" " href="">Contact</a>
        <button className='bg-violet-500 text-white font-bold p-3 rounded-xl'>+ New Ticket</button>
      </div>
    </div>
  );
};

export default Navbar;
