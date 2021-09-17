import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import Menu from "./Menu";
import Login from "./Login";
import NewPassword from "./NewPassword";
import RestLink from "./ResetLink";
import Signup from "./Signup";
import "./styles.css";
import Url from "./Url";
import Dashboard from "./Dashboard";

export default function App() {
  const history = useHistory();
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/url">
            <Menu />
            <Url />
          </Route>
          <Route path="/dashboard">
            <Menu />
            <Dashboard />
          </Route>
          <Route path="/reset">
            <RestLink />
          </Route>
          <Route path="/new-password/:restToken">
            <NewPassword />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
