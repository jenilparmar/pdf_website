import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen h-10 flex justify-between px-2 flex-row pt-2 md:pt-4 md:px-5">
      <div>
        <p>LOGO</p>
      </div>
      <div className="flex flex-row">
        <p className="self-center font-semibold text-sm md:text-xl active:text-blue-500 hover:text-blue-500 cursor-pointer">
          Login
        </p>
        <p className=" bg-blue-500 px-2 font-semibold self-center text-sm md:text-xl rounded-lg ml-2 md:ml-4 text-white py-2 active:scale-95 cursor-pointer transition-all duration-150">
          Signup
        </p>
      </div>
    </div>
  );
};

export default Navbar;
