import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import LandingPage from "./pages/Landing-Page/Landing";
import Categories from "./pages/Forum-Categories";
import NewPost from "./pages/Forum-NewPost";
import Posts from "./pages/Forum-Posts";
import ThisPost from "./pages/Forum-ThisPost";
import User from "./pages/Forum-UserPage";
import Login from "./pages/Login-Page";
import Search from "./pages/Search-Page";
import SignUp from "./pages/Sign-Up"
import About from "./pages/About-Us"

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Forum/Categories" component={Categories} />
        <Route exact path="/Forum/NewPost" component={NewPost} />
        <Route exact path="/Forum/Posts" component={Posts} />
        <Route exact path="/Forum/ThisPost" component={ThisPost} />
        <Route exact path="/Forum/User" component={User} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Register" component={SignUp} />
        <Route exact path="/AboutUs" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
