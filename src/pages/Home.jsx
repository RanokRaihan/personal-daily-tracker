import React from "react";
import { useSelector } from "react-redux";
import ExpenseTrack from "../components/ExpenseTrack";
import DailyTrackerLoader from "../components/loader/DailyTrackerLoader";
import UpdateWallet from "../components/UpdateWallet";
import { useFetchSingleTrackQuery } from "../features/track/trackApi";
import { genGreeting } from "../lib/genGreetings";
import monthYearGen from "../lib/monthYearGen";
import { nameMaker } from "../lib/nameMaker";
import DailyTrack from "./../components/DailyTrack";
const Home = () => {
  // check if data is available
  const { email, displayName } = useSelector((state) => state?.auth?.user) || {};

  // create a query object
  const query = {
    email,
    date: new Date().getDate().toString(),
    monthYear: monthYearGen(),
  };

  const { data, isLoading } = useFetchSingleTrackQuery(query);

  return (
    <div className='px-4 pb-4 space-y-8 max-w-screen-md mx-auto'>
      <div className='mt-4 space-y-2'>
        <h1 className=' font-bold'>
          <p className='text-2xl text-emerald-600 dark:text-emerald-400'>{genGreeting()} </p>
          <p className='text-4xl text-rose-600 dark:text-rose-500'>{nameMaker(displayName)}</p>
        </h1>
        <h2 className='text-lg'>{new Date().toDateString()}</h2>
      </div>

      <div className='space-y-4'>
        <h1 className='border-b-[1px] border-gray-400 py-2 text-lg text-emerald-600 dark:text-emerald-400'>
          Track your daily doing
        </h1>
        {isLoading ? <DailyTrackerLoader /> : <DailyTrack data={data} />}
      </div>

      <div className='space-y-4'>
        <h1 className='border-b-[1px] border-gray-400 py-2 text-lg text-emerald-600 dark:text-emerald-400'>
          Track your Every Expense
        </h1>
        <ExpenseTrack />
      </div>

      <div className='space-y-4'>
        <h1 className='border-b-[1px] border-gray-400 py-2 text-lg text-emerald-600 dark:text-emerald-400'>
          Update your wallet
        </h1>
        <UpdateWallet />
      </div>
    </div>
  );
};

export default Home;
