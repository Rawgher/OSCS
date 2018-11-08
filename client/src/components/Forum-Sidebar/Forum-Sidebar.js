import React from "react";
import { Col } from "../../components/Grid";
import "./Forum-Sidebar.css";

const ForumSidebar = () => (
    <Col size="md-3">
        <div class="ESH_create-post">
            <a class="waves-effect waves-light btn ESH_create-btn" href="/Forum/NewPost">CREATE POST</a>
        </div>


        <div class="ESH_top-posts">
            <div class="ESH_title">POPULAR POSTS</div>
            <ul>
                <li><a href="#">this.post_subject</a></li>
            </ul>
        </div>
    </Col>
);

export default ForumSidebar;