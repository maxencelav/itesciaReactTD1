import React from 'react';
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