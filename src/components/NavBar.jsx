import { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger and close icons
import logo from "../assets/logo.jpg.webp";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <div className="container mx-auto">
          <div className="relative flex h-16 items-center justify-between rounded-full border border-white/10 bg-black/30 px-4 shadow-lg backdrop-blur-xl sm:px-6">
            {/* Logo Section */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <img src={logo} alt="Logo" className="w-10 h-10 object-cover rounded-full" />
              <div>
                <h1 className="text-white text-lg font-bold leading-none">newfit</h1>
                <h1 className="text-teal-500 text-lg font-bold leading-none">Gym</h1>
              </div>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1">
              <a href="#home" className="text-white border-b-2 border-teal-500 hover:text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
                Home
              </a>
              <a href="#about" className="text-white hover:text-gray-300 hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
                About
              </a>
              <a href="#services" className="text-white hover:text-gray-300 hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
                Services
              </a>
              <a href="#contact" className="text-white hover:text-gray-300 hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300">
                Contact
              </a>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <button className="bg-teal-500 py-2 px-4 text-black font-medium rounded-full hover:bg-teal-600 transition-colors duration-300 text-xs h-8 hidden sm:flex items-center">
                Start Free Trial
              </button>
              <div className="md:hidden">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
                >
                  {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden">
          <div className="absolute top-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-b border-white/10 p-4 rounded-b-3xl mx-4 mt-4">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <img src={logo} alt="Logo" className="w-10 h-10 object-cover rounded-full" />
                <div>
                  <h1 className="text-white text-lg font-bold leading-none">newfit</h1>
                  <h1 className="text-teal-500 text-lg font-bold leading-none">Gym</h1>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                <X size={24} color="white" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 text-center">
              <a 
                href="#home" 
                className="text-white border-b-2 border-teal-500 hover:text-gray-300 text-lg font-medium p-2 rounded-lg transition-all duration-300" 
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-gray-300 hover:bg-white/10 text-lg font-medium p-2 rounded-lg transition-all duration-300" 
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="text-white hover:text-gray-300 hover:bg-white/10 text-lg font-medium p-2 rounded-lg transition-all duration-300" 
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-gray-300 hover:bg-white/10 text-lg font-medium p-2 rounded-lg transition-all duration-300" 
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <button 
                className="bg-teal-500 py-3 px-6 text-black font-medium rounded-full hover:bg-teal-600 transition-colors duration-300 mt-4" 
                onClick={() => setIsOpen(false)}
              >
                Start Free Trial
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}