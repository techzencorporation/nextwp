import React from 'react';

const Hero = () => {
  return (
    <div className="w-full md:w-full bg-slate-100 h-[70vh] flex flex-col justify-center items-center text-center">
      <div className="box w-full md:w-1/2 flex flex-col justify-center items-center gap-5">
        <h5 className="text-green-400 text-lg font-bold">WELCOME TO WPBLOG</h5>
        <h1 className="text-black text-5xl font-bold line-clamp-3">
          LinkedIn Insights & Professional Guidance
        </h1>
        <div className="w-[80%] bg-white flex justify-center items-center gap-5 px-5 py-10 border-2">
          <div className="w-20 h-20 rounded-full overflow-hidden inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <img
              src="./profile.jpeg"
              alt="profile"
            />
          </div>
          <div className="text text-left flex flex-col gap-5">
            <p>“Tehczen Headless project”</p>
            <p>Techzen team techzeninc.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
