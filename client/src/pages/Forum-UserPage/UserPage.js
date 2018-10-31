import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';

class UserPage extends Component {
    state = {
        userID: 1
    };

    render() {
        return (
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={24}
            >
            <Grid item xs={12}><h4>USER // {this.state.userID}</h4></Grid>
            <div className="line"></div>

            

            </Grid>
        );
    };
}

export default UserPage;