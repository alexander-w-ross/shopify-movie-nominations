import React from "react";
import MovieResultCard from "./MovieResultCard/MovieResultCard";

const SearchResultsList = ({ searchResults }) => {
  return (
    <div>
      {!!searchResults && searchResults[0].Response === "True" ? (
        searchResults[0].Search.map(({ Poster, Title, Year, imdbID }) => {
          return (
            <div style={{ margin: "10px 10px" }}>
              <MovieResultCard
                Poster={Poster}
                Title={Title}
                Year={Year}
                imdbID={imdbID}
              />
            </div>
          );
        })
      ) : (
        <div>{!!searchResults && searchResults[0].Error}</div>
      )}
    </div>
  );
};

export default SearchResultsList;
