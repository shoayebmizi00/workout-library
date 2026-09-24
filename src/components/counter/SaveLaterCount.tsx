'use client';
import { IWorkout } from '@/app/type';
import { WorkoutContext } from '@/context/WorkoutContext';
import React from 'react';

const SaveLaterCount = () => {
  const { savedWorkouts } = React.useContext(WorkoutContext) as {
    savedWorkouts: IWorkout[];
  };

  return <span>{savedWorkouts.length}</span>;
};

export default SaveLaterCount;