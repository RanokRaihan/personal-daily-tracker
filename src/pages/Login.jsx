import React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className=' min-h-[calc(100vh-4rem)] flex items-start justify-center px-4 '>
      <div className='w-full max-w-md space-y-14'>
        <h1 className='text-2xl font-black text-center dark:text-blue-400 text-blue-700 mt-10'>
          Login to your account
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
