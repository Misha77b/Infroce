import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import PostCard from "../postCard/PostCard";

const PostsList = ({ postsdata }) => {
  return (
    <Box
      sx={{
        width: "80%",
        "@media screen and (max-width: 600px)": {
          width: "100%",
        },
      }}
    >
      {/* cards grid container */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* render cards */}
        {postsdata.map((post) => {
          return (
            <Grid
              key={post.id}
              item
              sm={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PostCard id={post.id} title={post.title} body={post.body} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PostsList;

PostsList.propTypes = {
  postsdata: PropTypes.array,
};
