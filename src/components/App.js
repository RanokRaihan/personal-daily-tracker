import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useThemeCheck from "../hooks/useThemeCheck";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Stats from "../pages/Stats";
import Layout from "./Layout";

const App = () => {
  const themeChecked = useThemeCheck();
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    if (themeChecked) {
      const root = window.document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, [theme, themeChecked]);

  return (
    themeChecked && (
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/stats' element={<Stats />} />
          </Routes>
        </Layout>
      </Router>
    )
  );
};

export default App;
