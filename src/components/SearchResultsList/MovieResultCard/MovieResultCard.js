import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link } from "react-router-dom";
import NominateButton from "../../NominateButton/NominateButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "left",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "10px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "315px",
    },
    [theme.breakpoints.up("md")]: {
      minWidth: 500,
    },

    // maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const MovieResultCard = ({ Title, Poster, Year, imdbID }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={Title} src={Poster} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {Title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {Year}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ cursor: "pointer" }}
                >
                  <Link to={`/details/${imdbID}`}> See Details </Link>
                </Typography>
              </Grid>
              <Grid item>
                <NominateButton
                  Title={Title}
                  Poster={Poster}
                  Year={Year}
                  imdbID={imdbID}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default MovieResultCard;
