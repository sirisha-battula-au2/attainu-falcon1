import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./home";
import AboutUs from "./aboutus";
import ContactUs from "./contactUs";



class App extends React.Component{
        render() {
            return(
              <Router>
                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">AboutUs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactus">ContactUs</Link>
                </li>
                </ul>
            </div>
          </nav>
             
           
                  
                   
               <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contactus' component={ContactUs} />
              <Route path='/aboutus' component={AboutUs} />
          </Switch>
         
               </Router>

            );
        }
    }
ReactDOM.render(<App/>,document.getElementById("root"));