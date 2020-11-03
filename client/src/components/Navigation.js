import React, {Fragment} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";


import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

  function Navigation(props){
    const isLoggedIn = localStorage.getItem('USER_ID');
    const userName = localStorage.getItem('NAME');
    
    return (
    <Fragment>
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand>
          {Boolean(isLoggedIn) && (
            <Nav.Link  href="/home">
              CodeCamp Community
            </Nav.Link>
          )}
          {!Boolean(isLoggedIn) && (
            <Nav.Link  to="/login">
              CodeCamp Community
            </Nav.Link>
          )}

          </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
     
      <Navbar.Collapse id="basic-navbar-nav">


        <Nav className="ml-auto">

        {Boolean(isLoggedIn) && (
                <Fragment>
                  <Nav.Item><Nav.Link href="/home"> Home</Nav.Link></Nav.Item> 
                  <Nav.Item><Nav.Link href="/forum">My Post</Nav.Link></Nav.Item> 
                  
                  <Nav.Item><Nav.Link href="/create">Create Post</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/about"onClick={() => {
                    localStorage.setItem('USER_ID', ''); }}>
                    Log Out
                    </Nav.Link></Nav.Item>
                 


                
                 
                </Fragment>
              )} {!Boolean(isLoggedIn) && (
                <Fragment>
             
                      <Nav.Item><Nav.Link href="/login">
                      Log in
                      </Nav.Link></Nav.Item> 
                 
                
                      <Nav.Item><Nav.Link href="/about">
                      Sign up
                      </Nav.Link></Nav.Item>
                 
                </Fragment>
              )}
          
        </Nav>

        
      </Navbar.Collapse>
    </Navbar>
            </Styles>

        </Fragment>
    )
  };

 export default Navigation;