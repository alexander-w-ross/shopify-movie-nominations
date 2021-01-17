import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { MovieContext } from "../../providers/movieProvider";

const NominateButton = ({ Title, Poster, Year, imdbID }) => {
  const { addMovie, deleteMovie, nominations } = useContext(MovieContext);
  let isNominated =
    nominations.filter((el) => el.id === imdbID).length > 0 ? true : false;
  // let bgcolor = isNominated ? "red" : "green";
  return (
    <div>
      {nominations.length < 5 ? (
        <Button
          variant="outlined"
          style={{
            backgroundColor: isNominated ? "red" : "green",
            color: "white",
          }}
          onClick={
            isNominated || nominations.length >= 5
              ? () => deleteMovie(imdbID)
              : () =>
                  addMovie({
                    id: imdbID,
                    title: Title,
                    year: Year,
                    poster: Poster,
                  })
          }
        >
          {isNominated ? <>Delete</> : <>Nominate</>}
        </Button>
      ) : (
        <Button
          variant="outlined"
          disabled={isNominated ? false : true}
          style={{
            backgroundColor: isNominated ? "red" : "darkgrey",
            color: isNominated ? "white" : "black",
          }}
          onClick={() => deleteMovie(imdbID)}
        >
          {isNominated ? <>Delete</> : <>Nominate</>}
        </Button>
      )}
    </div>
  );
};

NominateButton.propTypes = {};

export default NominateButton;
