import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

class Sidebar extends Component {
    state = {
        topPosts
    };

    render() {
        return (
            <div>
                <div className="nav-wrapper">
                    <form className="ESH_searchbar">
                        <div className="input-field">
                            <input id="search" type="search" placeholder="SEARCH" required="required" />
                            <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>

                <div className="ESH_create-post">
                    <a className="waves-effect waves-light btn ESH_create-btn" href="/Forum/NewPost">CREATE POST</a>
                </div>

                <div className="ESH_top-posts">
                    <div className="ESH_title">POPULAR POSTS</div>
                    <ul>
                        {/* map through each top post */}
                        {this.state.topPosts.map(topPost => (
                            <li><Link to={`/Forum/${topPost._id}`}>{topPost.subject}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };
};

export default Sidebar;