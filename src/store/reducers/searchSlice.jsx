import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  searchData: [],
  loader: true,
};

export const fetchSearchData = createAsyncThunk(
  "searchData/fetchData",
  async ({ params }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?${params}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => {
        console.warn(err);
      });
    return response;
  }
);

export const searchDataSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchData.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(fetchSearchData.fulfilled, (state, action) => {
      state.searchData = action.payload;
      state.loader = false;
    });
  },
});

export default searchDataSlice.reducer;
