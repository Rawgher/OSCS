import React from "react";
import "./Chat.css";

class UsersBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users,
      me: props.username
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="users-box black-border">
          <div className="users-header-users">Users Online</div>
          <div className="users-body">
            {this.state.users.length
              ? this.state.users.map((user, i) => {
                  let classes = "user";
                  if (user === this.state.me) {
                    classes += " user-me";
                  }
                  return (
                    <div className={classes} key={i}>
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
