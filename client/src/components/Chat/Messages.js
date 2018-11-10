import React from "react";
import Message from "./Message";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 200,
      messages: props.messages
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      messages: nextProps.messages
    };
  }

  scrollToBottom() {
    this.scrollHere.scrollIntoView({ behavior: "smooth" });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    //console.log("Messages messages", this.state.messages);
    //console.log("length", this.state.messages.length);
    //this.state.messages.length ? (console.log("true")) : (console.log("false"));
    return (
      <div className="messages">
        {this.state.messages.length ? (
          this.state.messages.map((message, i) => {
            let mine = false;
            if (message.username === this.props.username) {
              mine = true;
            }
            return <Message key={i} message={message} myMessage={mine} />;
          })
        ) : (
          <div className="no-message">No messages in chat room</div>
        )}
        <div ref={(el) => { this.scrollHere = el; }}></div>
      </div>
    );
  }
}

export default Messages;
