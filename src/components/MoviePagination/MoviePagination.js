import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useStyles } from "./MoviePaginationStyles";

const MoviePagination = ({ moviesPerPage, totalMovies, setCurrentPage }) => {
  const classes = useStyles();
  const pageNumbers = Math.ceil(totalMovies / moviesPerPage);

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={pageNumbers}
        variant="outlined"
        // color="secondary"
        shape="rounded"
        onChange={handlePaginationChange}
      />
    </div>
  );
};

MoviePagination.propTypes = {};

export default MoviePagination;
