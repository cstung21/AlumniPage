import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  text-align: center;
`

const Login = (props) => {
  return (
    <LoginContainer>
      <h1>Welcome to the Hack Reactor Alumni Page!</h1>
      <h2>Please log in</h2>

      <form onSubmit={props.handleLogin}>
        <label>
          Name:
          <select name="currentUser" onChange={props.handleInputChange}>
            {
              props.users.map(user => 
                <option key={user.id} value={user.id}>{user.firstName + ' ' + user.lastName}</option>
              )
            }
          </select>
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="enteredPW" onChange={props.handleInputChange}/>
        </label>
        <input type="submit" value="Login" />
      </form>
    </LoginContainer>
  );
};

export default Login;