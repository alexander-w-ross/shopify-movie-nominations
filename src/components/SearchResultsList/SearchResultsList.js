import React, { useEffect, useState } from "react";
import MoviePagination from "../MoviePagination/MoviePagination";
import MovieResultCard from "./MovieResultCard/MovieResultCard";

const SearchResultsList = ({ searchResults }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  let currentMovies = searchResults[0].Search.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );
  return (
    <div style={{ height: "100%" }}>
      {currentMovies.map(({ Poster, Title, Year, imdbID }) => {
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
      })}
      <MoviePagination
        moviesPerPage={moviesPerPage}
        totalMovies={searchResults[0].Search.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default SearchResultsList;
