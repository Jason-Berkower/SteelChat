import axios from "axios";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import UserProfile from "./components/User_Profile/UserProfile.jsx";
import MessageBoard from "./components/Message_Board/MessageBoard.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/"></Route>
      <h1>Welcome to SteelChat</h1>
      <h3>The Message Board of Tomorrow!</h3>
      <Route path="/newprofile">
        <UserProfile />
      </Route>
      <Route>
        <MessageBoard />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
