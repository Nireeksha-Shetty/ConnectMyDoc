import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import React, { useState, useEffect } from "react";
import "./Chat.css";

function Chat() {
  const [input, setInput] = useState("")
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) =>{
    e.preventDefault();
    console.log("You typed >>>", input);
  }
  
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className={`chat_message ${true && "chat_reciever"}`}>
          <span className="chat_name">Samarth Kamath</span>
          Hey Guys
          <span className="chat_timestamp">3:33pm</span>
        </p>
        <div className="chat_message">Hey Guys</div>
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)}  type="text" placeholder="Type a message"/>
          <button type="submit" onClick={sendMessage}>Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
