import React, { useContext } from "react";
import { MovieContext } from "../../providers/movieProvider";
import { Grid, Typography } from "@material-ui/core";
import MovieResultCard from "../SearchResultsList/MovieResultCard/MovieResultCard";

const NominationList = (props) => {
  const { nominations } = useContext(MovieContext);
  return (
    <div style={{ height: "100vh" }}>
      {nominations.length > 0 ? (
        <>
          {" "}
          <Typography
            variant="h2"
            style={{ textAlign: "center", color: "#ba000d" }}
          >
            {" "}
            Your Nominations
          </Typography>
          <Grid container direction="row" justify="center" alignItems="center">
            {/* <Grid item>
          </Grid> */}
            {nominations.map(({ id, title, poster, year }) => (
              <Grid item style={{ marginTop: "15px" }}>
                <MovieResultCard
                  Title={title}
                  Poster={poster}
                  Year={year}
                  imdbID={id}
                />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          Search for a movie to nominate above!
        </h2>
      )}
    </div>
  );
};

NominationList.propTypes = {};

export default NominationList;
