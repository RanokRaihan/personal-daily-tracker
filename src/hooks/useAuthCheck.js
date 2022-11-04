import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";
import { auth } from "../firebase";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(
          userLoggedIn({
            accessToken: user.accessToken,
            user: {
              displayName: user.displayName,
              email: user.email,
              uid: user.uid,
            },
          })
        );
      }
      setAuthChecked(true);
    });

    // cleanup
    return unsubscribe;
  }, [authChecked, dispatch]);

  return authChecked;
}
