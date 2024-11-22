import React from "react";
import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { iconButtonStyle } from "../../searchSxStyles";

const SearchField = ({ value, setValue, setSuggestionsOpened }) => {
	const handleChange = (e) => {
		setValue(e.target.value);
		setSuggestionsOpened(true);
		if (e.target.value === "") {
			setSuggestionsOpened(false);
		}
	};

	return (
		<Box
			sx={{
				marginBottom: "30px",
				position: "relative",
				width: "470px",
			}}>
			<TextField
				value={value}
				onChange={handleChange}
				fullWidth
				type="search"
				placeholder="Search..."
			/>
			<IconButton sx={iconButtonStyle} color="primary">
				<SearchIcon />
			</IconButton>
		</Box>
	);
};

export default SearchField;
