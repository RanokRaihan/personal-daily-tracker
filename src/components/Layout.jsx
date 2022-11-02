import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className=' w-full before:content-start before:block before:w-full before:h-16 dark:bg-slate-800 dark:text-white min-h-screen'>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
