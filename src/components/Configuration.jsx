import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setName} from '../redux/actions';

class Configuration extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        let name = event.target[0].value;
        this.props.setName(name);
    }

    render() {
        return (
            <div>
                <h2>Configuration</h2>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>
                        Nom :
                        <input type="text" name="name"/>
                    </label>
                    <br/>
                    <input type="submit" value="Envoyer"/>
                </form>
            </div>);
    }
}

const mapStateToProps = state => {
    return {
        name: state.name
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setName: name => {
            dispatch(setName(name))
        }
    };
}


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Configuration));