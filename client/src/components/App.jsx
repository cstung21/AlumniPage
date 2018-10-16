import React from 'react';
import ReactDom from 'react-dom';
import Login from './Login.jsx';
import Members from './Members.jsx';
import UpdateWindow from './UpdateWindow.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userVerified: false,
      users: [],
      currentUser: '',
      currentUserPW: '',
      currentUserFName: '',
      currentUserLName: '',
      currentUserHometown: '',
      currentUserEmail: '',
      currentUserLinkedIn: '',
      currentUserGitHub: '',
      currentUserHobbies: '',
      currentUserTechInterests: '',
      currentUserProTip: '',
      currentUserImage: '',
      enteredPW: '',
      currentPage: 0,
      showUpdateMenu: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleUpdateWindow = this.toggleUpdateWindow.bind(this);
    this.getAllUsersData = this.getAllUsersData.bind(this);
  }

  componentDidMount() {
    axios.get('/users')
      .then(response => {
        this.setState({
          users: response.data,
          currentPage: 1,
          currentUser: response.data[0].id,
          currentUserPW: response.data[0].password,
          currentUserFName: ''
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getAllUsersData() {
    axios.get('/users')
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  toggleUpdateWindow() {
    this.setState(prevState => ({
      showUpdateMenu: !prevState.showUpdateMenu,
    }));
  }

  handleLogin(event) {
    event.preventDefault();
    axios.get(`/users/${this.state.currentUser}`)
      .then(response => {
        this.setState({
          currentUserPW: response.data[0].password,
          currentUserFName: response.data[0].firstName,
          currentUserLName: response.data[0].lastName,
          currentUserHometown: response.data[0].hometown,
          currentUserEmail: response.data[0].email,
          currentUserLinkedIn: response.data[0].linkedIn,
          currentUserGitHub: response.data[0].gitHub,
          currentUserHobbies: response.data[0].hobbies,
          currentUserTechInterests: response.data[0].techInterests,
          currentUserProTip: response.data[0].proTip,
          currentUserImage: response.data[0].image,
        });
        if (this.state.currentUserPW !== this.state.enteredPW) {
          alert('Incorrect Password. Please try again.');
        } else {
          this.setState({
            userVerified: true
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  render() {
    let renderComponent;

    if (this.state.currentPage === 0) {
      return <h2>Loading...</h2>;
    } else if (this.state.userVerified) {
      return (
                <div>
                          <Members 
                          currentUser={this.state.currentUser} 
                          currentUserFName={this.state.currentUserFName} 
                          users={this.state.users}
                          toggleUpdateWindow={this.toggleUpdateWindow}/>

                          {this.state.showUpdateMenu ? <UpdateWindow 
                          currentUser={this.state.currentUser} 
                          currentUserFName={this.state.currentUserFName} 
                          currentUserLName={this.state.currentUserLName} 
                          currentUserPW={this.state.currentUserPW} 
                          currentUserHometown={this.state.currentUserHometown}
                          currentUserEmail={this.state.currentUserEmail}
                          currentUserLinkedIn={this.state.currentUserLinkedIn}
                          currentUserGitHub={this.state.currentUser.GitHub}
                          currentUserHobbies={this.state.currentUserHobbies}
                          currentUserTechInterests={this.state.currentUserTechInterests}
                          currentUserProTip={this.state.currentUserProTip}
                          currentUserImage={this.state.currentUserImage} 
                          getAllUsersData={this.getAllUsersData} 
                          toggleUpdateWindow={this.toggleUpdateWindow} /> : ''}
                </div>
              );

    } else if (this.state.currentPage === 1) {
      return <Login handleLogin={this.handleLogin} handleInputChange={this.handleInputChange} users={this.state.users} />;
    } 

    
    
  }
}

export default App;