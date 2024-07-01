import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Tunde</h1>
        <p className="text-xl mb-8">A Passionate Software Developer</p>
        <a href="#projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View My Work
        </a>
      </div>
    </header>
  );
};

export default Header;
