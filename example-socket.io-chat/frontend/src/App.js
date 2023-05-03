import io from "socket.io-client";
import { useState, useEffect, useCallback } from "react";
import { v4 } from "uuid";

import Chat from "./components/Chat/Chat";
import ChatForm from "./components/ChatForm/ChatForm";
import SigninChatForm from "./components/SigninChatForm/SigninChatForm";

import "./App.css";
const socket = io.connect("http://localhost:3000"); // підключення до web socket server, використовуючи його можемо приймати повыдомлення з бекенду або туди выдправляти

function App() {
  const [nickName, setNickName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("chat-message", message => {
        setMessages(prevMessages => {
            const newMessage = {
              id: v4(),
              type: "user",
              message,
            }
            return [newMessage, ...prevMessages]
          });
  })
 }, [])
  

  const addNickName = useCallback(({ name }) => setNickName(name), []);
  const addMessage = useCallback(({message}) => {
    setMessages(prevMessages => {
      const newMessage = {
        id: v4(),
        type: "you",
        message,
      }
      return [newMessage, ...prevMessages]
    });
    socket.emit("chat-message", message)
  }, []);

  return (
    <div className="App">
      {!nickName && <SigninChatForm onSubmit={addNickName} />}
      {nickName && <ChatForm onSubmit={addMessage} />}
      {nickName && <Chat items={messages} />}
    </div>
  );
}

export default App;
