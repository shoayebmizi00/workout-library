import { IWorkout } from "@/app/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFire, FaStar } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const WorkoutCard = ({ singleData }: { singleData: IWorkout }) => {
  return (
    <Link href={`/pages/workout/${singleData.id}`} className="overflow-hidden rounded-2xl border border-[#2A2D32] bg-[#191B20]">
      {/* Image */}
      <div className="relative h-52 w-full">
        <Image
          src={singleData.image}
          alt={singleData.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {singleData.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-medium text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h2 className="mt-4 text-xl font-black uppercase tracking-wide text-white">
          {singleData.name}
        </h2>

        {/* Equipment */}
        <p className="mt-3 text-sm text-gray-400">
          {singleData.equipment}
        </p>

        {/* Stats */}
        <div className="mt-4 flex items-center gap-5 text-sm text-gray-200">
          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <MdAccessTime className="text-lg text-[#C2F800]" />
            <span>{singleData.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <FaFire className="text-sm text-[#C2F800]" />
            <span>{singleData.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <FaStar className="text-sm text-[#C2F800]" />
            <span>{singleData.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;