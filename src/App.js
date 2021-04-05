import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Containers
import Layout from "./containers/Layout";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" name="Login" component={Login} />
          <Route exact path="/register" name="Register" component={Register} />
          <Route path="/" name="Home" component={Layout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
