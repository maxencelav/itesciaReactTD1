import React from 'react';
import {
    Prompt
} from "react-router-dom";

class Score extends React.Component {
    constructor(props) {
        super(props);
        this.number =  '';
        this.random = 0;
    }

    submit(event){
        event.preventDefault();
        this.number  = event.target[0].value;
    }

    randomNumber(){

        this.random = Math.floor(Math.random()*100)
    }

    eventNumber(){
        if (this.submit()<this.random){

        }
    }

    render() {
        return(
            <div>

                <label>Trouve le bon nombre compris entre 1 et 100</label>
                <form onSubmit={event => this.submit(event)}>
                    <input type ="text"></input>
                    <button>envoyer</button>
                    <button>recommencer</button>
                </form>
                <Prompt message= "+">
                </Prompt>
            </div>);
    }
}

export default Score;