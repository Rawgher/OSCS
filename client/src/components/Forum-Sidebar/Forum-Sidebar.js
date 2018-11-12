import React from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Col } from "../../components/Grid";
import "./Forum-Sidebar.css";

const ForumSidebar = () => (
    <Col size="md-3">
        <Button variant="contained" size="large" component={Link} to="/forum/newPost" style={{width:"100%"}}>
            CREATE POST
        </Button>

        <div class="ESH_top-posts">
            <div class="ESH_title">POPULAR POSTS</div>
            <ul>
                <li><a href="#">this.post_subject</a></li>
            </ul>
        </div>
    </Col>
);

export default ForumSidebar;