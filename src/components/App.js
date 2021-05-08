import "./App.css";
import HomePage from "../pages/homepage/Homepage";
import shopPage from "../pages/shop/shopPage.component";
import Header from "../header/header.component";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={shopPage} />
      </Switch>
    </>
  );
}

export default App;
