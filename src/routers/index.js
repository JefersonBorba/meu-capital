import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import Goals from "../pages/goals";
import Transaction from "../pages/transaction";

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
    <Route path="/metas">
      <Goals />
    </Route>
    <Route path="/transacoes">
      <Transaction />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
);

export default Routers;
