import React from 'react';
import {connect} from 'react-redux';
class Home extends React.Component {
    render() {
    return(
        <div>
            <h2>Accueil</h2>
            <p>Hello {this.props.name}</p>
        </div>);
        
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

export default connect(mapStateToProps)(Home);