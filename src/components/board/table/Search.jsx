import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Stack, Input, IconButton } from "@mui/material";

function Search({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.filter.value);
    //console.log('μμΉ submmit')
  };

  return (
    <div className="searchBox">
    <form onSubmit={handleSubmit}>
      <Stack direction={'row'}>
      <Input className="search_input"
            name="filter" 
            autoComplete="off" 
            placeholder="κ²μ" />
      <IconButton color="primary" aria-label="upload picture" component="span">
          <SearchIcon />
      </IconButton>
      </Stack>
    </form>
    </div>
  );
}

export default Search;