import React from 'react';
import Configuration from './Configuration';


class Home extends React.Component {
    render() {
    return(
        <div>
            <h2>Accueil</h2>
            <p>Hello {this.props.name}</p>
        </div>);

    }
}

export default Home;