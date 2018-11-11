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
import About from "./pages/About-Us";
import DocumentationPage from "./pages/Documentation/Documentation";
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

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
    axios.get("api/auth/").then(response => {
      console.log("Get user response: ", response.data)
      if (response.data.user) {
        console.log("Get user: there is a user saved in the server session: ");
        this.setState({
          loggedIn: true,
          username: response.data.user.user_name
        })
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/Forum/Categories" component={Categories} />
            <Route exact path="/Forum/NewPost" component={NewPost} />
            <Route exact path="/Forum/Posts" component={Posts} />
            <Route exact path="/Forum/ThisPost" component={ThisPost} />
            <Route exact path="/Forum/UserPage" component={User} />
            <Route path="/Search" render={() => <Search updateUser={this.updateUser} />} />
            <Route exact path="/AboutUs" component={About} />
            <Route exact path="/Documentation" component={DocumentationPage} />
            <Route path="/login" render={() => <Authentication updateUser={this.updateUser} />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
