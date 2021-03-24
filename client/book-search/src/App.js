import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js'
import Saved from './pages/Saved.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={["/saved"]}>
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
