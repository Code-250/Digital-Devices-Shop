import "./App.css";
import HomePage from "../pages/homepage/Homepage";
import { Switch, Route } from "react-router-dom";

const mensPage = () => {
  return (
    <div>
      <h1>Mens Page</h1>
    </div>
  );
};
function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/mens" component={mensPage} />
    </Switch>
  );
}

export default App;
