import React from "react";
import { Box, IconButton } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { likeDislikeBtns } from "../postCarsSxStyles";

const LikeAndDislikeBtns = () => {
  return (
    <Box sx={likeDislikeBtns}>
      <IconButton
        sx={{
          "&:hover": {
            color: "green",
          },
        }}
      >
        <ThumbUpOffAltIcon />
      </IconButton>
      <IconButton
        sx={{
          "&:hover": {
            color: "red",
          },
        }}
      >
        <ThumbDownOffAltIcon />
      </IconButton>
    </Box>
  );
};

export default LikeAndDislikeBtns;
