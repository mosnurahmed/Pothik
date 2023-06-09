import { apiSlice } from "../api/apiSlice";

export const addPackageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPackage: builder.mutation({
      query: (data) => ({
        url: "/packages",
        method: "POST",
        body: data,
      }),
    }),
    getPackage: builder.query({
      query: () => "/packages",
    }),
    getSinglePackage: builder.query({
      query: (name) => `/packages?name_like=${name}`,
    }),
    updatePackage: builder.mutation({
      query: ({ id, data }) => ({
        url: `/packages/${id}`,
        method: "PATCH",
        body: data,
      }),
    
    }),
    getIdPack: builder.query({
      query: (id) => `/packages/${id}`,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;

        localStorage.setItem("pkg", JSON.stringify(result.data));
      },
    }),
  }),
});

export const {
  useAddPackageMutation,
  useGetPackageQuery,
  useGetSinglePackageQuery,
  useUpdatePackageMutation,
  useGetIdPackQuery,
} = addPackageApi;
