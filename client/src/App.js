import React from "react";
import { Router, Route, Switch } from "react-router-dom";
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

class App extends Component {
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
            <Route exact path="/Search" component={Search} />
            <Route exact path="/AboutUs" component={About} />
            <Route exact path="/Documentation" component={DocumentationPage} />
            <Route exact path="/login" component={Authentication} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
