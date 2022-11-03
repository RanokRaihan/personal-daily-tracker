import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../features/auth/authApi";
import Input from "./Input";
import Label from "./Label";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState({
    type: "",
    message: "",
  });

  const [register, { data: user, isLoading, isError, error, isSuccess }] = useRegisterMutation();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName.trim().length === 0) {
      setFormError({ type: "name", message: "Enter your full name" });
    } else if (email.trim().length === 0) {
      setFormError({ type: "email", message: "Enter your email" });
    } else if (password.length < 8) {
      setFormError({ type: "password", message: "password must be at lest 8 charater" });
    } else if (password !== confirmPassword) {
      setFormError({ type: "confirmPassword", message: "password does not match" });
    } else {
      setFormError({ type: "", message: "" });
      register({ fullName, email, password });
    }
  };
  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [error, isError, isLoading, isSuccess, user]);
  return (
    <div className='bg-gray-100 border-gray-100 dark:bg-slate-700 p-4 rounded-md w-full'>
      <form className='space-y-4' onSubmit={handleSubmit}>
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
          {formError.type === "name" && <p className='text-sm text-rose-600 ml-2'>{formError.message}</p>}
        </div>
        <div className='space-y-2'>
          <Label>
            Email<span className='text-rose-700'>*</span>
          </Label>
          <Input type='email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter your Email' />
          {formError.type === "email" && <p className='text-sm text-rose-600 ml-2'>{formError.message}</p>}
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
          {formError.type === "password" && <p className='text-sm text-rose-600 ml-2'>{formError.message}</p>}
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
          {formError.type === "confirmPassword" && <p className='text-sm text-rose-600 ml-2'>{formError.message}</p>}
        </div>
        <div>
          {isError && <p className='text-rose-600'>{error}</p>}
          <button
            disabled={isLoading}
            className='w-full bg-blue-700 text-white rounded-full py-3 font-semibold font-md'
          >
            {isLoading ? "Please wait" : " Create account"}
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
