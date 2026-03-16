import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../assets/Inamdar_fixed.svg"; // use fixed file

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-4">

      {/* Logo Image */}
     <img
  src={LogoImage}
  alt="Bites & Delights Logo"
  className="h-[120px] w-auto -ml-8 translate-y-4"
 />

      {/* Brand Name */}
      <span className="text-xl md:text-3xl font-semibold tracking-wide text-amber-600">
        Bites & Delights
      </span>

    </Link>
  );
}
