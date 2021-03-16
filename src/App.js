import React from "react";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import PageNotFound from "./components/404";
import Home from "./pages/home";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <Home/>
        </Route>
        <Route exact path="/contactus">
          <Home/>
        </Route>
        <Route exact path="/404">
          <PageNotFound/>
        </Route>
        <Redirect to="/404"></Redirect>
      </Switch>
    </Router>
  )
}

export default App;
