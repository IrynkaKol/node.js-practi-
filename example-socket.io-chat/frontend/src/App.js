import io from 'socket.io-client'

import Chat from "./components/Chat/Chat";
import ChatForm from "./components/ChatForm/ChatForm";
import SigninChatForm from "./components/SigninChatForm/SigninChatForm";

import './App.css';
const socket = io.connect("http://localhost:3000") // підключення до web socket server, використовуючи його можемо приймати повыдомлення з бекенду або туди выдправляти

function App () {
    return (
        <div className="App">
            <SigninChatForm/>
            <ChatForm />
            <Chat/>



        </div>
    )

}

export default App;