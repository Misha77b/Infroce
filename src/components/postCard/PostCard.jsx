import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { cardSxStyle } from "./postCarsSxStyles";
import LikeAndDislikeBtns from "./components/LikeAndDislikeBtns";

const PostCard = ({ id, title, body }) => {
  return (
    <Box sx={cardSxStyle}>
      {/* text */}
      <Typography sx={{ textAlign: "center", fontFamily: "Jost" }} variant="h6">
        Post №{id}
      </Typography>
      <Typography
        variant="h6"
        sx={{ marginBottom: "10px", fontFamily: "Jost" }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontFamily: "Gabarito" }}>{body}</Typography>

      {/* Like and Dislike btns */}
      <LikeAndDislikeBtns />
    </Box>
  );
};

export default PostCard;

PostCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
};
