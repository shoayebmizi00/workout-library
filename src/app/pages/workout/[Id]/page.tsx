import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaBookmark,
  FaCalendarPlus,
} from "react-icons/fa";
import { IWorkout } from "@/app/type";

const fitLogResponse = async (): Promise<IWorkout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }

  return res.json();
};

const WorkOutDetailsPage = async ({
  params,
}: {
  params: Promise<{ Id: string }>;
}) => {
  const { Id } = await params;

  const workouts = await fitLogResponse();

  const workout = workouts.find(
    (item) => item.id === Number(Id)
  );

  if (!workout) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0D0F12] px-4 pb-12 pt-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/pages/workout"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-[#C2F800]"
          >
            <FaArrowLeft className="text-xs" />
            Back to Workout Library
          </Link>
        </div>

        {/* Main Details Layout */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2">

          {/* ================= IMAGE ================= */}
          <div className="relative h-[500px] overflow-hidden rounded-2xl border border-[#292C31] sm:h-[600px] lg:h-full lg:min-h-[780px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="flex flex-col lg:min-h-[780px]">

            {/* Title */}
            <h1 className="text-3xl font-bold uppercase leading-tight tracking-wide text-gray-100 sm:text-4xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base sm:leading-7">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-medium text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Workout Information */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-[#292C31] bg-[#191B20]">

              {/* Equipment */}
              <div className="grid grid-cols-2 border-b border-[#292C31] px-4 py-3.5 sm:px-5">
                <span className="text-xs uppercase tracking-wide text-gray-400">
                  Equipment
                </span>

                <span className="text-sm text-gray-200">
                  {workout.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="grid grid-cols-2 border-b border-[#292C31] px-4 py-3.5 sm:px-5">
                <span className="text-xs uppercase tracking-wide text-gray-400">
                  Difficulty
                </span>

                <span className="text-sm text-gray-200">
                  {workout.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="grid grid-cols-2 border-b border-[#292C31] px-4 py-3.5 sm:px-5">
                <span className="text-xs uppercase tracking-wide text-gray-400">
                  Sets
                </span>

                <span className="text-sm text-gray-200">
                  {workout.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="grid grid-cols-2 border-b border-[#292C31] px-4 py-3.5 sm:px-5">
                <span className="text-xs uppercase tracking-wide text-gray-400">
                  Reps
                </span>

                <span className="text-sm text-gray-200">
                  {workout.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="grid grid-cols-2 border-b border-[#292C31] px-4 py-3.5 sm:px-5">
                <span className="text-xs uppercase tracking-wide text-gray-400">
                  Duration
                </span>

                <span className="text-sm text-gray-200">
                  {workout.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="grid grid-cols-2 border-b border-[#292C31] px-4 py-3.5 sm:px-5">
                <span className="text-xs uppercase tracking-wide text-gray-400">
                  Calories
                </span>

                <span className="text-sm text-gray-200">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="grid grid-cols-2 px-4 py-3.5 sm:px-5">
                <span className="text-xs uppercase tracking-wide text-gray-400">
                  Rating
                </span>

                <span className="text-sm text-gray-200">
                  {workout.rating}
                </span>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold uppercase tracking-wide text-gray-100">
                Instructions
              </h2>

              <div className="mt-4 space-y-3">
                {workout.instructions.map((instruction, index) => (
                  <div
                    key={index}
                    className="flex gap-3 text-sm leading-6 text-gray-200"
                  >
                    <span className="font-medium text-gray-300">
                      {index + 1}.
                    </span>

                    <p>{instruction}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-auto pt-7">
              <div className="flex flex-wrap gap-3">

                <button className="inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#D5FF3D] hover:shadow-lg hover:shadow-[#C2F800]/20 cursor-pointer">
                  <FaCalendarPlus />
                  {`Add to today's plan`}
                </button>

                <button className="inline-flex items-center gap-2 rounded-xl border border-gray-500 px-5 py-3 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-[#C2F800] hover:text-[#C2F800] cursor-pointer">
                  <FaBookmark />
                  Save for later
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkOutDetailsPage;