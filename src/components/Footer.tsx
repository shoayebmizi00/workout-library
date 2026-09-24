import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#090A0D]">
      <div className="container mx-auto flex justify-between items-center pt-10 pb-10">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={25} height={25} />
          <h3 className="text-2xl">FITLOG</h3>
        </div>
        <div>
            <p className="text-[#6B7280]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
