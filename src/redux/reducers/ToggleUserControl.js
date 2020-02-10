import * as types from '../constants/ActionTypes';
const initialUSState = {
    onShow: false
};

const myReducer = (state = initialUSState, action) => {
    if(action.type === types.TOGGLE_USERCONTROL){
        return {
            onShow: action.onShow
        };
    }
    return state;
}

export default myReducer;