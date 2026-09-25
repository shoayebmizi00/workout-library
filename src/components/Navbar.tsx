import Image from "next/image";
import Link from "next/link";
import React from "react";
import ActiveNavLink from "./activateLinks/ActiveNavLinks";
import MyPlanCount from "./counter/MyPlanCount";
import SaveLaterCount from "./counter/SaveLaterCount";

const Navbar = () => {
  const Nav_Links = (
    <>
      <ActiveNavLink />
    </>
  );

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#9CA3AF] bg-base-100">
      <div className="navbar container mx-auto min-h-16 bg-base-100 px-3 shadow-sm sm:px-4 lg:px-6">
        
        {/* ================= LEFT ================= */}
        <div className="navbar-start">
          
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm px-2"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-box bg-base-100 p-2 shadow-lg"
            >
              {Nav_Links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="btn btn-ghost ml-1 flex items-center gap-1 border border-[#9CA3AF] px-2 text-base sm:ml-2 sm:px-3 sm:text-lg lg:text-xl"
          >
            <Image
              src="/logo.png"
              alt="FitLog Logo"
              width={25}
              height={25}
              className="h-5 w-5 sm:h-6 sm:w-6"
            />

            <h3>FITLOG</h3>
          </Link>
        </div>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Nav_Links}
          </ul>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="navbar-end gap-1 sm:gap-2 md:gap-3 lg:gap-4">

          {/* Plan */}
          <Link
            href="/pages/myplan"
            className="badge gap-1 px-2 py-3 text-xs font-semibold sm:gap-2 sm:px-3 sm:py-4 sm:text-sm md:text-base lg:text-lg"
          >
            <span>Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C2F800] px-1 text-[10px] font-bold text-black sm:h-6 sm:min-w-6 sm:text-xs">
              <MyPlanCount />
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/pages/myplan"
            className="badge gap-1 px-2 py-3 text-xs font-semibold sm:gap-2 sm:px-3 sm:py-4 sm:text-sm md:text-base lg:text-lg"
          >
            <span>Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C2F800] px-1 text-[10px] font-bold text-black sm:h-6 sm:min-w-6 sm:text-xs">
              <SaveLaterCount />
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;