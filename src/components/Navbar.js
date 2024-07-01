import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Tunde's Portfolio</div>
        <div>
          <a href="#about" className="text-gray-300 hover:text-white mx-2">About</a>
          <a href="#projects" className="text-gray-300 hover:text-white mx-2">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white mx-2">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
