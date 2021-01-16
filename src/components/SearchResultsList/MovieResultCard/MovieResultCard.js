// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
//   root: {
//     margin: "10px",
//     maxWidth: 345,
//   },
//   media: {
//     height: 500,
//   },
// });

// const MovieResultCard = ({ Poster, Title, Year }) => {
//   const classes = useStyles();
//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia className={classes.media} image={Poster} title={Title} />
//         <CardContent>
//           <Typography
//             gutterBottom
//             variant="h5"
//             component="h2"
//             style={{ backgroundColor: "#320b86" }}
//           >
//             {Title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Year: {Year}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// MovieResultCard.propTypes = {};

// export default MovieResultCard;
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 400,
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
                <Button variant="outlined">Nominate</Button>
              </Grid>
            </Grid>
            {/* <Grid item>
              <Typography variant="subtitle1">$19.00</Typography>
            </Grid> */}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default MovieResultCard;
