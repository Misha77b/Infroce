import { Box, Typography } from "@mui/material";
import React from "react";

const Suggestions = ({ id, title }) => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        "&:hover": {
          background: "lightgray",
        },
      }}
    >
      <Typography>Post №{id}</Typography>
      <Typography>{title}</Typography>
    </Box>
  );
};

export default Suggestions;
