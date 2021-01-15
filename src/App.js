import { Container } from "@material-ui/core";
import "./App.css";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <Container
        maxWidth="lg"
        style={{
          outline: "5px dotted red",
          height: "100vh",
          padding: "10px 10px",
        }}
      ></Container>
    </>
  );
}

export default App;
