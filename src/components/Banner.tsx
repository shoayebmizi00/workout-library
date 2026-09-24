import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-16 lg:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#C2F800]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#C2F800]/5 blur-3xl" />

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-between gap-12 lg:flex-row">
        {/* Content */}
        <div className="max-w-2xl text-center lg:text-left">
          {/* Small label */}
          <p className="mb-5 text-sm font-bold tracking-[0.25em] text-[#C2F800]">
            WORKOUT LIBRARY
          </p>

          {/* Heading */}
          <h1 className="text-4xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="whitespace-nowrap">Train with intent.</span>{" "}
            <span className="text-[#C2F800] whitespace-nowrap">
              Log every set.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Button */}
          <Link
            href="/pages/workout"
            className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#C2F800] px-6 py-3.5 text-sm font-extrabold tracking-wide text-black shadow-lg shadow-[#C2F800]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#D0FF2B] hover:shadow-xl hover:shadow-[#C2F800]/20"
          >
            BROWSE WORKOUTS
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Image */}
        <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-end">
          {/* Image glow */}
          <div className="absolute inset-10 rounded-full bg-[#C2F800]/10 blur-3xl" />

          <Image
            src="/banner.png"
            alt="Workout illustration"
            width={500}
            height={500}
            priority
            className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
