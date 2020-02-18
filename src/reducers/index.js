export default (state = {}, action) => {
    console.log(action, action.type);
    switch(action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            };



        default:
            return state;
    }
};