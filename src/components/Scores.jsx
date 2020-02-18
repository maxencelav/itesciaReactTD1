import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Scores extends React.Component {
    constructor(props) {
        super(props);

        this.state = { scores: [] }
    }

    render() {
        const {scores} = this.props;

        return (
            <div>
                <h2>Scores</h2>
                <ol>
                    {scores.map((score, index) => {
                        return (
                            <li key={index}>{score.name}</li>
                        );
                    })}
                </ol>
            </div>);
    }
}


const mapStateToProps = (state) => {
    return {
        scores: state.scores
    }
}

export default withRouter(connect(mapStateToProps)(Scores));