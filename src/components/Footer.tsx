import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#090A0D]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:text-left">
        
        {/* Logo */}
        <div className="flex items-center gap-1">
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={25}
            height={25}
            className="h-6 w-6"
          />

          <h3 className="text-lg font-semibold sm:text-xl">
            FITLOG
          </h3>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-xs text-[#6B7280] sm:text-sm md:text-base">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;