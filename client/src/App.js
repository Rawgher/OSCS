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
import SignUp from "./pages/Sign-Up";
import About from "./pages/About-Us";
import NavTabs from "../src/components/Nav";
import background from "./images/background.png";
import { Col, Row, Container } from "./components/Grid";
import Sidebar from "./components/Sidebar";
import DocumentationPage from "./pages/Documentation/Documentation";

const App = () => (
  <div>
    <NavTabs />
    <Col size="md-2">
      <div className="EGA-background-image">
        <img src={background} className="EGA-stretch" alt="Grey Background" />
        <Sidebar />
      </div>
    </Col>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Forum/Categories" component={Categories} />
          <Route exact path="/Forum/NewPost" component={NewPost} />
          <Route exact path="/Forum/Posts" component={Posts} />
          <Route exact path="/Forum/ThisPost" component={ThisPost} />
          <Route exact path="/Forum/UserPage" component={User} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Register" component={SignUp} />
          <Route exact path="/AboutUs" component={About} />
          <Route exact path="/Documentation" component={DocumentationPage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
