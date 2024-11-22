import { combineReducers } from "redux";
import postsReducer from "./reducers/postsSlice";
import searchDataReducer from "./reducers/searchSlice";

const rootReducer = combineReducers({
	postsReducer,
	searchDataReducer,
});

export default rootReducer;
