
import { Link,withRouter } from 'react-router-dom';
import React, { Fragment, useEffect, useState } from 'react';
import {  Popconfirm} from 'antd';
import Forum from '../Forum/forum'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'


import '../../../src/App.css';


const Styled = styled.div`
.topicSelector{
    display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
  height:100%;
}
.topicButtons{
    margin-top: 2em;
    margin-bottom: 2em;
    width:100%;
    text-align:center;
}




`
const Home = () => {
  const [isFetchingData, setFetchingData] = useState(true);
  const [formMessage, setFormMessage] = useState(null);
  const [forumData, setForumData] = useState(null);
  const [homeState,setHomeState] = useState("Welcome Please Choose a topic on the left");

  const isLoggedIn = localStorage.getItem('USER_ID');
  


  return (
    <Styled>
    <div className="containerQuestions">
    <div className="row">
    <div className="col-xl-2">
    <div className="topicSelector">
    <Button className="topicButtons" onClick={() => {
                    setHomeState(<Forum/>)
                    localStorage.setItem('TOPIC', 'gaming');
                    localStorage.setItem('HANDLED',false);
                    localStorage.setItem('CHANDLED',false); }}
               
     >Gaming</Button><br/>
      <Button  className="topicButtons" onClick={() => {
                    setHomeState(<Forum/>)
                    localStorage.setItem('TOPIC', 'programming');
                    localStorage.setItem('HANDLED',false);
                    localStorage.setItem('CHANDLED',false); }}
               
     >Programming</Button>
     <Button className="topicButtons" onClick={() => {
                    setHomeState(<Forum/>)
                    localStorage.setItem('TOPIC', 'U.S History');
                    localStorage.setItem('HANDLED',false);
                    localStorage.setItem('CHANDLED',false); }}
               
     >U.S History</Button>
     </div>
     </div>
     <div className="col-xl-10">{homeState}</div>
    
     </div>
     </div>
    </Styled>
    );
};

export default withRouter(Home);