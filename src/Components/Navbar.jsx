import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-gray-200 p-8 text-center fixed w-full z-10">
      <Link to="introduction" smooth={true} duration={500} className="mx-4 cursor-pointer">Início</Link>
      <Link to="about" smooth={true} duration={500} className="mx-4 cursor-pointer">Sobre Mim</Link>
      <Link to="projects" smooth={true} duration={500} className="mx-4 cursor-pointer">Projetos</Link>
      <Link to="profilePicture" smooth={true} duration={500} className="mx-4 cursor-pointer">Foto</Link>
    </nav>
  );
}

export default Navbar;
