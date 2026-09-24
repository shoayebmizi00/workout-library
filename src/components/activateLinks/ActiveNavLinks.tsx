"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveNavLink = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-4 text-lg font-bold">

      <Link
        href="/"
        className={
          pathname === "/"
            ? "text-[#C2F800]"
            : "text-gray-100"
        }
      >
        Home
      </Link>


      <Link
        href="/pages/workout"
        className={
          pathname === "/pages/workout"
            ? "text-[#C2F800]"
            : "text-gray-100"
        }
      >
        Workout
      </Link>


      <Link
        href="/pages/myplan"
        className={
          pathname === "/pages/myplan"
            ? "text-[#C2F800]"
            : "text-gray-100"
        }
      >
        My Plan
      </Link>
    </div>
  );
};

export default ActiveNavLink;