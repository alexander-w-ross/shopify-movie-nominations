import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./NavStyles";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import { MovieContext } from "../../providers/movieProvider";
import Banner from "react-js-banner";

const Nav = ({ setSearchResults, setQuery, query }) => {
  const classes = useStyles();
  const { nominations } = useContext(MovieContext);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "white", flexGrow: "1" }}
          >
            <div className={classes.titleRoot}>
              <Typography
                className={classes.title}
                variant="h6"
                noWrap
                style={{ cursor: "pointer" }}
                onClick={() => setQuery("")}
              >
                Movie Nominations
              </Typography>
              <Typography className={classes.title} variant="subtitle1" noWrap>
                {nominations.length} / 5
              </Typography>
            </div>
          </Link>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <Search
              setSearchResults={setSearchResults}
              setQuery={setQuery}
              query={query}
            />
          </div>
        </Toolbar>
      </AppBar>

      {nominations.length >= 5 ? (
        <Banner
          title="You've Nominated 5 Movies!!"
          visibleTime={3000}
          css={{ color: "#0330FC" }}
        />
      ) : null}
    </div>
  );
};
export default Nav;
