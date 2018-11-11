import React from "react";
import "./Chat.css";

class UsersBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users
    };
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="users-box">
          <div className="chat-header">Users Online</div>
          <div className="">
            {this.state.users.length
              ? this.state.users.map((user, i) => {
                  return (
                    <div className="user" key={i}>
                      <i className="fa fa-user" /> {user}
                    </div>
                  );
                })
              : "No Users Online"}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UsersBox;
