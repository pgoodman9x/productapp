import * as types from '../constants/ActionTypes';
let initialUSState = false;

const myReducer = (state = initialUSState, action) => {
    if(action.type === types.TOGGLE_USERCONTROL){
        return action.onShow;
    }
    return state;
}

export default myReducer;