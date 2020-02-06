import * as types from '../constants/ActionTypes';

export const toggleSidebar = () => {
    return {
        type: types.TOGGLE_SIDEBAR
    }
}

export const toggleUserControl = (onShow) => {
    return {
        type: types.TOGGLE_USERCONTROL,
        onShow
    }
}

export const loginState = (state, user) => {
    return {
        type: types.LOGIN_STATE,
        state,
        user
    }
}