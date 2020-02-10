import * as types from '../constants/ActionTypes';
const initialState = false;

const myReducer = (state = initialState, action) => {
    if(action.type === types.TOGGLE_DIALOG){
        return state;
    }
    return state;
}

export default myReducer;