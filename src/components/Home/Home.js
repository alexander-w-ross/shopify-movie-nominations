import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { SearchResultsList } from "../SearchResultsList";

const Home = ({ searchResults, query }) => {
  console.log("search: ", searchResults);
  return (
    <div>
      {!!query ? (
        <SearchResultsList searchResults={searchResults} />
      ) : (
        <div>your nomination list</div>
      )}
    </div>
  );
};

Home.propTypes = {};

export default Home;
