import React from 'react';
import './App.css';
import HomePage from '../pages/homepage/Homepage';
import shopPage from '../pages/shop/shopPage.component';
import Header from '../header/header.component';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/signInAndSignUp/signIn';
import { auth } from '../firebase/firebase.config.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unSubscribeAuth = null;

  componentDidMount() {
    this.unSubscribeAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeAuth();
  }
  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={shopPage} />
          <Route path='/signIn' component={SignIn} />
        </Switch>
      </>
    );
  }
}

export default App;
