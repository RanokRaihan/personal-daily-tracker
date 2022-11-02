import { apiSlice } from "./../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      queryFn: () => {},
    }),
    register: builder.mutation({
      queryFn: () => {},
    }),
  }),
});

export const { useLoginMutation } = authApi;
