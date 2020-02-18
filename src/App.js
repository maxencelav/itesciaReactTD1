import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './components/About'
import Configuration from './components/Configuration'
import Home from './components/Home'
import './reducers'
import {store} from './store'

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { name : "" }

  }

  render() {
  return (
  <Provider store={store}>
  <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/conf">Configuration</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
          </ul>
        </nav>


        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/conf">
            <Configuration/>
          </Route>
          <Route path="/">
            <Home name = {store.getState().name}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}}