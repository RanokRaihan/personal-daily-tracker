import React from "react";
import RegistrationForm from "../components/RegistrationForm";

const Register = () => {
  return (
    <div className=' min-h-[calc(100vh-4rem)] flex items-start justify-center px-4'>
      <div className='w-full max-w-md space-y-14'>
        <h1 className='text-3xl font-black text-center text-blue-700  mt-10'>Create an account</h1>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Register;
