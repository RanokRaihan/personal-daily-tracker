import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../features/theme/themeSlice";

export default function useThemeCheck() {
  const [themeCheck, setThemeCheck] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      dispatch(setTheme(localTheme));
    }
    setThemeCheck(true);
  }, [dispatch]);
  return themeCheck;
}
