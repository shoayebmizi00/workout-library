"use client";

import { IWorkout } from "@/app/type";
import PlanTabs from "@/components/PlanTabs";
import { WorkoutContext } from "@/context/WorkoutContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDumbbell, FaFire, FaStar, FaTrash } from "react-icons/fa";

const MyPlanPage = () => {
  const context = React.useContext(WorkoutContext) as {
    todaysPlan: IWorkout[];
    savedWorkouts: IWorkout[];
    setTodaysPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };

  const [activeTab, setActiveTab] = React.useState<"today" | "saved">("today");

  const [sortBy, setSortBy] = React.useState<
    "duration" | "calories" | "rating"
  >("duration");

  const activeWorkouts =
    activeTab === "today" ? context.todaysPlan : context.savedWorkouts;

  const visibleWorkouts = React.useMemo(() => {
    return [...activeWorkouts].sort((a, b) => {
      if (sortBy === "calories") {
        return Number(b.caloriesBurned) - Number(a.caloriesBurned);
      }

      if (sortBy === "rating") {
        return Number(b.rating) - Number(a.rating);
      }

      return Number(b.duration) - Number(a.duration);
    });
  }, [activeWorkouts, sortBy]);

  const totalMinutes = visibleWorkouts.reduce(
    (sum, item) => sum + Number(item.duration),
    0,
  );

  const totalCalories = visibleWorkouts.reduce(
    (sum, item) => sum + Number(item.caloriesBurned),
    0,
  );

  const handleMarkAsDone = (workoutId: number) => {
    context.setTodaysPlan((current) =>
      current.filter(({ id }) => id !== workoutId),
    );
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
        <div>
          <h1 className="text-3xl font-bold uppercase tracking-wide text-gray-100 sm:text-4xl">
            My Plan
          </h1>

          <p className="mt-2 text-sm text-gray-400 sm:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Summary */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#292C31] bg-[#191B20]">
          <div className="grid grid-cols-1 sm:grid-cols-3">

            {/* Exercises */}
            <div className="border-b border-[#292C31] p-5 sm:border-b-0 sm:border-r">
              <p className="text-xs text-gray-400">
                Exercises
              </p>

              <p className="mt-2 text-3xl font-bold text-[#C2F800]">
                {visibleWorkouts.length}
              </p>
            </div>

            {/* Minutes */}
            <div className="border-b border-[#292C31] p-5 sm:border-b-0 sm:border-r">
              <p className="text-xs text-gray-400">
                Minutes
              </p>

              <p className="mt-2 text-3xl font-bold text-gray-200">
                {totalMinutes}
              </p>
            </div>

            {/* Calories */}
            <div className="p-5">
              <p className="text-xs text-gray-400">
                Calories
              </p>

              <p className="mt-2 text-3xl font-bold text-gray-200">
                {totalCalories}
              </p>
            </div>

          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mt-8 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">

          <PlanTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <div className="w-full sm:w-64 md:w-80">
            <label
              htmlFor="sort"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Sort By
            </label>

            <select
              id="sort"
              value={sortBy}
              onChange={(event) =>
                setSortBy(
                  event.target.value as
                    | "duration"
                    | "calories"
                    | "rating",
                )
              }
              className="w-full rounded-xl border border-[#3A3D42] bg-[#0D0F12] px-4 py-3 text-sm text-gray-200 outline-none transition focus:border-[#C2F800]"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Empty State */}
        {!visibleWorkouts.length ? (
          <div className="mt-8 flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-[#292C31] bg-[#191B20] px-5 text-center">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C2F800]/10">
              <FaDumbbell className="text-xl text-[#C2F800]" />
            </div>

            <h2 className="mt-5 text-lg font-semibold uppercase tracking-wide text-gray-100">
              {activeTab === "today"
                ? "Nothing here yet"
                : "No saved workouts"}
            </h2>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-400">
              {activeTab === "today"
                ? "Browse the library and add a lift to get today moving."
                : "Save a workout to keep it for later."}
            </p>

            <Link
              href="/pages/workout"
              className="mt-6 rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#D5FF3D] hover:shadow-lg hover:shadow-[#C2F800]/20"
            >
              Go to workouts
            </Link>
          </div>
        ) : (

          /* Workout Cards */
          <div className="mt-8 space-y-4">

            {visibleWorkouts.map((workout) => (
              <div
                key={workout.id}
                className="
                  group flex w-full flex-col gap-4
                  rounded-2xl border border-[#292C31]
                  bg-[#191B20] p-4
                  transition-all duration-300
                  hover:border-[#3A3D42]

                  sm:flex-row
                  sm:items-center
                "
              >

                {/* Image */}
                <div
                  className="
                    h-48 w-full shrink-0
                    overflow-hidden rounded-xl

                    sm:h-24 sm:w-36
                  "
                >
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    width={144}
                    height={96}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Workout Information */}
                <div className="min-w-0 flex-1">

                  {/* Name */}
                  <h3 className="text-base font-semibold uppercase tracking-wide text-gray-100 sm:text-lg">
                    {workout.name}
                  </h3>

                  {/* Equipment */}
                  <p className="mt-1 text-sm text-gray-400">
                    {workout.equipment}
                  </p>

                  {/* Stats */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm">

                    <span className="flex items-center gap-1.5 text-gray-300">
                      <span className="text-[#C2F800]">◷</span>
                      {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1.5 text-gray-300">
                      <FaFire className="text-[#C2F800]" />
                      {workout.caloriesBurned} kcal
                    </span>

                    <span className="flex items-center gap-1.5 text-gray-300">
                      <FaStar className="text-[#C2F800]" />
                      {workout.rating}
                    </span>

                  </div>
                </div>

                {/* Actions */}
                <div
                  className="
                    flex w-full flex-wrap gap-2
                    sm:w-auto sm:shrink-0
                  "
                >

                  {/* View Details */}
                  <Link
                    href={`/pages/workout/${workout.id}`}
                    className="
                      flex-1 rounded-full
                      border border-gray-300
                      px-3 py-2 text-center
                      text-xs font-medium text-gray-200
                      transition
                      hover:border-white hover:bg-white hover:text-black

                      sm:flex-none sm:px-4
                    "
                  >
                    View Details
                  </Link>

                  {/* Mark Done */}
                  {activeTab === "today" && (
                    <button
                      onClick={() => handleMarkAsDone(workout.id)}
                      className="
                        flex flex-1 items-center
                        justify-center gap-2
                        rounded-full
                        bg-[#C2F800]
                        px-3 py-2
                        text-xs font-semibold text-black
                        transition
                        hover:bg-[#D5FF3D]

                        sm:flex-none sm:px-4
                      "
                    >
                      <span className="text-sm">✓</span>
                      <span>Mark as Done</span>
                    </button>
                  )}

                  {/* Remove Saved */}
                  {activeTab === "saved" && (
                    <button
                      onClick={() => handleRemoveSaved(workout.id)}
                      className="
                        flex h-9 w-9
                        items-center justify-center
                        rounded-full
                        border border-red-500
                        text-red-400
                        transition
                        hover:bg-red-500 hover:text-white
                      "
                      aria-label={`Remove ${workout.name} from saved workouts`}
                    >
                      <FaTrash />
                    </button>
                  )}

                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;