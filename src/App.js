import { Container } from "@material-ui/core";
import { MoveToInboxTwoTone } from "@material-ui/icons";
import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { SearchResultsList } from "./components/SearchResultsList";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetails from "./components/SearchResultsList/MovieDetails/MovieDetails";
function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [query, setQuery] = useState("");
  return (
    <div style={{ height: "100%" }}>
      <Nav
        setSearchResults={setSearchResults}
        setQuery={setQuery}
        query={query}
      />
      <Switch>
        <Container
          maxWidth="lg"
          style={{
            outline: "5px dotted red",
            height: "100%",
            padding: "10px 10px",
            backgroundColor: "#F5F2EE",
          }}
        >
          <Route
            path="/"
            render={() => <Home searchResults={searchResults} query={query} />}
            exact
          />
          <Route path="/details/:imdbID" component={MovieDetails} />
          {/* <SearchResultsList searchResults={searchResults} /> */}
        </Container>
      </Switch>
    </div>
  );
}

export default App;
