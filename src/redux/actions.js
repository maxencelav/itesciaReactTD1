export const ADD_SCORE = 'ADD_SCORE';
export const SET_NAME = 'SET_NAME';

export function setName(text) {
    return {
        type: SET_NAME,
        name: text
    }
}

export function addScore(score) {
    return {
        type: ADD_SCORE,
        score
    }

}