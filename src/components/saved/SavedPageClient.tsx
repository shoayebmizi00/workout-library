"use client";

import { IWorkout } from "@/app/type";
import { WorkoutContext } from "@/context/WorkoutContext";
import Link from "next/link";
import React from "react";
import { FaFire, FaStar, FaTrash } from "react-icons/fa";

const SavedPageClient = () => {
  const context = React.useContext(WorkoutContext) as {
    savedWorkouts: IWorkout[];
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };

  const handleRemoveSaved = (workoutId: number) => {
    context.setSavedWorkouts((current) =>
      current.filter(({ id }) => id !== workoutId),
    );
  };

  return (
    <main className="min-h-screen bg-[#0D0F12] px-4 pb-12 pt-24 text-white sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold uppercase tracking-wide text-gray-100 sm:text-4xl">
              Saved Workouts
            </h1>

            <p className="mt-2 text-sm text-gray-400 sm:text-base">
              Your saved routines are listed here for quick access.
            </p>
          </div>

          <Link
            href="/pages/myplan"
            className="rounded-xl border border-[#C2F800] px-4 py-2 text-sm font-semibold text-[#C2F800] transition hover:bg-[#C2F800] hover:text-black"
          >
            My Plan
          </Link>
        </div>

        {/* Empty State */}
        {!context.savedWorkouts.length ? (
          <div className="mt-8 flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-[#292C31] bg-[#191B20] px-5 text-center">
            <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-100">
              Nothing saved yet
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-400">
              Save a workout from the library to keep it for later.
            </p>

            <Link
              href="/pages/workout"
              className="mt-6 rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#D5FF3D] hover:shadow-lg hover:shadow-[#C2F800]/20"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          /* Saved Workouts */
          <div className="mt-8 space-y-3">
            {context.savedWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="group flex w-full flex-col gap-4 rounded-2xl border border-[#292C31] bg-[#191B20] p-4 transition-all duration-300 hover:border-[#3A3D42] sm:flex-row sm:items-center"
              >
                {/* Image */}
                <div className="h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-36">
                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Workout Information */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-lg font-semibold uppercase tracking-wide text-gray-100">
                    {workout.name}
                  </h3>

                  <p className="mt-0.5 text-sm text-gray-400">
                    {workout.equipment}
                  </p>

                  {/* Stats */}
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
                    {/* Duration */}
                    <span className="flex items-center gap-1.5 text-gray-300">
                      <span className="text-base text-[#C2F800]">◷</span>
                      {workout.duration} min
                    </span>

                    {/* Calories */}
                    <span className="flex items-center gap-1.5 text-gray-300">
                      <FaFire className="text-[#C2F800]" />
                      {workout.caloriesBurned} kcal
                    </span>

                    {/* Rating */}
                    <span className="flex items-center gap-1.5 text-gray-300">
                      <FaStar className="text-[#C2F800]" />
                      {workout.rating}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex w-full shrink-0 items-center justify-end gap-3 sm:w-auto">
                  <Link
                    href={`/pages/workout/${workout.id}`}
                    className="rounded-full border border-gray-300 px-4 py-2 text-xs font-medium text-gray-200 transition hover:border-white hover:bg-white hover:text-black"
                  >
                    View Details
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleRemoveSaved(workout.id)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500 text-red-400 transition hover:bg-red-500 hover:text-white"
                    aria-label={`Delete ${workout.name} from saved workouts`}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default SavedPageClient;
