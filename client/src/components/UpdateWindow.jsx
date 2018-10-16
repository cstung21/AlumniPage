import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
const axios = require('axios');

const UpdateForm = styled.div`
  z-index: 2;
  display: inline-block;
  position: relative;
  top: -55px;
  left: 320px;
  background-color: white;
  width: 900px;
  height:900px;

`

class UpdateWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUser,
      firstName: this.props.currentUserFName,
      lastName: this.props.currentUserLName,
      password: this.props.currentUserPW,
      hometown: this.props.currentUserHometown,
      email: this.props.currentUserEmail,
      linkedIn: this.props.currentUserLinkedIn,
      gitHub: this.props.currentUserGitHub,
      hobbies: this.props.currentUserHobbies,
      techInterests: this.props.currentUserTechInterests,
      proTip: this.props.currentUserProTip,
      image: this.props.currentUserImage
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateUserData = this.updateUserData.bind(this);
  }

  updateUserData(event) {
    event.preventDefault();
    axios.put('/users', this.state)
      .then(response => {
        console.log('User Data Updated!', response.data);
      })
      .catch(error => {
        console.log('Error updating user record!');
      });
    this.props.getAllUsersData();
    this.props.toggleUpdateWindow();
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <UpdateForm>
        <form onSubmit={this.updateUserData}>
          <label>First Name:</label>
            <input 
              type="text"
              onChange={this.handleInputChange}
              name="firstName" 
              placeholder={this.props.currentUserFName} />
          <br />
          <label>Last Name:</label>
            <input 
              type="text"
              onChange={this.handleInputChange}
              name="lastName" 
              placeholder={this.props.currentUserLName} />
          <br />
          <label>Password:</label>
            <input 
              type="password"
              onChange={this.handleInputChange}
              name="password"
              placeholder="********" />
          <br />
          <label>Hometown:</label>
            <input 
              type="text"
              onChange={this.handleInputChange}
              name="hometown"
              placeholder={this.props.currentUserHometown} />
          <br />
          <label>Email:</label>
            <input 
              type="text"
              onChange={this.handleInputChange}
              name="email"
              placeholder={this.props.currentUserEmail} />
          <br />
          <label>LinkedIn:</label>
            <input 
              type="text" 
              onChange={this.handleInputChange}
              name="linkedIn"
              placeholder={this.props.currentUserLinkedIn} />
          <br />
          <label>GitHub:</label>
            <input 
              type="text" 
              onChange={this.handleInputChange}
              name="gitHub"
              placeholder={this.props.currentUserGitHub} />
          <br />
          <label>Hobbies:</label>
            <input 
              type="textarea" 
              onChange={this.handleInputChange}
              name="hobbies"
              placeholder={this.props.currentUserHobbies}
              style={{height: '45px', width: '200px'}} />
          <br />
          <label>Tech Interests:</label>
            <input 
              type="textarea" 
              onChange={this.handleInputChange}
              name="techInterests"
              placeholder={this.props.currentUserTechInterests}
              style={{height: '45px', width: '200px'}} />
          <br />
          <label>Tips for surviving Hack Reactor:</label>
            <input 
              type="textarea" 
              onChange={this.handleInputChange}
              name="proTip"
              placeholder={this.props.currentUserProTip}
              style={{height: '45px', width: '200px'}} />
          <br />
          <label>Photo Link:</label>
            <input 
              type="textarea" 
              onChange={this.handleInputChange}
              name="image"
              placeholder={this.props.currentUserImage}
              style={{width: '500px'}} />
          <br />
          <input type="submit" value="Update" />
        </form>
      </UpdateForm>
    );
  }
};


export default UpdateWindow;
