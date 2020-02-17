import React, {Children} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from 'react-router-dom';

export default function ParamsExample() {
  return(
      <Router>
        <div>

          <h2>Account</h2>

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

            <switch>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Route path="/:id" children = {< Child />} />
            </switch>
        </div>
      </Router>
  );
}

function Child(){
    let { id } = useParams();
    return(
        <div>
            <h3>ID: {id}</h3>
        </div>
    );
}

