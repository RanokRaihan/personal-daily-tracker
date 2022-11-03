import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { apiSlice } from "./../api/apiSlice";
import { userLoggedIn, userLoggedOut } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      queryFn: async ({ email, password }) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          return auth.currentUser;
        } catch (error) {
          return { error: error.message };
        }
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          const user = auth.currentUser;
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
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
    register: builder.mutation({
      queryFn: async ({ fullName, email, password }) => {
        try {
          //create new user
          await createUserWithEmailAndPassword(auth, email, password);

          //update profile
          await updateProfile(auth.currentUser, {
            displayName: fullName,
          });
          // console.log(auth.currentUser);
          return auth.currentUser;
        } catch (error) {
          return { error: error.message };
        }
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          const user = auth.currentUser;
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
        } catch (error) {
          return { error: error.message };
        }
      },
    }),

    logout: builder.mutation({
      queryFn: async () => {
        try {
          await signOut(auth);
          return { message: "logout success" };
        } catch (error) {
          return { error: error.message };
        }
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(userLoggedOut());
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApi;
