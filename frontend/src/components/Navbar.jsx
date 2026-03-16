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
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 w-full h-24 bg-[#f2f6f2]/95 backdrop-blur-md border-b border-[#e3ebe3] px-6 md:px-10 flex justify-between items-center z-50">

      {/* Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-2 md:static md:translate-x-0">
        <Logo mobileBig={true} />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-12 text-[16px] font-medium text-slate-700">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `relative transition duration-300 ${
                isActive ? "text-amber-600" : "hover:text-slate-900"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden relative z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-between w-6 h-5"
        >
          <span className={`h-[2px] bg-slate-700 transition-all origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-[2px] bg-slate-700 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-[2px] bg-slate-700 transition-all origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-24 left-0 w-full bg-white shadow-md text-center py-8 space-y-6 md:hidden border-t border-gray-200">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-lg transition ${
                  isActive
                    ? "text-amber-600 font-semibold"
                    : "text-slate-700 hover:text-slate-900"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
