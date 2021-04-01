import axios from "axios";
import { baseURL, baseURL2, config } from "./services/Index";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProfileForm from "./components/Profile_Form/ProfileForm.jsx";
import MessageForm from "./components/Message_Form/MessageForm.jsx";
import MessageBoard from "./components/Message_Board/MessageBoard.jsx";
import Search from "./components/Search/Search.jsx";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [toggle, setToggle] = useState(false);

  // let [messages, setMessages] = useState([]);
  let [filteredMessages, setFilteredMessages] = useState([]);
  let [currentMessage, setCurrentMessage] = useState({});
  let [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (
      filteredMessages.length === 0 &&
      searchTerm === "" &&
      messages.length !== 0
    ) {
      setFilteredMessages(messages);
    }
  }, [filteredMessages, searchTerm, messages]);

  async function getData2() {
    let response = await axios.get(baseURL2, config);
    setMessages(response.data.records);
    setFilteredMessages(response.data.records);
  }

  function handleClick(event) {
    let found = messages.find((message) => {
      return message.id === event.target.id;
    });
    setCurrentMessage(found);
    setSearchTerm("");
    setFilteredMessages(messages);
  }

  useEffect(() => {
    getData();
    getData2();
  }, [toggle]);

  async function getData() {
    let resp = await axios.get(baseURL, config);
    setUsers(resp.data.records);
  }

  return (
    <div className="App">
      <Navbar />
      <Route path="/newprofile">
        <ProfileForm users={users} setToggle={setToggle} />
      </Route>
      <Route exact path="/">
        <h1 id="title">Welcome to SteelChat</h1>
        <h2 id="title-card">The Message Board of Tomorrow!</h2>
        <div className="flex-container">
          <Search
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            setMessages={setMessages}
            messages={messages}
            setFilteredMessages={setFilteredMessages}
          />
          <div className="card-container">
            {filteredMessages.map((message) => {
              return (
                <MessageBoard
                  message={message}
                  key={message.id}
                  setToggle={setToggle}
                />
              );
            })}
          </div>
        </div>
      </Route>
      <Route path="/post">
        <MessageForm messages={messages} setToggle={setToggle} />
      </Route>
      <Route path="/editpost/:id">
        <MessageForm messages={messages} setToggle={setToggle} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
