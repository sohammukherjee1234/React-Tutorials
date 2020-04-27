import React from 'react';
import {BrowserRouter as Router,
        Switch,
        Route} from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import Users from "./Users";
import Home from "./Home";
import UserDetails from "./UserDetails";

function App() {
  return (
    <div className="container">

      <Router>
          <Navbar/>
          <Switch>
              <Route  path="/" exact component={Home} />
              <Route path="/about" component={About}/>
              <Route path="/users" exact component={Users} />
              <Route path="/users/:id" component={UserDetails} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
