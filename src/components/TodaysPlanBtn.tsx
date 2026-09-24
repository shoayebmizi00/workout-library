'use client';
import { IWorkout } from "@/app/type";
import { WorkoutContext } from "@/context/WorkoutContext";
import React from "react";
import { FaCalendarPlus } from "react-icons/fa";
import { toast } from "react-toastify";

const TodaysPlanBtn = ({ workout }: { workout: IWorkout }) => {
  const { setTodaysPlan } = React.useContext(WorkoutContext) as {
    setTodaysPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  };

  const handleToAddTodaysPlan = () => {
    setTodaysPlan((previousWorkouts) =>
      previousWorkouts.some(({ id }) => id === workout.id)
        ? previousWorkouts
        : [...previousWorkouts, workout]
    );
    toast.success("Workout added to today's plan!");
  };

  return (
    <div>
      <button onClick={handleToAddTodaysPlan} className="inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#D5FF3D] hover:shadow-lg hover:shadow-[#C2F800]/20 cursor-pointer">
        <FaCalendarPlus />
        {`Add to today's plan`}
      </button>
    </div>
  );
};

export default TodaysPlanBtn;
