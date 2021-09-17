import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import Login from "./Login";
import NewPassword from "./NewPassword";
import RestLink from "./ResetLink";
import Signup from "./Signup";
import "./styles.css";

export default function App() {
  const history = useHistory();
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-primary">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Urls
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
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
