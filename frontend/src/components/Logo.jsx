import React from "react";
import LogoImage from "../assets/Inamdar.svg"; // adjust path

export default function Logo() {
  return (
    <div className="flex items-center h-16 px-4 space-x-3 bg-black">
      {/* Logo shifted down and left */}
      <img
        src={LogoImage}
        alt="Bites & Delights Logo"
        className="h-130 w-auto object-contain drop-shadow-lg relative top-5 -left-30"
      />

      <span className="text-2xl font-semibold tracking-wide text-yellow-400">
        Bites & Delights
      </span>
    </div>
  );
}