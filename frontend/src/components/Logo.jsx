import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../assets/Inamdar_fixed.svg"; // fixed file

export default function Logo({ mobileBig }) {
  return (
    <Link
      to="/"
      className="flex items-center gap-4 justify-center md:justify-start"
    >

      {/* Logo Image */}
      <img
        src={LogoImage}
        alt="Bites & Delights Logo"
        className={`
          h-[${mobileBig ? "140px" : "120px"}] w-auto
          -ml-8 md:ml-0
          translate-y-4 md:translate-y-0
          transition-all duration-300
        `}
      />

      {/* Brand Name */}
      <span className="text-xl md:text-3xl font-semibold tracking-wide text-amber-600">
        Bites & Delights
      </span>

    </Link>
  );
}
