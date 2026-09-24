"use client";

import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C2F800]/10 blur-3xl" />

        <div className="absolute -left-20 top-20 h-40 w-40 rounded-full bg-[#C2F800]/10 blur-3xl" />

        <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[#8BC600]/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        {/* 404 */}
        <div className="relative">
          <span className="absolute left-1/2 top-1/2 -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C2F800]/20 blur-3xl" />

          <h1 className="bg-linear-to-r from-[#C2F800] via-[#9FE000] to-[#4D7C00] bg-clip-text text-8xl font-black tracking-tight text-transparent drop-shadow-sm sm:text-[10rem]">
            404
          </h1>
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-gray-500 sm:text-lg">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          may have been moved or no longer exists.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {/* Home */}
          <Link
            href="/"
            className="group inline-flex min-w-40 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#C2F800] via-[#9FE000] to-[#6FAE00] px-6 py-3.5 font-semibold text-black shadow-md shadow-[#C2F800]/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-[#C2F800]/30 active:translate-y-0"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Home
          </Link>

          {/* Go Back */}
          <button
            onClick={() => window.history.back()}
            className="inline-flex min-w-40 items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-700 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#C2F800] hover:bg-[#C2F800]/5 hover:shadow-md active:translate-y-0 cursor-pointer"
          >
            Go Back
          </button>
        </div>

        {/* Error code */}
        <div className="mt-10">
          <span className="rounded-full border border-gray-100 bg-gray-50 px-4 py-2 text-xs font-medium tracking-wide text-gray-400">
            ERROR 404
          </span>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;