'use client';
import { IWorkout } from '@/app/type';
import { WorkoutContext } from '@/context/WorkoutContext';
import React from 'react';

const MyPlanCount = () => {
  const { todaysPlan } = React.useContext(WorkoutContext) as {
    todaysPlan: IWorkout[];
  };

  return <span>{todaysPlan.length}</span>;
};

export default MyPlanCount;