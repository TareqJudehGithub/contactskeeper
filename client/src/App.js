import React from 'react';
import Navbar from "./components/layout/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/contact/ContanctState";
import AuthState from "./context/auth/AuthState";


import './App.css';

const App = () => {
  return (
    <AuthState>
       <ContactState>
      <React.Fragment>
        <Navbar 
          title="Contact Keeper"
          icon="fas fa-id-card-alt"
        />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </React.Fragment>
    </ContactState>
    </AuthState>
   
  );
}

export default App;
