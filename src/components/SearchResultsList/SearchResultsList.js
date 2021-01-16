import React from "react";
import PropTypes from "prop-types";

const SearchResultsList = ({ searchResults }) => {
  return (
    <div>
      {searchResults[0].Response === "True" ? (
        searchResults[0].Search.map(({ Poster, Title, Year }) => {
          return (
            <>
              <div>{Poster}</div>
              <div>{Title}</div>
              <div>{Year}</div>
            </>
          );
        })
      ) : (
        <div>{searchResults[0].Error}</div>
      )}
    </div>
  );
};

SearchResultsList.propTypes = {};

export default SearchResultsList;
