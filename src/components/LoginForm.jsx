import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleIcon from "../assets/image/google.svg";
import Input from "./Input";
import Label from "./Label";

const LoginForm = () => {
  const [emial, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='bg-gray-100 dark:bg-gray-700 border-gray-100 p-4 rounded-md w-full'>
      <form action='' className='space-y-4'>
        <div className='space-y-2'>
          <Label>
            Email<span className='text-rose-700'>*</span>
          </Label>
          <Input type='email' onChange={(e) => setEmail(e.target.value)} value={emial} placeholder='Enter your Email' />
        </div>
        <div className='space-y-2'>
          <Label>
            Password<span className='text-rose-700'>*</span>
          </Label>
          <Input
            type='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Enter your password'
          />
        </div>

        <div>
          <button type='submit' className='w-full bg-blue-700 text-white rounded-full py-3 font-semibold font-md'>
            Login
          </button>
        </div>
        <div className='flex items-center justify-center gap-5'>
          <span className='w-28 h-[2px] bg-gradient-to-l dark:bg-gradient-to-r from-gray-700 to-gray-300 rounded-tl-[100%] rounded-bl-[100%]'></span>
          <p className=' text-lg font-semibold text-gray-700 dark:text-gray-200'>or</p>
          <span className='w-28 h-[2px] bg-gradient-to-r dark:bg-gradient-to-l from-gray-700 to-gray-300  rounded-tr-[100%] rounded-br-[100%]'></span>
        </div>
        <div>
          <button
            type='button'
            className='flex items-center justify-center gap-2 w-full bg-white text-blue-600 border-2 rounded-full py-3 font-semibold font-md'
          >
            <img src={googleIcon} className='w-6' alt='' /> <span>Login with google</span>
          </button>
        </div>
      </form>
      <div className='mt-4'>
        <p className='space-x-1 text-center'>
          <span> Don't have an account?</span>
          <Link className='text-blue-700 dark:text-blue-400' to='/register'>
            Signup
          </Link>
          <span>now.</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
