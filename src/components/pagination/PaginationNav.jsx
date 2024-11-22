import React from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";

const PaginationNav = ({ pageNumber, setPageNumber }) => {
  const [search, setSearch] = useSearchParams();

  const handlePageChange = (_, num) => {
    setPageNumber(num);

    search.set("_page", num);
    setSearch(search);
    if (num === 1) {
      search.delete("_page");
      setSearch(search);
    }
  };

  return (
    <Stack sx={{ margin: "30px auto 20px" }}>
      <Pagination
        count={10 || 0}
        page={pageNumber}
        onChange={handlePageChange}
        size="large"
      />
    </Stack>
  );
};

export default PaginationNav;
