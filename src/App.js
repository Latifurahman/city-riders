import './App.css';
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import NoMatch from './component/NoMatch/NoMatch';

function App() {
  return (
      <Router>
         <Switch>
          <Route>
            <Header></Header>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
