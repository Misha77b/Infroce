import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	posts: {},
	loader: true,
};

export const fetchPosts = createAsyncThunk(
	"posts/fetchData",
	async ({ params }) => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts?${params}&_limit=10`,
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

export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPosts.pending, (state) => {
			state.loader = true;
		});
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.posts = action.payload;
			state.loader = false;
		});
	},
});

export default postsSlice.reducer;
