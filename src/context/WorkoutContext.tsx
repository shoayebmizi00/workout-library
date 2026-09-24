'use client';
import { IWorkout } from '@/app/type';
import React, { useState } from 'react';

type WorkoutContextType = {
  todaysPlan: IWorkout[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  savedWorkouts: IWorkout[];
  setSavedWorkouts: React.Dispatch<React.SetStateAction<IWorkout[]>>;
};

const WorkoutContext = React.createContext<WorkoutContextType | undefined>(undefined);

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [todaysPlan, setTodaysPlan] = useState<IWorkout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<IWorkout[]>([]);

  const sharedState: WorkoutContextType = {
    todaysPlan,
    setTodaysPlan,
    savedWorkouts,
    setSavedWorkouts,
  };

  return (
    <WorkoutContext.Provider value={sharedState}>
      {children}
    </WorkoutContext.Provider>
  );
};

export { WorkoutContext };
export default WorkoutProvider;