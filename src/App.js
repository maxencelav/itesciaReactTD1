import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default function Example() {
  return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/accueil">Acceuil</Link>
            </li>
            <li>
              <Link to="/config">Configuration</Link>
            </li>
            <li>
              <Link to="/aPropos">À propos</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/accueil">
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <Accueil />
            </Route>
            <Route path="/Config">
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <Config />
            </Route>
            <Route path="/aPropos">
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <APropos />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Accueil() {
    return (
        <div>
            <h2>Accueil</h2>
        </div>
    );
}

function Config() {
    return (
        <div>
            <h2>Configuration</h2>
        </div>
    );
}

function APropos() {
    return (
        <div>
            <h2>À Propos</h2>
        </div>
    );
}


