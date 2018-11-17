import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Col } from "../../components/Grid";
import "./Forum-Sidebar.css";

class ForumSidebar extends Component {
  state = {
    popular_posts: [],
    disabled: true
  };

  componentDidMount() {
    if (this.props.loggedIn === true) {
      this.setState({ disabled: false });
    }
  }

  render() {
    return (
      <Col size="md-3">
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/forum/newpost"
          disabled={this.state.disabled}
          style={{ width: "100%" }}
        >
          CREATE POST
        </Button>
        <div class="ESH_top-posts">
          <div class="ESH_title">POPULAR POSTS</div>
          <ul>
            {/* TODO: get array of popular posts */}
            {/* {this.state.popular_posts.map(pp => (
              // RDP - change this to a link instead of an a tag if we use it
                        <li><a href={`/forum/${pp.id}`}>{pp.title}</a></li>
                    ))} */}
          </ul>
        </div>
      </Col>
    );
  }
}

export default ForumSidebar;
