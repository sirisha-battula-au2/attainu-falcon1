import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Inbox from './inbox';
import Sent from './sent';
import Draft from './draft';
import Trash from './trash';


import "./App.css";

function App() {

  return (
    <Router>
      <div className="App wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-left navbar-dark bg-primary" id="sidebar">
          <ul className="navbar-nav mr-auto">
            <li><Link to={{pathname:'/', state:{
              catageory: 'Inbox'
            }}} 
            className="nav-link">Inbox</Link></li>
            <li><Link to={{pathname:'/sent',
            state:{
              catageory: 'Sent'
            }}} className="nav-link">Sent</Link></li>
            <li><Link to={{pathname:'/draft',
            state: {
              catageory: 'Drafts'
            }
            }} className="nav-link">Drafts</Link></li>
            <li><Link to={{pathname: '/trash', 
            state: {
              catageory: 'Trash'
            }
            }} className="nav-link">Trash</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Inbox}></Route>
          <Route path="/sent" component={Sent}></Route>
          <Route path="/draft" component={Draft}></Route>
          <Route path="/trash" component={Trash}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;