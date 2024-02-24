import React from "react";
import user from "../assets/user.png";
import profile from '../assets/profile.png'
import globe from '../assets/globe.png'

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ">
          <img
            className="w-20 mx-auto mt-[-3rem] rounded-t-lg"
            src={user}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-bold">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted user</p>
            <p className="py-2 border-b mx-8">Send Up to 2Gb</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto text-black px-6 py-3">Start Trail</button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-gray-300">
          <img
            className="w-20 mx-auto mt-[-3rem] rounded-b-lg bg-transparent"
            src={profile}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-bold">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted user</p>
            <p className="py-2 border-b mx-8">Send Up to 2Gb</p>
          </div>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto text-[#00df9a] px-6 py-3">Start Trail</button>
        </div>
        
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] rounded-t-lg"
            src={globe}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Group User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-bold">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted user</p>
            <p className="py-2 border-b mx-8">Send Up to 2Gb</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto text-black px-6 py-3">Start Trail</button>
        </div>
      
      </div>
    </div>
  );
};

export default Cards;
