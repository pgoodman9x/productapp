import * as types from '../constants/ActionTypes';
const initalSBState = false;

const myReducer = (state = initalSBState, action) => {
    if(action.type === types.TOGGLE_SIDEBAR){
        return !state;
    }
    return state;
}

export default myReducer;