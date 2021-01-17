import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { SearchResultsList } from "../SearchResultsList";

const Home = ({ searchResults, query }) => {
  return (
    <div>
      {!!query ? (
        !!searchResults &&
        searchResults[0].Response === "True" && (
          <SearchResultsList searchResults={searchResults} />
        )
      ) : (
        <div>your nomination list</div>
      )}
    </div>
  );
};

Home.propTypes = {};

export default Home;
