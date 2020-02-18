import React from 'react';
import {store} from '../store';
import {setName, setStatus} from '../actions';
import {connect} from 'react-redux';

class Game extends React.Component {
    min = 1;
    max = 100;
    randomNumber = parseInt(this.min + Math.random() * (this.max - this.min));
    tries = 0;
    currentStatus;

    reset(){
        this.number = parseInt(this.min + Math.random() * (this.max - this.min));
        this.tries = 0;
        setStatus(0);
    }

    numberCheck(number, randomNumber){
        if (number > randomNumber){
            return 1;
        } else if (number < randomNumber) {
            return -1;
        } else {
            return 0;
        }
    }

    renderStatus(number){
        switch (number) {
            case 0:
                return (<div><p id="status">Gagné !</p></div>)

            case 1:
                return (<div><p id="status">C'est plus grand.</p></div>)

            case -1:
                return (<div><p id="status">C'est plus petit.</p></div>)

            case null:
                return (<div><p id="status">Perdu !</p></div>)

        }
                return (<div><p id="status"></p></div>)
    }


    handleSubmit(event) {
        event.preventDefault();
        //this.props.name(event.target[0].value);
        //store.dispatch(setName(event.target[0].value));

        this.tries++;
        console.log("randomNumber "+this.randomNumber);
        this.currentStatus = this.numberCheck(event.target[0].value,this.randomNumber);
        console.log(this.tries,this.numberCheck(event.target[0].value,this.randomNumber))
    }

    render() {
    return(
        <div>
            <h2>Jeu des nombres</h2>
            <p>Règles du jeu:
                <ul>
                    <li>Devinez un nombre entre 1 et 100. (inclus)</li>
                    <li>Si le nombre que vous avez entré est supérieur, <strong>C’est plus petit.</strong> sera affiché.</li>
                    <li>Si le nombre que vous avez entré est inférieur, <strong>C’est plus grand.</strong> sera affiché.</li>
                    <li>Vous pouvez cliquer sur <strong>Recommencer</strong> pour recommencer une partie.</li>
                </ul>
            </p>

            {this.renderStatus(this.currentStatus)}



            <form onSubmit={ event => this.handleSubmit(event) }>
                <label>
                    <input type="text" id="numberEntry"/>
                </label> <br/>
                <input type="submit" value="Tester le nombre" />
            </form>
        </div>);
        }
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

export default connect(mapStateToProps, null)(Game);