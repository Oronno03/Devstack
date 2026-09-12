import { useState } from "react";
import logo from "../assets/logo-text.png";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto pt-4 font-main">
      {/* Top Navbar */}
      <div className="flex justify-between items-center gap-4">
        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-main font-semibold cursor-pointer text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Logo */}
        <img src={logo} alt="" />

        {/* Sign In / Sign Up */}
        <div className="flex gap-5">
          <button className="font-main font-semibold cursor-pointer">
            Sign In
          </button>

          <button className="bg-gradient-button text-white px-5 py-2.5 rounded-full font-main font-semibold text-[14px] cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-5 mt-5 text-center">
          <li className="text-[#DB2777] font-semibold font-main text-[14px] cursor-pointer">
            Home
          </li>

          {["Technologies", "Projects", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="font-semibold font-main text-[14px] text-[#475569] cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default MobileNavbar;
