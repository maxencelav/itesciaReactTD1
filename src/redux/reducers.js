import {ADD_SCORE, SET_NAME} from "./actions";


const initialState = {name: "", scores: []};


export default function reducer(state = initialState, action) {
    console.log("reducer", action.type);
    switch (action.type) {
        case SET_NAME:
            return {...state, name: action.name};

        case ADD_SCORE:
            return {...state, scores: [...state.scores, action.score]};


        default:
            return state;
    }
};