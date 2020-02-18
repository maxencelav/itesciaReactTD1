import React from 'react';
import {connect} from 'react-redux';

class Game extends React.Component {
    constructor() {
        super();

        this.randomNumber = this.setRandomNumber();
        console.log("start : "+ this.randomNumber);

        this.tries = 0;

        this.state = {
            txt: ''
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
        console.log("reset : "+ this.randomNumber);
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
            this.reset();
        }
    }

    render() {
        const {txt} = this.state;
        return (
            <div>
                <h2>Jeu des nombres</h2>
                <p>Règles du jeu:
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
                </p>

                {txt}

                <form onSubmit={event => this.handleSubmit(event)}>
                    <label>
                        <input type="text" id="numberEntry"/>
                    </label> <br/>
                    <input type="submit" value="Tester le nombre"/>
                </form>
            </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

export default connect(mapStateToProps)(Game);