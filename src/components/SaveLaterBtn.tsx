'use client';
import { IWorkout } from "@/app/type";
import { WorkoutContext } from "@/context/WorkoutContext";
import React from "react";
import { FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify/unstyled";

const SaveLaterBtn = ({ workout }: { workout: IWorkout }) => {
  const { setSavedWorkouts } = React.useContext(WorkoutContext) as {
    setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };

  const handleToAddSaveLater = () => {
    setSavedWorkouts((previousWorkouts) =>
      previousWorkouts.some(({ id }) => id === workout.id)
        ? previousWorkouts
        : [...previousWorkouts, workout]
    );
    toast.success("Workout saved for later!");
  };

  return (
    <div>
      <button onClick={handleToAddSaveLater} className="inline-flex items-center gap-2 rounded-xl border border-gray-500 px-5 py-3 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-[#C2F800] hover:text-[#C2F800] cursor-pointer">
        <FaBookmark />
        Save for later
      </button>
    </div>
  );
};

export default SaveLaterBtn;
