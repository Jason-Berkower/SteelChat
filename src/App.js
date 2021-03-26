import axios from "axios";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/"></Route>
      <h1>HELLO WORLD</h1>
    </div>
  );
}

export default App;
