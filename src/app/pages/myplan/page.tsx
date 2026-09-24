import PlanTabs from "@/components/PlanTabs";
import Link from "next/link";
import React from "react";
import { FaDumbbell } from "react-icons/fa";

const Page = () => {
  return (
    <main className="min-h-screen bg-[#0D0F12] px-4 pb-12 pt-24 text-white sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold uppercase tracking-wide text-gray-100 sm:text-4xl">
            My Plan
          </h1>

          <p className="mt-2 text-sm text-gray-400 sm:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* ================= SUMMARY ================= */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#292C31] bg-[#191B20]">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {/* Exercises */}
            <div className="border-b border-[#292C31] p-5 sm:border-b-0 sm:border-r">
              <p className="text-xs text-gray-400">
                Exercises
              </p>

              <p className="mt-2 text-3xl font-bold text-[#C2F800]">
                0
              </p>
            </div>

            {/* Minutes */}
            <div className="border-b border-[#292C31] p-5 sm:border-b-0 sm:border-r">
              <p className="text-xs text-gray-400">
                Minutes
              </p>

              <p className="mt-2 text-3xl font-bold text-gray-200">
                0
              </p>
            </div>

            {/* Calories */}
            <div className="p-5">
              <p className="text-xs text-gray-400">
                Calories
              </p>

              <p className="mt-2 text-3xl font-bold text-gray-200">
                0
              </p>
            </div>
          </div>
        </div>

        {/* ================= FILTER AREA ================= */}
        <div className="mt-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          {/* Tabs */}
          <PlanTabs/>

          {/* Sort */}
          <div className="w-full sm:w-80">
            <label
              htmlFor="sort"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Sort By
            </label>

            <select
              id="sort"
              className="w-full rounded-xl border border-[#3A3D42] bg-[#0D0F12] px-4 py-3 text-sm text-gray-200 outline-none transition focus:border-[#C2F800]"
              defaultValue="duration"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* ================= EMPTY STATE ================= */}
        <div className="mt-8 flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-[#292C31] bg-[#191B20] px-5 text-center">
          {/* Icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C2F800]/10">
            <FaDumbbell className="text-xl text-[#C2F800]" />
          </div>

          <h2 className="mt-5 text-lg font-semibold uppercase tracking-wide text-gray-100">
            Nothing here yet
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-gray-400">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/pages/workout"
            className="mt-6 rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#D5FF3D] hover:shadow-lg hover:shadow-[#C2F800]/20"
          >
            Go to workouts
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;