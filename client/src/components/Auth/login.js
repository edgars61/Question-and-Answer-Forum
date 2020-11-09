import { FormGroup,ControlLabel, FormControl, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components'

import { loginUser } from './util/users';

const Styles = styled.div`
.Login{
  width:50%;
}

*{
  margin:auto;
  padding-top: 1%;
  width:100%;
  
}

.loginButton{
  
  background-color:green;
  color:white;
  width: 25%;
  margin-top:2%;
}

@media only screen and (max-width: 600px) {
  .Login {
    width:90%;
  }
}



`;



const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
  },
};

const Login = (props) => {
  const { history } = props;
  const [isSubmitting, setSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState(null);

  const onFinish = async values => {
   
    values.preventDefault();
    let userInfo = {user:{userEmail:values.target.userEmail.value,userPassword:values.target.userPassword.value}}
    
    
    try {
      let response = await loginUser(userInfo);
      window.alert("attempting to login");
      console.log(response);
      
      if (Boolean(response.isSuccess)) {
        setSubmitting(false);
        localStorage.setItem('USER_ID', response.data.response.userID);
        localStorage.setItem('NAME', response.data.response.userFName.concat(' ', response.data.response.userLName))
        history.push('/home');
      } else {
        setSubmitting(false);
        setFormMessage('Incorrect email or password!');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Styles>
    <div className="Login col-xl-12">
    <form  onSubmit={onFinish} >
      <FormGroup controlId="email" bsSize="large">
        <ControlLabel>Email</ControlLabel>
        <FormControl
        name="userEmail"
          
        />
      </FormGroup>
      <FormGroup controlId="userPassword" bsSize="large">
        <ControlLabel>Password</ControlLabel>
        <FormControl
         name="password"
         
        />
      </FormGroup>
      <Button  className="loginButton" variant = "primary" block bsSize="large" type="submit">
        Login
      </Button>
    </form>
  </div>
  </Styles>
  );
};

export default withRouter(Login);