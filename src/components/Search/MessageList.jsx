import { useState, useEffect } from 'react';
import { baseURL2, config } from '../../services/Index';
import Search from './Search';
import axios from 'axios';
import MessageBoard from '../Message_Board/MessageBoard';
import './Search.css';

function MessageList(props) {
  let [messages, setMessages] = useState([]);
  let [filteredMessages, setFilteredMessages] = useState([]);
  let [currentMessage, setCurrentMessage] = useState({});
  let [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (filteredMessages.length === 0 && searchTerm === '' && messages.length !== 0) {
      setFilteredMessages(messages);
    }
  }, [filteredMessages, searchTerm, messages]);

  async function getData() {
    let response = await axios.get(baseURL2, config);
    setMessages(response.data.records);
    setFilteredMessages(response.data.records);
  }

  function handleClick(event) {
    let found = messages.find((message) => {
      return message.id === event.target.id;
    });
    setCurrentMessage(found);
    setSearchTerm('');
    setFilteredMessages(messages);
  }

  return (
    <div id='flex-container'>
      <div>
        <Search
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          setMessages={setMessages}
          messages={messages}
          setFilteredMessages={setFilteredMessages}
        />
        {filteredMessages.map((message) => {
          return (
            <p onClick={handleClick} id={message.id} key={message.id}>
              {message.fields.message}
            </p>
          )
        })}
      </div>
      <div>
        <MessageBoard currentMessage={currentMessage} />
      </div>
    </div>
  )
}

export default MessageList;
