import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Label from "./Label";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [emial, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className='bg-gray-100 border-gray-100 dark:bg-slate-700 p-4 rounded-md w-full'>
      <form action='' className='space-y-4'>
        <div className='space-y-2'>
          <Label>
            Full name<span className='text-rose-700'>*</span>
          </Label>
          <Input
            type='text'
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            placeholder='Enter your Full name'
          />
        </div>
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
            placeholder='Enter a new password'
          />
        </div>
        <div className='space-y-2'>
          <Label>
            Confirm password<span className='text-rose-700'>*</span>
          </Label>
          <Input
            type='Password'
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            placeholder='Confirm your password'
          />
        </div>
        <div>
          <button className='w-full bg-blue-700 text-white rounded-full py-3 font-semibold font-md'>
            Create account
          </button>
        </div>
      </form>
      <div className='mt-4'>
        <p className='space-x-1 text-center'>
          <span> Already have an account?</span>
          <Link className='text-blue-700 dark:text-blue-300' to='/login'>
            Login
          </Link>
          <span>instead.</span>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
