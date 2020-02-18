import React, {Component} from "react";

class MiniGame extends React.Component{
    render() {
        return(
            <div></div>
        );
    }
}

ComponentDidMount(){
    const  script = document.createElement(NbRandom);
    document.body.appendChild(script);
}

export default MiniGame;
