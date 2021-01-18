import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import NominateButton from "../../NominateButton/NominateButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "50px auto",
    maxWidth: 800,
  },
  image: {
    alignItems: "baseline",
    width: 128,
    height: 200,
  },
  img: {
    margin: "0",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));
const MovieDetails = (props) => {
  const classes = useStyles();
  const [movieDetails, setMovieDetails] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;

  //   const [movieID, setMovieID] = useState(null);
  let movieID = null;
  const { imdbID } = props.match.params;
  movieID = imdbID;
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        // setDeets(Object.keys(data));
      });
  }, [movieID]);

  return (
    <div className={classes.root}>
      {!!movieDetails ? (
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt={`${movieDetails.Title} Poster`}
                  src={movieDetails.Poster}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h6">
                    {movieDetails.Title} - ({movieDetails.Year})
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {movieDetails.Plot}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Actors: {movieDetails.Actors}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Directors: {movieDetails.Director}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Runtime: {movieDetails.Runtime}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Genre: {movieDetails.Genre}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                    }}
                  >
                    {movieDetails.Ratings.map(({ Source, Value }, i) => (
                      <div key={i} style={{ marginRight: "10px" }}>
                        {Source} - {Value}
                      </div>
                    ))}
                  </Typography>
                </Grid>
                <Grid item>
                  <NominateButton
                    Title={movieDetails.Title}
                    Poster={movieDetails.Poster}
                    Year={movieDetails.Year}
                    imdbID={imdbID}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

MovieDetails.propTypes = {};

export default MovieDetails;
