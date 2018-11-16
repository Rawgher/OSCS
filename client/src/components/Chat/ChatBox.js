import React from "react";
import "./Chat.css";
import UsersBox from "./UsersBox";
import EnterChat from "./EnterChat";
import Messages from "./Messages";
import Tooltip from "@material-ui/core/Tooltip";

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      usersOpen: false
    };
  }

  onChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  onUserClick = event => {
    event.preventDefault();
    this.state.usersOpen
      ? this.setState({ usersOpen: false })
      : this.setState({ usersOpen: true });
  };

  onKeyUp = event => {
    event.preventDefault();
    if (event.key === "Enter") {
      if (this.state.message.length) {
        this.props.sendMessage({
          type: "message",
          text: this.state.message
        });
        this.setState({ message: "" });
      } else {
        alert("Please enter a message");
      }
    }
  };

  render() {
    //console.log("ChatBox messages", this.props.messages);
    return (
      <React.Fragment>
        {this.state.usersOpen ? <UsersBox users={this.props.users} /> : ""}
        <div className="chat-box black-border ng-space">
          <div className="chat-header">
            <h6>
              Welcome <span id="header-username">{this.props.username}</span>
            </h6>
          </div>
          <div className="chat-users users-header" onClick={this.onUserClick}>
            {this.state.usersOpen ? (
              <i className="material-icons">keyboard_arrow_right</i>
            ) : (
              <i className="material-icons">keyboard_arrow_left</i>
            )}
            Users Online
          </div>
          <React.Fragment>
            <Messages
              messages={this.props.messages}
              username={this.props.username}
            />
            <input
              className="message-submit"
              placeholder="Type message"
              value={this.state.message}
              onChange={this.onChange.bind(this)}
              onKeyUp={this.onKeyUp.bind(this)}
            />
          </React.Fragment>
        </div>
      </React.Fragment>
    );
  }
}

export default ChatBox;
