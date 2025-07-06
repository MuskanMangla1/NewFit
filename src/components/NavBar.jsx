import { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger and close icons
import logo from "../assets/logo.jpg.webp";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center z-50 p-4 px-5 md:px-8 bg-black/30 backdrop-blur-md shadow-lg">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="w-14 h-14 object-cover" />
        <div>
          <h1 className="text-white text-2xl font-bold leading-none">newfit</h1>
          <h1 className="text-teal-500 text-2xl font-bold leading-none">Gym</h1>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-8 items-center">
          <li><a href="#home" className="text-white border-b-4 border-teal-500 hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="#services" className="text-white hover:text-gray-300">Services</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
          <li>
            <button className="bg-teal-500 py-2 px-6 text-black font-medium rounded-full hover:bg-teal-600 transition-colors duration-300">
              Start Free Trial
            </button>
          </li>
        </ul>
      </nav>

      {/* Hamburger Icon */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute z-50 top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center py-6 space-y-4 md:hidden">
          <a href="#home" className="text-white border-b-4 border-teal-500 hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>About</a>
          <a href="#services" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#contact" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</a>
          <button className="bg-teal-500 py-2 px-6 text-black font-medium rounded-full hover:bg-teal-600 transition-colors duration-300" onClick={() => setIsOpen(false)}>
            Start Free Trial
          </button>
        </div>
      )}
    </header>
  );
}
