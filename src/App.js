import React from 'react';


import {createStore} from 'redux';
import reducer from './redux/reducers'
import {Provider} from 'react-redux'

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
import Game from './components/Game'
import Scores from './components/Scores'
import {addScore} from "./redux/actions";

const store = createStore(reducer);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }


        /*/!* Test des actions *!/
        console.log('initial state', store.getState());

        const unsubscribe = store.subscribe(() => console.log(store.getState()));

        store.dispatch(addScore({
            name: 'A',
            number: 32,
            tries: 6788906985678678
        }));

        store.dispatch(addScore({
        name: 'B',
        number: 78,
        tries: 5
        }));

        store.dispatch(addScore({
            name: 'C',
            number: 56,
            tries: 9
        }));

        store.dispatch(addScore({
            name: 'D',
            number: 12,
            tries: 89
        }));

        store.dispatch(addScore({
            name: 'E',
            number: 66,
            tries: 45
        }));

        store.dispatch(addScore({
            name: 'F',
            number: 34,
            tries: 90
        }));

        unsubscribe();
*/
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
                                    <Link to="/game">Jeu des nombres</Link>
                                </li>
                                <li>
                                    <Link to="/scores">Score</Link>
                                </li>
                                <li>
                                    <Link to="/about">À propos</Link>
                                </li>

                            </ul>
                        </nav>


                        <Switch>
                            <Route path="/about">
                                <About/>
                            </Route>
                            <Route path="/conf">
                                <Configuration/>
                            </Route>
                            <Route path="/game">
                                <Game/>
                            </Route>
                            <Route path="/scores">
                                <Scores/>
                            </Route>
                            <Route path="/">
                                <Home/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}