"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveNavLinkProps {
  href: string;
  children: React.ReactNode;
}

const ActiveNavLink = ({ href, children }: ActiveNavLinkProps) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
        active
          ? "bg-[#C2F800]/15 text-[#557800]"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveNavLink;