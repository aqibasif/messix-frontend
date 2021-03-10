import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import auth from '../services/authService';
import Navbar from './navbar';
import AppBody from './appBody';
import './stylesheet.css';
import Logout from './logout';
import LoginPage from './loginPage';
import SignupPage from './signupPage';

class Application extends Component {
  state = {};

  async componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  updateUser = () => {
    const user = auth.getCurrentUser();
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    return (
      <div className='application'>
        <Router>
          <Navbar user={user} />
          <Switch>
            <Route
              path='/login/'
              render={(props) => {
                if (auth.getCurrentUser()) {
                  return <Redirect to='/' />;
                }
                return <LoginPage {...props} updateUser={this.updateUser} />;
              }}
            />

            <Route
              path='/signup/'
              render={(props) => {
                if (auth.getCurrentUser()) {
                  return <Redirect to='/' />;
                }
                return <SignupPage {...props} updateUser={this.updateUser} />;
              }}
            />

            {user && (
              <Route
                path='/logout'
                render={(props) => (
                  <Logout {...props} updateUser={this.updateUser} />
                )}
              />
            )}

            <Route exact path='/' component={AppBody} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Application;
