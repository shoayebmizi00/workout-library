import { IWorkout } from "@/app/type";
import WorkoutCard from "@/components/WorkoutCard";
import React from "react";

const fitLogResponse = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

const WorkOut = async () => {
  const data = await fitLogResponse();
  return (
    <section className="container mx-auto my-20">
      <div className="mb-10 px-3">
        <h2 className="text-4xl font-bold">The Library</h2>
        <p className="text-xl mt-1">Twelve lifts covering every major muscle group.</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-2">
        {data.slice(0, 9).map((singleData: IWorkout) => {
          return <WorkoutCard key={singleData.id} singleData={singleData} />;
        })}
      </div>
    </section>
  );
};

export default WorkOut;
