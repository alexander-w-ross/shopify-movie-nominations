import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
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
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item style={{ marginTop: "15px" }}>
                <MovieResultCard
                  Poster={Poster}
                  Title={Title}
                  Year={Year}
                  imdbID={imdbID}
                />
              </Grid>
            </Grid>
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
