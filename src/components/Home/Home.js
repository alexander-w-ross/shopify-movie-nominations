import React from "react";
import { SearchResultsList } from "../SearchResultsList";
import NominationList from "../NominationList/NominationList";

const Home = ({ searchResults, query }) => {
  return (
    <div style={{ height: "100%" }}>
      {!!query ? (
        !!searchResults &&
        searchResults[0].Response === "True" && (
          <SearchResultsList searchResults={searchResults} />
        )
      ) : (
        <NominationList />
      )}
    </div>
  );
};

Home.propTypes = {};

export default Home;
