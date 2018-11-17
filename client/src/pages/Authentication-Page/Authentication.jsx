import React, { Component } from "react";
import "../../components/Auth2/Auth.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Modal from "../../components/Auth2/Modal";
import Background from "../../components/Background";

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  handleSubmit = e => {
    this.setState({ mounted: false });
    e.preventDefault();
  };

  render() {
    const { mounted } = this.state;

    let child;

    if (mounted) {
      child = (
        <div className="Auth_test">
          <Modal
            updateUser={this.props.updateUser}
            onSubmit={this.handleSubmit}
          />
        </div>
      );
    }

    return (
      <div className="Authentication">
        <Background />
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {child}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Authentication;