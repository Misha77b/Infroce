import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          marginBottom: "30px",
          background: "transparent",
        }}
      >
        <Toolbar
          sx={{
            display: "felx",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "black",
              fontFamily: "Autour One",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            Inforce
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
