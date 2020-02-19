import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addScore} from "../redux/actions";


class Game extends React.Component {
    constructor() {
        super();

        this.randomNumber = this.setRandomNumber();
        console.log("start : " + this.randomNumber);

        this.tries = 0;

        this.state = {
            scores: []
        }
    }

    setRandomNumber() {
        let min = 0;
        let max = 101;
        let nbr = Math.floor(min + Math.random() * (max - min));
        return nbr;
    }

    reset() {
        this.randomNumber = this.setRandomNumber();
        this.tries = 0;
        console.log("reset : " + this.randomNumber);
    }

    restartGame() {
        this.setState({...this.state, txt: 'Perdu ! (le nombre était ' + this.randomNumber + ')'});
        this.reset();
    }

    handleSubmit(event) {
        event.preventDefault();
        //this.props.name(event.target[0].value);
        let number = parseInt(event.target[0].value);

        this.tries++;
        console.log(this.tries + ": " + number + "&" + this.randomNumber)
        if (number > this.randomNumber) {
            this.setState({...this.state, txt: 'C\'est plus petit !'});
        } else if (number < this.randomNumber) {
            this.setState({...this.state, txt: 'C\'est plus grand !'});
        } else if (number === this.randomNumber) {
            this.setState({...this.state, txt: 'Gagné !'});
            // add score
            this.addScore(this.props.name, this.randomNumber, this.tries);
            this.reset();
        }
    }

    addScore(name, number, tries) {
        this.props.addScore({
            name: name,
            number: parseInt(number),
            tries: parseInt(tries)
        });
    }

    render() {
        const {txt} = this.state;

        return (
            <div>
                <h2>Jeu des nombres</h2>
                <p>Règles du jeu:</p>
                <ul>
                    <li>Devinez un nombre entre 1 et 100. (inclus)</li>
                    <li>Si le nombre que vous avez entré est supérieur, <strong>C’est plus petit.</strong> sera
                        affiché.
                    </li>
                    <li>Si le nombre que vous avez entré est inférieur, <strong>C’est plus grand.</strong> sera
                        affiché.
                    </li>
                    <li>Vous pouvez cliquer sur <strong>Recommencer</strong> pour recommencer une partie.</li>
                </ul>


                {txt}

                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>
                        <input type="text" id="numberEntry"/>
                    </label> <br/>
                    <input type="submit" value="Tester le nombre"/>
                </form>

                <button onClick={event => this.restartGame()}>Recommencer</button>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addScore: score => {
            dispatch(addScore(score))
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Game));