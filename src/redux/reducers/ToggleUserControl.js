import * as types from '../constants/ActionTypes';
let initialState = false;

const myReducer = (state = initialState, action) => {
    if(action.type === types.TOGGLE_USERCONTROL){
        state = action.onShow;
        return state;
    }
    return state;
}

export default myReducer;