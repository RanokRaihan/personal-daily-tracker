import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTheme } from "../features/theme/themeSlice";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (theme === "light") {
      dispatch(setTheme("dark"));
      localStorage.setItem("theme", "dark");
    } else {
      dispatch(setTheme("light"));
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMenu = () => {
    setIsMounted((prev) => !prev);
    if (!showMenu) setShowMenu(true);
  };

  const handleAnimation = () => {
    if (!isMounted) setShowMenu(false);
  };
  const navigateTo = (url) => {
    toggleMenu();
    navigate(url);
  };
  return (
    <div className='w-full shadow-md fixed top-0 left-0 px-4 h-16 bg-white dark:bg-slate-900'>
      <div className='mx-auto flex items-center justify-between h-full'>
        <div className='cursor-pointer' onClick={() => navigate("/")}>
          <h1 className='text-4xl font-semibold dark:text-white'>Logo</h1>
        </div>
        {showMenu && (
          <div
            onAnimationEnd={handleAnimation}
            className={`absolute right-4 top-14 bg-gray-100 dark:bg-gray-700 rounded-md border-gray-200 text-lg shadow-md w-40 p-2 ${
              isMounted ? "animate-slidein" : "animate-slideout"
            }`}
          >
            <ul className='font-semibold space-y-1 text-sky-700 dark:text-sky-400 '>
              <li className='cursor-pointer' onClick={() => navigateTo("/login")}>
                Login
              </li>
              <li className='cursor-pointer' onClick={() => navigateTo("/register")}>
                Register
              </li>
              <li className='cursor-pointer' onClick={() => navigateTo("/stats")}>
                Stats
              </li>
            </ul>
            <hr />
            <div className='flex items-center gap-2'>
              <p>mode:</p>
              <button className='border  rounded-md px-1 text-sm ' onClick={toggleTheme}>
                {theme}
              </button>
            </div>
          </div>
        )}

        <div className={`${!isMounted ? "space-y-2" : "h-8"} relative`} role='button' onClick={toggleMenu}>
          <div
            className={`w-8 h-[2px] bg-gray-900 dark:bg-white  transition-transform ${
              isMounted && "absolute top-1/2 rotate-45 rounded-[100%]"
            }`}
          ></div>
          <div className={`w-8 h-[2px] bg-gray-900  dark:bg-white ${isMounted && "opacity-0"}`}></div>
          <div
            className={`w-8 h-[2px] bg-gray-900 dark:bg-white  transition-transform   ${
              isMounted && "absolute top-1/2 -rotate-45 rounded-[100%]"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
