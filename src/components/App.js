import './App.css';
import HomePage from '../pages/homepage/Homepage';
import shopPage from '../pages/shop/shopPage.component';
import Header from '../header/header.component';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/signInAndSignUp/signIn';
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={shopPage} />
        <Route path='/signIn' component={SignIn} />
      </Switch>
    </>
  );
}

export default App;
