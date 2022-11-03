import React from "react";
import { useSelector } from "react-redux";
import ExpenseTrack from "../components/ExpenseTrack";
import UpdateWallet from "../components/UpdateWallet";
import DailyTrack from "./../components/DailyTrack";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className='px-4 pb-4 space-y-8 max-w-screen-md mx-auto'>
      <div className='mt-4 space-y-2'>
        <h1 className='text-3xl font-bold'>
          <span className='text-emerald-600 dark:text-emerald-400'>Welcome, </span>
          <span className='text-rose-600 dark:text-rose-500'>{user?.displayName}</span>
        </h1>
        <h2>
          Monday, 31<sup>th</sup> October, 2022
        </h2>
      </div>

      <div className='space-y-4'>
        <h1 className='border-b-[1px] border-gray-400 py-2 text-lg text-emerald-600 dark:text-emerald-400'>
          Track your daily doing
        </h1>
        <DailyTrack />
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
