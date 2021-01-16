import { Container } from "@material-ui/core";
import { MoveToInboxTwoTone } from "@material-ui/icons";
import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { SearchResultsList } from "./components/SearchResultsList";

function App() {
  const [searchResults, setSearchResults] = useState();
  return (
    <>
      <Nav setSearchResults={setSearchResults} />
      <Container
        maxWidth="lg"
        style={{
          outline: "5px dotted red",
          height: "100vh",
          padding: "10px 10px",
        }}
      >
        <SearchResultsList searchResults={searchResults} />
      </Container>
    </>
  );
}

export default App;
