import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { Col } from "../../components/Grid";
import "./Forum-Sidebar.css";

class ForumSidebar extends Component {
    state = {
        popular_posts: []
    };

    render() {
        return (
            <Col size="md-3">
                <Button variant="contained" size="large" type="submit" name="action" id="create-post" component={Link} to="/Forum/NewPost" style={{ width: "100%" }}>
                    CREATE POST
            </Button>
                <div class="ESH_top-posts">
                    <div class="ESH_title">POPULAR POSTS</div>
                    <ul>
                        {/* TODO: get array of popular posts */}
                        {/* {this.state.popular_posts.map(pp => (
                        <li><a href={`/forum/${pp.id}`}>{pp.title}</a></li>
                    ))} */}
                    </ul>
                </div>
            </Col>
        )
    }
}

export default ForumSidebar;