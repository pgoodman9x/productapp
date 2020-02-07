import * as types from '../constants/ActionTypes';
const initialPosition = 0;

const myReducer = (state=initialPosition, action) => {
    if(action.type === types.ACTIVE_MENU){
        return action.position;
    }
    return state;
}

export default myReducer;