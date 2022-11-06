import React from "react";
import { useFetchAllTrackQuery } from "../features/track/trackApi";
import RecordContainer from "./../components/RecordContainer";

const Stats = () => {
  const { data } = useFetchAllTrackQuery();
  console.log(data);
  return (
    <div className='max-w-screen-md mx-auto space-y-8 px-4'>
      <div className='mt-5 pb-2 border-b dark:border-gray-500'>
        <h1 className='text-3xl font-semibold text-emerald-600'>All Records</h1>
        <h2 className='text-lg font-semibold text-gray-600 dark:text-gray-300'>October, 2022</h2>
      </div>

      <RecordContainer />
    </div>
  );
};

export default Stats;
