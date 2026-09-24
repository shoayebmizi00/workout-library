"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveNavLink = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Home */}
      <li>
        <Link
          href="/"
          className={
            pathname === "/"
              ? "text-[#C2F800] text-lg font-bold"
              : "text-gray-100 text-lg"
          }
        >
          Home
        </Link>
      </li>

      {/* Workout */}
      <li>
        <Link
          href="/pages/workout"
          className={
            pathname === "/pages/workout"
              ? "text-[#C2F800] text-lg font-bold"
              : "text-gray-100 text-lg"
          }
        >
          Workout
        </Link>
      </li>

      {/* My Plan */}
      <li>
        <Link
          href="/pages/myplan"
          className={
            pathname === "/pages/myplan"
              ? "text-[#C2F800] text-lg font-bold"
              : "text-gray-100 text-lg"
          }
        >
          My Plan
        </Link>
      </li>
    </>
  );
};

export default ActiveNavLink;