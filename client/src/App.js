import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import React from "react";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
//import CreateForum from "./components/Forum/createForum";
//import Footer from "./components/Footer.js";
//import Forum from "./components/Forum/forum";
import Home from "./components/Home/home";
import Login from "./components/Auth/login";
import Navigation from "./components/Navigation.js";
import SignUp from "./components/Auth/signup";
//import UpdateForum from "./components/Forum/updateForum";

function App(props) {
  const isLoggedIn = localStorage.getItem('USER_ID');
  const url = window.location.pathname;

  console.log(url);
  console.log(isLoggedIn);

  if ((url === '/' || url === '/login' || url === '/signup') && Boolean(isLoggedIn)) {
    props.history.push('/home');
  }
  
  if (
    (url === '/' || 
      url === '/home' || 
      url === '/create' ||
      url.includes('/forum')
    ) && !Boolean(isLoggedIn)) {
    props.history.push('/login');
  }

  return (
    <Router>
      <Navigation />
      <div className="container App" >
        <Switch>
          <Route path="/login" component ={Login} />
          <Route path="/home" component ={Home} />
          <Route path="/signup" component ={SignUp} />
        
      
        </Switch>
      </div>
   
    </Router>
  );
}

export default withRouter(App);
