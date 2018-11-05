import React from "react";
import "./Chat.css";

class ChatBox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="chat-box black-border ng-space">
          <div className="header">Header</div>
          <div className="messages">messages fo here</div>
          <form class="flex message-submit">
            <input className="message-input"/>
            <button className="btn">Submit</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ChatBox;
