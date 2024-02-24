import React from "react";
import titanfall from "../assets/wp5731244-titanfall-2-desktop-wallpapers.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 " src={titanfall} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Data Analytics Dashboard</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            aspernatur ducimus explicabo sint ex quo deleniti et dolore magnam,
            laboriosam blanditiis impedit porro ea, doloremque unde amet.
            Quaerat, veniam temporibus!
          </p>
          <button className="bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto text-[#00df9a] md:mx-0 py-3">
            {" "}
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
