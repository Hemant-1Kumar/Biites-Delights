import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../assets/Inamdar.svg";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-3 overflow-hidden">
      
      <div className="h-10 flex items-center overflow-hidden">
       <img
  src={LogoImage}
  alt="Bites & Delights Logo"
  className="h-75 w-auto object-contain scale-150 origin-left translate-y-5 -translate-x-25"
/>
      </div>

      <span className="text-2xl font-semibold tracking-wide text-yellow-400">
        Bites & Delights
      </span>

    </Link>
  );
}
