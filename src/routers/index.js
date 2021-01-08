import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";

const Routers = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
);

export default Routers;
