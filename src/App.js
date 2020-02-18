import React from 'react';
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
import MiniGame from "./components/MiniGame";

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { name : "" }
    this._getName = this._getName.bind(this)
  }
  _getName(e) {
    this.setState({...this.state, name: e});
  }
  render() {
  return (

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
              <Link to="/minigame">MiniGame</Link>
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
            <Configuration name = {this._getName}/>
          </Route>
          <Route path="/minigame">
            <MiniGame/>
          </Route>
          <Route path="/">
            <Home name = {this.state.name}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}}