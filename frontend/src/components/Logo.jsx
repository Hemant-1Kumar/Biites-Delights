import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../assets/Inamdar_fixed.svg";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center justify-center gap-4"
    >
      {/* Logo Image */}
      <img
        src={LogoImage}
        alt="Bites & Delights Logo"
        className="
          h-[150px] md:h-[120px]        /* Mobile bigger, desktop normal */
          w-auto
          relative -top-7 md:top-0      /* Up on mobile, normal on desktop */
          transition-all duration-300
        "
      />

      {/* Brand Name */}
      <span className="text-2xl font-semibold tracking-wide text-amber-600 relative -top-10 md:-top-5">
        Bites & Delights
      </span>
    </Link>
  );
}
