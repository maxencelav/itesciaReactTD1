import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Scores extends React.Component {
    constructor() {
        super();

        this.state = {
            scores: []
        }
    }

    render() {
        const {scores} = this.props;
        console.log(scores)


        return (
            <div>
                <h2>Scores</h2>
                <ol>
                    {scores.map((score, index) => {
                        console.log(score)

                        return (
                            <li key={index}>{score.name} a deviné {score.number} en {score.tries} essai(s)</li>
                        );
                    })}
                </ol>
            </div>);
    }
}


const mapStateToProps = state => {
    return {
        scores: state.scores
    };
}

export default withRouter(connect(mapStateToProps)(Scores));