import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import "./UserPage.css";
import { PostList, PostListItem } from "../../components/PostList";

class UserPage extends Component {
    state = {
        // TODO: get array of user posts
        userPosts,
        // TODO: get id of logged in user
        userID: 1
    };

    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <h4 className="ESH_main-title">USER // {this.state.userID}</h4>
                    <div className="ESH_line"></div>
                </Grid>

                <Grid container direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={24}
                >
                    <Grid item xs={12} m={8} className="ESH_forum-col">
                        <PostList>
                            {this.state.userPosts.map(post => (
                                <PostListItem key={post._id}>
                                    <Link to={"/Forum/" + post._id}>
                                        {post.title}
                                    </Link>
                                </PostListItem>
                            ))}
                        </PostList>
                    </Grid>

                </Grid>
            </Grid>
        );
    };
}

export default UserPage;