import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between ">
      <div className="text-xl font-bold">Logo</div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl">
          &#9776;
        </button>
      </div>
      <div
        className={`lg:flex flex-col lg:flex-row lg:space-x-6 absolute lg:relative top-16 lg:top-auto right-0 lg:right-auto bg-gray-800 lg:bg-transparent lg:p-0 p-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a className="block lg:inline-block px-4 py-2 hover:bg-gray-700 duration-300 cursor-pointer">
          Home
        </a>
        <a className="block lg:inline-block px-4 py-2 hover:bg-gray-700 duration-300 cursor-pointer">
          About
        </a>
        <a className="block lg:inline-block px-4 py-2 hover:bg-gray-700 duration-300 cursor-pointer">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
