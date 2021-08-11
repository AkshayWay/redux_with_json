import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Link,
  hashHistory,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./component/navigation.js";
import Footer from "./component/footer.js";

import Home from "./component/Home.js";
//import AboutUs from "./component/aboutUs.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" render={(props) => <Home />}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
