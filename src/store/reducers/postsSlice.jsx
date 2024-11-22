import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	posts: [],
	loader: true,
	favorites: [],
};

export const fetchPosts = createAsyncThunk(
	"posts/fetchData",
	async ({ params }) => {
		const queryParams = params || "";
		// console.log("params slice", params);
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts?${queryParams}&_limit=9`,
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
	reducers: {
		addToFavorites: (state, action) => {
			const post = state.posts.find((post) => post.id === action.payload);
			if (post && !state.favorites.some((fav) => fav.id === post.id)) {
				state.favorites.push(post); // Додаємо об'єкт поста до "Вибраного"
			}
		},
		removeFromFavorites: (state, action) => {
			state.favorites = state.favorites.filter(
				(post) => post.id !== action.payload
			); // Видаляємо об'єкт поста за ID
		},
	},
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

export const { addToFavorites, removeFromFavorites } = postsSlice.actions;
export default postsSlice.reducer;
