import {ADD_SCORE, SET_NAME} from "./actions";


const initialState = {name: "", scores: []};

// allows to sort by the tries value
function compare(a, b) {
    const triesA = a.tries;
    const triesB = b.tries;

    let comparison = 0;
    if (triesA > triesB) {
        comparison = 1;
    } else if (triesA < triesB) {
        comparison = -1;
    }
    return comparison;
}

export default function reducer(state = initialState, action) {
    console.log("reducer", action.type);
    switch (action.type) {
        case SET_NAME:
            return {...state, name: action.name};

        case ADD_SCORE:
            return {...state, scores: [...state.scores, action.score].sort(compare).slice(0,5)};


        default:
            return state;
    }
};