import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authentication from "./pages/Authentication-Page";
import NoMatch from "./pages/NoMatch";
import LandingPage from "./pages/Landing-Page/Landing";
import Categories from "./pages/Forum-Categories";
import NewPost from "./pages/Forum-NewPost";
import Posts from "./pages/Forum-Posts";
import ThisPost from "./pages/Forum-ThisPost";
import User from "./pages/Forum-UserPage";
import Search from "./pages/Search-Page";
import About from "./pages/About";
import DocumentationPage from "./pages/Documentation/Documentation";
import ElainePostTest from "./pages/ElainePostTest";
import ElaineThisPost from "./pages/ElaineThisPost";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      user_id: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/auth/").then(response => {
      console.log("Get user response: ", response.data);
      if (response.data.user) {
        console.log("Get user: there is a user saved in the server session: ");
        this.setState({
          loggedIn: true,
          username: response.data.user.user_name,
          user_id: response.data.user._id
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={() => <LandingPage />} />
            <Route
              exact
              path="/forum/categories"
              render={() => (
                <Categories
                  getUser={this.getUser}
                  updateUser={this.updateUser}
                  loggedIn={this.state.loggedIn}
                  user={this.state.username}
                  user_id={this.state.user_id}
                  username={this.state.username}
                />
              )}
            />
            <Route
              exact
              path="/forum/newpost"
              render={() => (
                <NewPost
                  // getUser={this.getUser}
                  updateUser={this.updateUser}
                  user={this.state.username}
                  loggedIn={this.state.loggedIn}
                  username={this.state.username}
                  user_id={this.state.user_id}
                />
              )}
            />
            <Route
              exact
              path="/forum/:id"
              render={props => (
                <Posts
                  {...props}
                  getUser={this.getUser}
                  updateUser={this.updateUser}
                  loggedIn={this.state.loggedIn}
                  username={this.state.username}
                  user_id={this.state.user_id}
                />
              )}
            />
            <Route
              exact
              path="/forum/post/:id"
              render={props => (
                <ThisPost
                  {...props}
                  getUser={this.getUser}
                  updateUser={this.updateUser}
                  loggedIn={this.state.loggedIn}
                  username={this.state.username}
                  user_id={this.state.user_id}
                />
              )}
            />
            <Route
              exact
              path="/forum/user/:id"
              render={props => (
                <User
                  {...props}
                  getUser={this.getUser}
                  updateUser={this.updateUser}
                  loggedIn={this.state.loggedIn}
                  username={this.state.username}
                  user_id={this.state.user_id}
                />
              )}
            />
            <Route
              exact
              path="/search"
              render={() => (
                <Search
                  getUser={this.getUser}
                  updateUser={this.updateUser}
                  loggedIn={this.state.loggedIn}
                  username={this.state.username}
                  user_id={this.state.user_id}
                />
              )}
            />
            <Route
              exact
              path="/aboutus"
              render={() => (
                <About
                  user={this.state.username}
                  user_id={this.state.user_id}
                  updateUser={this.updateUser}
                  loggedIn={this.state.loggedIn}
                  username={this.state.username}
                />
              )}
            />
            <Route
              exact
              path="/documentation"
              render={() => (
                <DocumentationPage
                  user={this.state.username}
                  user_id={this.state.user_id}
                  updateUser={this.updateUser}
                  loggedIn={this.state.loggedIn}
                  username={this.state.username}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={() => (
                <Authentication
                  updateUser={this.updateUser}
                  loggedIn={this.state.loggedIn}
                  username={this.state.username}
                />
              )}
            />
            <Route exact path="/elainetest" render={() => <ElainePostTest />} />
            <Route
              exact
              path="/elainethispost"
              render={() => <ElaineThisPost />}
            />

            <Route render={() => <NoMatch />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
