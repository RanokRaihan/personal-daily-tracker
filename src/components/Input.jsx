import React from "react";

const Input = ({ ...rest }) => {
  return (
    <input
      required
      className='text-gray-700 dark:text-gray-100 dark:bg-slate-600 border border-gray-200 dark:border-gray-500  block w-full text-xl rounded-md px-2 py-2 focus:outline-none focus:ring-1 dark:focus:ring-sky-300 placeholder:text-sm'
      {...rest}
    />
  );
};

export default Input;
