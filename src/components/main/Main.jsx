import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useLocationParams from "../../hooks/useLocationParams";
import { Box } from "@mui/material";
import { fetchPosts } from "../../store/reducers/postsSlice";
import PostsList from "../postsList/PostsList";
import Loader from "../loader/Loader";
import PaginationNav from "../pagination/PaginationNav";
import Search from "../search/Search";

const Main = () => {
	const dispatch = useDispatch();
	const [search, setSearch] = useSearchParams();
	const { params } = useLocationParams();

	// pagination
	const [pageNumber, setPageNumber] = useState(1);
	const currentPage = search.get("_page");

	const loading = useSelector((state) => state.postsReducer.loader);
	const posts = useSelector((state) => state.postsReducer.posts);
	// console.log(posts);
	// console.log(`Fetch posts data:`, posts);

	useEffect(() => {
		if (currentPage === null) {
			setPageNumber(currentPage ? parseInt(currentPage) : 1);
		} else {
			setPageNumber(currentPage ? parseInt(currentPage) : 1);
		}
	}, [currentPage]);

	useEffect(() => {
		dispatch(fetchPosts({ params }));
		window.scrollTo({ top: 0 });
	}, [currentPage]);

	return (
		<Box
			className="main"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<Search />
			{loading ? (
				<Loader />
			) : (
				<>
					<PostsList postsdata={posts} />
					<PaginationNav
						pageNumber={pageNumber}
						setPageNumber={setPageNumber}
					/>
				</>
			)}
		</Box>
	);
};

export default Main;
