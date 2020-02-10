import * as types from '../constants/ActionTypes';
const initialMenu = {
    position: 0,
};

const myReducer = (state=initialMenu, action) => {
    if(action.type === types.ACTIVE_MENU){
        return {
            position: action.position,
        };
    }
    return state;
}

export default myReducer;