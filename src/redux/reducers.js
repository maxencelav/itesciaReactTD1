import { ADD_SCORE, SET_NAME } from "./actions";

export default function reducer(state = {}, action){
    console.log(action, action.type);
    switch(action.type) {
        case SET_NAME:
        return {
            ...state,
            name: action.name
        };

        case ADD_SCORE:
            return { ...state, score: [ ...state.score, action.score ] };

        
        default:
            return state;
        }
};