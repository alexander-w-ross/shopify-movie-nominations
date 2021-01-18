import React, { useEffect } from "react";
import { InputBase } from "@material-ui/core";
import { useStyles } from "./SearchStyles";

const Search = ({ setSearchResults, setQuery, query }) => {
  const classes = useStyles();
  const apiKey = process.env.REACT_APP_API_KEY;

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  const handleSearch = (query) => {
    fetch(
      `https://www.omdbapi.com/?s=${query}&page=1&type=movie&apikey=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults([data]);
      });
  };

  return (
    <div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        value={query}
        onChange={handleChange}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

Search.propTypes = {};

export default Search;
