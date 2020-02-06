import * as types from '../constants/ActionTypes';

var initialState = {
    isLogin: false,
    user: {}
}

const myReducer = (state = initialState, action) => {
    if(action.type === types.LOGIN_STATE){
        return {
            isLogin: action.state,
            user: action.user
        };
    }
    return state;
}

export default myReducer;