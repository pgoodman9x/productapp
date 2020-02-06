import * as types from '../constants/ActionTypes';
let initialState = false;

const myReducer = (state = initialState, action) => {
    if(action.type === types.TOGGLE_SIDEBAR){
        state = !state;
        return state;
    }
    return state;
}

export default myReducer;