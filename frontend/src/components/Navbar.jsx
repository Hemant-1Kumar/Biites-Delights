import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Mango Supply", path: "/mango" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-xl border-b border-yellow-400/10 text-white px-8 py-4 flex justify-between items-center z-50">

      {/* Logo */}
      <Logo />

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10 text-lg font-medium">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `relative group transition duration-300 ${
                isActive ? "text-yellow-400" : "hover:text-yellow-400"
              }`
            }
          >
            {link.name}

            {/* Underline Animation */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        ))}
      </div>

      {/* Mobile Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-between w-6 h-5"
        >
          <span className={`h-[2px] bg-yellow-400 transition ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-[2px] bg-yellow-400 transition ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-[2px] bg-yellow-400 transition ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg text-center py-8 space-y-6 md:hidden shadow-2xl">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block text-lg hover:text-yellow-400 transition"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}