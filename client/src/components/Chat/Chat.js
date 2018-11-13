import React from "react";
import socketIOClient from "socket.io-client";
import Button from "@material-ui/core/Button";
import "./Chat.css";
import ChatBox from "./ChatBox.js";
import ChatIcon from "@material-ui/icons/Chat";
import CloseIcon from "@material-ui/icons/Close";

class Chat extends React.Component {
  changeState = event => {
    event.preventDefault();
    this.state.open
      ? this.setState({ open: false })
      : this.setState({ open: true });
  };

  constructor(props) {
    super(props);
    this.socket = null;
    this.state = {
      username: localStorage.getItem("username")
        ? localStorage.getItem("username")
        : "",
      uid: localStorage.getItem("uid")
        ? localStorage.getItem("uid")
        : this.generateUID(),
      chat_ready: false,
      users: [],
      messages: [
        {
          username: "OSCS",
          uid: "aaaaa",
          message: {
            type: "message",
            text: "Welcome to the site-wide chat"
          }
        }
      ],
      message: "",
      open: false,
      disabled: true
    };
  }

  componentDidMount() {
    if (this.state.username.length) {
      this.initChat();
    }
  }

  generateUID() {
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 15; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    localStorage.setItem("uid", text);
    return text;
  }

  sendMessage(message, e) {
    //console.log("show me da messages", this.state.messages);
    let messages = this.state.messages.concat([
      {
        username: localStorage.getItem("username"),
        uid: localStorage.getItem("uid"),
        message: message
      }
    ]);
    this.setState({
      messages: messages
    });
    this.socket.emit("message", {
      username: localStorage.getItem("username"),
      uid: localStorage.getItem("uid"),
      message: message
    });
    this.scrollToBottom();
  }

  scrollToBottom() {
    let messages = document.getElementsByClassName("messages")[0];
    messages.scrollTop = messages.scrollHeight - messages.clientHeight;
  }

  initChat() {
    localStorage.setItem("username", this.state.username);
    this.setState({
      chat_ready: true
    });
    this.socket = socketIOClient("ws://localhost:8989", {
      query: "username=" + this.state.username + "&uid=" + this.state.uid
    });

    this.socket.on(
      "updateUsersList",
      function(users) {
        //console.log(users);
        this.setState({
          users: users
        });
      }.bind(this)
    );

    this.socket.on(
      "message",
      function(message) {
        this.setState({
          messages: this.state.messages.concat([message])
        });
        this.scrollToBottom();
      }.bind(this)
    );
  }

  setUsername(username, e) {
    this.setState(
      {
        username: username
      },
      () => {
        this.initChat();
      }
    );
  }

  componentDidMount() {
    if (this.props.loggedIn === true) {
      this.setState({ disabled: false });
    }
  }

  render() {
    //console.log("Chat Messages", this.state.messages);
    return (
      <React.Fragment>
        {this.state.open ? (
          <ChatBox
            users={this.state.users}
            ready={this.state.chat_ready}
            username={this.state.username}
            setUsername={this.setUsername.bind(this)}
            messages={this.state.messages}
            sendMessage={this.sendMessage.bind(this)}
          />
        ) : (
          ""
        )}
        <Button
          variant="fab"
          className="chat-button"
          onClick={this.changeState.bind(this)}
          disabled={this.state.disabled}
        >
          {this.state.open ? <CloseIcon /> : <ChatIcon />}
        </Button>
      </React.Fragment>
    );
  }
}

export default Chat;
