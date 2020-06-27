import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import data from './data.json';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedUser: false
    };
  }

  login = () => {
    this.setState({ loggedUser: true });
  }

  logout = () => {
    this.setState({ loggedUser: false });
  }


  render() {
    const { loggedUser } = this.state;

    return (
      <Switch>
        <Route
          exact path="/"
          render={props => (<Home data={data} loggedUser={loggedUser} logout={this.logout} {...props} />)}
        />

        <Route
          path="/login"
          render={props => (<Login loggedUser={loggedUser} login={this.login} {...props} />)}
        />

        <Route
          path="/signup"
          render={props => (<SignUp loggedUser={loggedUser} login={this.login} {...props} />)}
        />
      </Switch>

    );
  }
}

export default App;
