import { Col, Row, Popconfirm } from 'antd';
import Button from 'react-bootstrap/Button'
import React, { Fragment, useEffect, useState } from 'react';
import CreateForum from "./createForum";
import { deleteForum, getAllForumsByTopic } from './util/forums';
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components'
import Comment from './comment';
import { set } from 'date-fns';
import comment from './comment';

const Styles = styled.div`
.newForumButton{
  margin-top:2%;
}

.viewCommentsButton{
  margin-top:2%;
  width: 25%;
  margin: auto;
  margin-top: 2%;
}
h1{
  text-align: center;
}

`;





const Forum = (props) => {
  const { history } = props;
  const [isFetchingData, setFetchingData] = useState(true);
  const [formMessage, setFormMessage] = useState(null);
  const [forumData, setForumData] = useState(null);
  const [topic,setForumTopic] = useState(null);
  const [viewComments, setCommentView] = useState(null);
  const [viewCommentsMsg, setCommentMsg] = useState('Show Comments');
  

  
  const showHideComments = (comments) => {
    if (viewCommentsMsg=='Show Comments'){
      setCommentMsg("Hide Comments");
      setCommentView(<Comment forumsID={comments} userID={isLoggedIn} />);
     
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
      
      let response = await getAllForumsByTopic({ forum: { topic: myTopic }});
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
        
        let response = await getAllForumsByTopic({ forum: { topic: myTopic }});
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
      <Styles>
      <Button variant="outline-primary" className="newForumButton" href="/create">Click here to post a new {myTopic} question</Button>
      


      
      <h1 >{myTopicC}</h1>
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
                <Button variant="outline-primary" className ="viewCommentsButton" onClick={() => showHideComments(forumsID)}>{viewCommentsMsg}</Button>
                <div>
                  {viewComments}
                </div>
              </Row>
            </Fragment>
          );
        })}
        {(forumData || []).length === 0 && <Col className="inform-text">There are no posts to show!</Col>}
      </div>
      </Styles>
    </Fragment>
    
  );
};

export default withRouter(Forum);