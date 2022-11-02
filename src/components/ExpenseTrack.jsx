import React from "react";

const ExpenseTrack = () => {
  return (
    <div className='space-y-4'>
      <div className='flex gap-2'>
        <select
          name=''
          id=''
          className=' border-gray-400 bg-transparent dark:bg-slate-700 dark:border-slate-600 border block w-full text-lg rounded-md px-2 py-2 focus:outline-none focus:ring-1 dark:focus:ring-sky-300 placeholder:text-md'
        >
          <option selected disabled>
            select category
          </option>
          <option value='transport'>Transport</option>
          <option value='Education'>Education</option>
          <option value='Snacks'>Snacks</option>
          <option value='Cold drinks'>Cold drinks</option>
          <option value='Meal'>Meal</option>
          <option value='Room Rent'>Room Rent</option>
          <option value='Mess meal'>Mess meal</option>
        </select>
        <input
          type='number'
          className=' border-gray-400 dark:bg-slate-700 dark:border-slate-600 border block w-full text-lg rounded-md px-2 py-2 focus:outline-none focus:ring-1 dark:focus:ring-sky-300 placeholder:text-md'
          placeholder='Amount'
        />
      </div>
      <div>
        <input
          type='text'
          className=' border-gray-400 dark:bg-slate-700 dark:border-slate-600 border block w-full text-lg rounded-md px-2 py-2 focus:outline-none focus:ring-1 dark:focus:ring-sky-300 placeholder:text-md'
          placeHolder='add a note (optional)'
        />
      </div>
      <div>
        <button className='w-full bg-blue-700 text-white rounded-full py-3 font-semibold font-md'>
          add transaction
        </button>
      </div>
    </div>
  );
};

export default ExpenseTrack;
