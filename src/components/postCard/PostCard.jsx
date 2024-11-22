import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, IconButton } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { cardSxStyle, likeBtn } from "./postCarsSxStyles";
import { useDispatch, useSelector } from "react-redux";
import {
	addToFavorites,
	removeFromFavorites,
} from "../../store/reducers/postsSlice";

const PostCard = ({ id, title, body }) => {
	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.postsReducer.favorites);

	const toggleFavorite = (id) => {
		if (favorites.some((fav) => fav.id === id)) {
			dispatch(removeFromFavorites(id));
		} else {
			dispatch(addToFavorites(id));
		}
	};

	return (
		<Box sx={cardSxStyle}>
			{/* text */}
			<Typography sx={{ textAlign: "center", fontFamily: "Jost" }} variant="h6">
				Post №{id}
			</Typography>
			<Typography
				variant="h6"
				sx={{ marginBottom: "10px", fontFamily: "Jost" }}>
				{title}
			</Typography>
			<Typography sx={{ fontFamily: "Gabarito" }}>{body}</Typography>

			{/* Like btn */}
			<Box sx={likeBtn}>
				<IconButton
					sx={{
						"&:hover": {
							color: "green",
						},
					}}>
					<ThumbUpOffAltIcon />
				</IconButton>
			</Box>
		</Box>
	);
};

export default PostCard;

PostCard.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	body: PropTypes.string,
};
