import './App.css';
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Rider from './component/Rider/Rider';
import Destination from './component/Destination/Destination';

function App() {
  return (
      <Router>
        <Header></Header>
         <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/rider">
            <Rider></Rider>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
