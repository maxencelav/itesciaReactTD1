import React from 'react';
import {store} from '../store';
import {setName} from '../actions';

export default class Configuration extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        //this.props.name(event.target[0].value);
        store.dispatch(setName(event.target[0].value));
    }
    render() {
    return(
        <div>
            <h2>Configuration</h2>
            <form onSubmit={ event => this.handleSubmit(event) }>
                <label>
                    Nom :
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        </div>);
        }
}

const _setName = text => ({ type: "SET_NAME", text });