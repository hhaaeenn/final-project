import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#24382c] via-[#2c4837] to-[#33734c]">
    <nav className="bg-gradient-to-r from-[#24382c] via-[#2c4837] to-[#33734c] text-[#bd926e] flex items-center p-4">
      <div className="text-4xl font-bold space-x-10 text-center">Altitude News</div>
      <ul className="flex ml-auto space-x-6">
        <li><a href="/" className="hover:text-yellow-300 ">HOME</a></li>
        <li className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-yellow-300"
          >
            
          </button>
        </li>
        <li><a href="./Kontak" className="hover:text-yellow-300">Kontak</a></li>
        <li><a href="./Tentang" className="hover:text-yellow-300">About</a></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
