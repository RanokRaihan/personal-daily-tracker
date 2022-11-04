import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import useThemeCheck from "../hooks/useThemeCheck";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Stats from "../pages/Stats";
import PrivateRoute from "../routes/PrivateRoute";
import useAuthCheck from "./../hooks/useAuthCheck";
import PublicRoute from "./../routes/PublicRoute";
import Layout from "./Layout";

const App = () => {
  const themeChecked = useThemeCheck();
  const authChecked = useAuthCheck();
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

  return !authChecked ? (
    <h1>Checking authentication...</h1>
  ) : (
    <Router>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path='/login'
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path='/register'
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path='/stats'
            element={
              <PrivateRoute>
                <Stats />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
