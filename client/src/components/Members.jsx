import React from 'react';
import ReactDom from 'react-dom';
import MemberList from './MemberList.jsx';
import MemberDetail from './MemberDetail.jsx';
import styled from 'styled-components';
const axios = require('axios');

const Welcome = styled.h2`
  display: inline-block;
  position: relative;
  left: 20px;
`
const UpdateLink = styled.span`
  position: relative;
  left: 30px;
  font-size: 10pt;
`

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUserId: '',
      selectedUserDetails: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      selectedUserId: event.target.name
    });
    axios.get(`/users/${event.target.name}`)
      .then(response => {
        this.setState({
          selectedUserDetails: response.data[0]
        });
        console.log(response.data[0])
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Welcome>Welcome, {this.props.currentUserFName}!</Welcome><a href="#" onClick={this.props.toggleUpdateWindow}><UpdateLink>Update my profile</UpdateLink></a>
        <br />
        <MemberList users={this.props.users} handleClick={this.handleClick} />
        {this.state.selectedUserDetails ? <MemberDetail selectedUserDetails={this.state.selectedUserDetails} /> : ''}
      </div>
    );
  }

};

export default Members;