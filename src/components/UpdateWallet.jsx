import React from "react";

const UpdateWallet = () => {
  return (
    <div className='space-y-4'>
      <div className='flex gap-2'>
        <input
          type='number'
          className='basis-2/5 border-gray-400 dark:bg-slate-700 dark:border-slate-600 border block w-full text-lg rounded-md px-2 py-2 focus:outline-none focus:ring-1 dark:focus:ring-sky-300 placeholder:text-md'
          placeHolder='Amount'
        />
        <input
          type='text'
          className=' border-gray-400 dark:bg-slate-700 dark:border-slate-600 border block w-full text-lg rounded-md px-2 py-2 focus:outline-none focus:ring-1 dark:focus:ring-sky-300 placeholder:text-md'
          placeHolder='add a note (optional)'
        />
      </div>
      <div>
        <button className='w-full bg-blue-700 text-white rounded-full py-3 font-semibold font-md'>add to wallet</button>
      </div>
    </div>
  );
};

export default UpdateWallet;
