import { Col, Row, Popconfirm, Button } from 'antd';

import React, { Fragment, useEffect, useState } from 'react';
import CreateForum from "./createForum";
import { deleteForum, getAllForumsByUser } from './util/forums';
import { Link, withRouter } from "react-router-dom";

import Comment from './comment';
import { set } from 'date-fns';
import comment from './comment';




const Forum = (props) => {
  const { history } = props;
  const [isFetchingData, setFetchingData] = useState(true);
  const [formMessage, setFormMessage] = useState(null);
  const [forumData, setForumData] = useState(null);
  const [topic,setForumTopic] = useState(null);
  const [viewComments, setCommentView] = useState(null);
  const [viewCommentsMsg, setCommentMsg] = useState('Show Comments');
  

  
  const hello = (apple) => {
    if (viewCommentsMsg=='Show Comments'){
      setCommentMsg("Hide Comments");
      setCommentView(<Comment forumsID={apple} userID={isLoggedIn} />);
     
    }
    else{
   
      setCommentMsg('Show Comments');
      setCommentView();
    
    }
  
  };
  
  const notHandledAction = async () => {
    setCommentMsg('Show Comments');
    setCommentView();
    try {
      
      let response = await getAllForumsByUser({ forum: { topic: myTopic }});
      if (Boolean(response.isSuccess)) {
        setForumData(response.data);
        setFetchingData(false);
      } else {
        setFormMessage('An error occurred during server process!');
      }
    } catch (e) {
      console.error(e);
    }
  };
  

  const isLoggedIn = localStorage.getItem('USER_ID');
  const myTopic = localStorage.getItem('TOPIC');
  let myTopicC = myTopic.charAt(0).toUpperCase() + myTopic.slice(1);
  let handled = localStorage.getItem('HANDLED');
  if(localStorage.getItem('HANDLED')=='false'){
    notHandledAction();
    localStorage.setItem('HANDLED',true);
   
  };


  useEffect(() => {

    const fetchForumData = async () => {
      
      try {
        
        let response = await getAllForumsByUser({ forum: { topic: myTopic }});
        if (Boolean(response.isSuccess)) {
          setForumData(response.data);
          setFetchingData(false);
        } else {
          setFormMessage('An error occurred during server process!');
        }
      } catch (e) {
        console.error(e);
      }
    };
    
    if (isFetchingData) {
      fetchForumData();
      
    }
   
  });


  return (
    <Fragment>
      <Button href="/create">Hello world</Button>
      


      
      <h1>{myTopicC}</h1>
      <div className="d-flex w-100 flex-column forum-container">
        <h6 className="d-flex justify-content-center">{formMessage}</h6>
        {(forumData || []).map(({ forumsID, forumsDescription, forumsTitle, topic }) => {
          return (
            <Fragment>
              <Row className="d-flex flex-column post-container">
              
                <Row className="post-title">
                  <Col>Forum Title:</Col>
                  <Col className="title">{forumsTitle}</Col>
                </Row>
                <Row className="post-description"> 
                  <Col>Forum Description:</Col>
                  <Col className="description">{forumsDescription}</Col>
                </Row>
                <Button onClick={() => hello(forumsID)}>{viewCommentsMsg}</Button>
                <div>
                  {viewComments}
                </div>
              </Row>
            </Fragment>
          );
        })}
        {(forumData || []).length === 0 && <Col className="inform-text">You don't have any post yet</Col>}
      </div>
   
    </Fragment>
    
  );
};

export default withRouter(Forum);