import * as types from '../constants/ActionTypes';

var initialUserState = {
    isLogin: false,
    user: {},
    showModal: false
}

const myReducer = (state = initialUserState, action) => {
    if(action.type === types.LOGIN_STATE){
        return {
            isLogin: action.state,
            user: action.user,
            showModal: action.showModal ? action.showModal : false
        };
    }
    return state;
}

export default myReducer;