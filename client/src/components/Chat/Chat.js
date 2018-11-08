import React from "react";
import Button from "@material-ui/core/Button";
import "./Chat.css";
import ChatBox from "./ChatBox.js";
import ChatIcon from "@material-ui/icons/Chat";
import CloseIcon from "@material-ui/icons/Close";

class Chat extends React.Component {
  state = {
    open: false
  };

  changeState = event => {
    event.preventDefault();
    this.state.open
      ? this.setState({ open: false })
      : this.setState({ open: true });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.open ? <ChatBox /> : ""}
        <Button
          variant="fab"
          className="chat-button"
          onClick={this.changeState.bind(this)}
        >
          {this.state.open ? <CloseIcon /> : <ChatIcon />}
        </Button>
      </React.Fragment>
    );
  }
}

export default Chat;
