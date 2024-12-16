import React from "react";
import bg from '../../assets/images/bg.png';
import bg2 from '../../assets/images/bg2.png';
import bg3 from '../../assets/images/bg3.png';
const Home = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full relative">
        <img className="w-full h-screen bg-black" src={bg} alt="Background" />
        <p className="text-white  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-5xl text-base font-black w-full text-center">
          SỐNG TRỌN CHẤT MỸ, LÀM CHỦ TẦM CAO
        </p>
      </div>
      <div className="w-full">
        <img className="w-full h-screen" src={bg2} alt="Background" />
      </div>
      <div className="w-full">
        <img className="w-full h-screen" src={bg3} alt="Background" />
      </div>
    </div>
  );
};

export default Home;
