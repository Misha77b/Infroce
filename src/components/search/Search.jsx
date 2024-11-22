import React, { useState, useEffect } from "react";
import { suggestionsBoxStyle } from "./searchSxStyles";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Box, IconButton, TextField } from "@mui/material";
import SearchField from "./components/searchField/SearchField";
import Suggestions from "./components/suggestions/Suggestions";
import { fetchSearchData } from "../../store/reducers/searchSlice";

const Search = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [suggestionsOpened, setSuggestionsOpened] = useState(false);

  const searchData = useSelector((state) => state.searchDataReducer.searchData);
  console.log(`Search data:`, searchData);

  useEffect(() => {
    let params = `q=${searchValue}`;
    if (searchValue !== "") {
      dispatch(fetchSearchData({ params }));
    } else return;
  }, [searchValue]);

  return (
    <Box sx={{ position: "relative" }}>
      <SearchField
        value={searchValue}
        setValue={setSearchValue}
        setSuggestionsOpened={setSuggestionsOpened}
      />
      {suggestionsOpened ? (
        <Box sx={suggestionsBoxStyle}>
          {searchData.map((item) => {
            return <Suggestions id={item.id} title={item.title} />;
          })}
        </Box>
      ) : null}
    </Box>
  );
};

export default Search;
