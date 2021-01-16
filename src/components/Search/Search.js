import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { InputBase } from "@material-ui/core";
import { useStyles } from "./SearchStyles";

const Search = ({ setSearchResults, setQuery, query }) => {
  const classes = useStyles();
  //   const apiURL = "http://www.omdbapi.com/?s=${query}&apikey=cdb9050a";

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  const handleSearch = (query) => {
    fetch(
      `http://www.omdbapi.com/?s=${query}&page=1&type=movie&apikey=cdb9050a`
    )
      // fetch(`http://www.omdbapi.com/?t=${query}&type=movie&apikey=cdb9050a`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults([data]);
        console.log(data);
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
      {console.log(`query: ${query}`)}
    </div>
  );
};

Search.propTypes = {};

export default Search;
