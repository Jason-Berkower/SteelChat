import axios from "axios";
import { baseURL, baseURL2, config } from "./services/Index";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProfileForm from "./components/Profile_Form/ProfileForm.jsx";
import MessageForm from "./components/Message_Form/MessageForm.jsx";
import MessageBoard from "./components/Message_Board/MessageBoard.jsx";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getData();
    getData2();
  }, [toggle]);

  async function getData() {
    let resp = await axios.get(baseURL, config);
    setUsers(resp.data.records);
  }

  async function getData2() {
    let resp = await axios.get(baseURL2, config);
    setMessages(resp.data.records);
  }

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/"></Route>
      <h1>Welcome to SteelChat</h1>
      <h3>The Message Board of Tomorrow!</h3>
      <Route path="/newprofile">
        <ProfileForm users={users} setToggle={setToggle} />
      </Route>
      <Route path="/newpost">
        <MessageForm messages={messages} setToggle={setToggle} />
      </Route>
      <Route path="/">
        {messages.map((message) => {
          return (
            <MessageBoard
              message={message}
              key={message.id}
              setToggle={setToggle}
            />
          );
        })}
      </Route>
      <Footer />
    </div>
  );
}

export default App;
