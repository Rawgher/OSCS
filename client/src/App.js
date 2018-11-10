import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Callback from "./pages/Callback";
import Auth from "./utils/Authentication/auth";
import history from "./utils/Authentication/history";
import LandingPage from "./pages/Landing-Page/Landing";
import Categories from "./pages/Forum-Categories";
import NewPost from "./pages/Forum-NewPost";
import Posts from "./pages/Forum-Posts";
import ThisPost from "./pages/Forum-ThisPost";
import User from "./pages/Forum-UserPage";
import Search from "./pages/Search-Page";
import About from "./pages/About";
import DocumentationPage from "./pages/Documentation/Documentation";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/acceess_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const App = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <LandingPage auth={auth} {...props} />}
        />
        <Route
          exact
          path="/forum/categories"
          render={props => <Categories auth={auth} />}
        />
        <Route
          exact
          path="/forum/newpost"
          render={props => <NewPost auth={auth} {...props} />}
        />
        <Route
          exact
          path="/forum/posts"
          render={props => <Posts auth={auth} {...props} />}
        />
        <Route
          exact
          path="/forum/thispost"
          render={props => <ThisPost auth={auth} {...props} />}
        />
        <Route
          exact
          path="/forum/userpage"
          render={props => <User auth={auth} {...props} />}
        />
        <Route
          exact
          path="/search"
          render={props => <Search auth={auth} {...props} />}
        />
        <Route
          exact
          path="/About"
          render={props => <About auth={auth} {...props} />}
        />
        <Route
          exact
          path="/documentation"
          render={props => <DocumentationPage auth={auth} {...props} />}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
