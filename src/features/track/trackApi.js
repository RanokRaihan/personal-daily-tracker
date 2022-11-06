import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase";
import { apiSlice } from "../api/apiSlice";

const trackApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addTrack: builder.mutation({
      queryFn: async (data) => {
        try {
          const docRef = await addDoc(collection(db, "dailyTracks"), data);

          return { data: { ...data, id: docRef.id } };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
    fetchSingleTrack: builder.query({
      queryFn: async ({ email, date, monthYear }) => {
        try {
          const trackRef = collection(db, "dailyTracks");

          const trackQuery = query(
            trackRef,
            where("user", "==", email),
            where("date", "==", date),
            where("monthYear", "==", monthYear)
          );

          const trackSnap = await getDocs(trackQuery);

          const trackData = [];

          trackSnap.forEach((doc) => {
            trackData.push({ ...doc.data(), id: doc.id });
          });

          //   console.log(trackData);
          return { data: trackData[0] };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
    fetchAllTrack: builder.query({
      queryFn: async () => {
        // console.log({ email, date, monthYear });
        //
        try {
          //   const trackRef = collection(db, "dailyTracks");
          //   const trackQuery = query(
          //     trackRef,
          //     where("user", "==", email),
          //     where("date", "==", date),
          //     where("monthYear", "==", monthYear)
          //   );
          const querySnapshot = await getDocs(collection(db, "dailyTracks"));
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
          });
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
    updateTrack: builder.mutation({
      queryFn: async ({ id, data }) => {
        try {
          const trackRef = doc(db, "dailyTracks", id);
          await updateDoc(trackRef, { data });
          return { data: "update Success" };
        } catch (error) {
          return { error: error.messge };
        }
      },
    }),
  }),
});

export const { useAddTrackMutation, useUpdateTrackMutation, useFetchSingleTrackQuery, useFetchAllTrackQuery } =
  trackApi;
