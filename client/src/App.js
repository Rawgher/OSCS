import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import About from "./pages/About-Us";
import NavTabs from "../src/components/Nav";
import background from "./images/background.png";
import { Col, Row, Container } from "./components/Grid";
import Sidebar from "./components/Sidebar";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/acceess_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => (
  <div>
    <NavTabs auth={auth} />
    <Col size="md-2">
      <div className="EGA-background-image">
        <img
          src={background}
          className="EGA-stretch"
          alt="Grey Background"
        />
        <Sidebar />
      </div>
    </Col>
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <LandingPage auth={auth} {...props} />} />
          <Route exact path="/Forum/Categories" component={Categories} />
          <Route exact path="/Forum/NewPost" component={NewPost} />
          <Route exact path="/Forum/Posts" component={Posts} />
          <Route exact path="/Forum/ThisPost" component={ThisPost} />
          <Route exact path="/Forum/UserPage" component={User} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/AboutUs" component={About} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
