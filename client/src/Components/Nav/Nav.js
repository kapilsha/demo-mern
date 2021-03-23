import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
// import Home from "../Home/Home";
import Login from "../login/Login";
import Signup from "../signup/Signup";

const Nav = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Link to="/">Home</Link> */}
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>

        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Nav;
