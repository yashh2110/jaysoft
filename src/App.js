import React from "react";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import PageNotFound from "./components/404";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import Services from "./pages/services/services";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/contactus">
          <Contact/>
        </Route>
        <Route exact path="/services">
          <Services/>
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
