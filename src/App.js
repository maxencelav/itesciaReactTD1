import React, {Children} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from 'react-router-dom';

export default function NestingExample() {
  return(
      <Router>
        <div>
            <ul>
                <li>
                    <Link to="/accueil"> Accueil </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/config"> Config </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/a-propos"> À Propos </Link>
                </li>
            </ul>

            <hr/>

            <Switch>
                <Route exact path="/accueil">
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Accueil />
                </Route>
                <Route exact path = "/config">
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Config />
                </Route>
                <Route path="/a-propos">
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <APropos />
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

function Accueil(){
    return(
      <div>
          <h2>Acceuil</h2>
      </div>
    );
}

function Config(){
    return(
      <div>
          <h2>Configuration</h2>

          <form>
              <ul>
                  <li>
                      <label for="Nom">Nom : </label>
                      <input type="text" name="Nom" id="Nom" placeholder="Tapie"/>
                  </li>
                  <li>
                      <label for="Prenom">Prénom : </label>
                      <input type="text" name="Prenom" id="Prenom" placeholder="Bernard"/>
                  </li>
              </ul>
          </form>
      </div>
    );
}

function APropos(){
    let { path , url } = useRouteMatch();
    return(
      <div>
          <h2>À Propos</h2>

          <ul>
              <li>
                  <Link to = {`${url}/first-info`}>Première info</Link>
              </li>
              <li>
                  <Link to = {`${url}/second-info`}>Seconde info</Link>
              </li>
              <li>
                  <Link to = {`${url}/third-info`}>Troisième info</Link>
              </li>
          </ul>

          <Switch>
              <Route exact path = {path}>
                <h3>Choisissez une info</h3>
              </Route>
              <Route path = {`${path}/:aproposID`}>
                  <APropos/>
              </Route>
          </Switch>

      </div>
    );
}

function aPropos() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let {aproposID} = useParams();
    return(
      <div>
          <h3>{aproposID}</h3>
      </div>
    );
}
