import React from 'react';
import logo from './logo.svg';
import './App.css';

import SideBar from './components/Sidebar';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Navigation  from './components/Navigation';

function App() {
  return (
<React.Fragment>
  <Router>
    <Navigation />
    <SideBar/>
  </Router>
</React.Fragment>
  );
}

export default App;