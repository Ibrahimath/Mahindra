'use client'
import React from "react";
import Header from './component/Header/page'



const Home = () => {
  return (
    <div className="bg-hero font-inter h-[100vh] px-[5rem] bg-no-repeat bg-cover border-4 border-red-700">
      <Header/>
      <div className="w-[40rem] pt-[5rem] space-y-[1rem] text-white">
        <h1 className="w-[35rem] text-7xl leading-[5rem] font-bold">Meetup Conference</h1>
        <p className="w-[27rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus
          orci a risus mollis imperdiet. Ut sit amet velit elementum, hendrerit
          leo a, auctor metus. Proin finibus dolor eget suscipit eleifend.
        </p>
        <div className="flex justify-between w-[25rem] text-black text-[.5rem] ">
        <div className="flex flex-col items-center justify-center text-center bg-white w-[5rem] h-[4rem] rounded-sm drop-shadow-xl">
          <p className="text-lg">365</p>
            <p className="">DAYS</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center bg-white w-[5rem] h-[4rem] drop-shadow-xl">
          <p className="text-lg">365</p>
            <p className="">DAYS</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center bg-white w-[5rem] h-[4rem] drop-shadow-xl">
          <p className="text-lg">365</p>
            <p className="">DAYS</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center bg-white w-[5rem] h-[4rem] drop-shadow-xl">
          <p className="text-lg">365</p>
            <p className="">DAYS</p>
          </div>
        </div>
        <button className="flex items-center gap-5 text-white p-2 bg-[#92298d]">
          <span className="border border-l-white h-[1rem]"></span>
          Know More
          <span className="border border-l-white h-[1rem]"></span>
        </button>
      </div>
    </div>
  );
};

export default Home;
