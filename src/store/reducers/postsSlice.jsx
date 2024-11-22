import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	posts: [],
	loader: true,
};

export const fetchPosts = createAsyncThunk(
	"posts/fetchData",
	async ({ params }) => {
		const queryParams = params || "";
		// console.log("params slice", params);
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts?${queryParams}&_limit=10`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return await response.json();
		} catch (err) {
			console.warn("Fetch error:", err);
			return [];
		}
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
