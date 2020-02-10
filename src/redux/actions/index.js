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

export const loginState = (state, user, showModal) => {
    return {
        type: types.LOGIN_STATE,
        state,
        user,
        showModal
    }
}

export const activeMenu = (position) => {
    return {
        type: types.ACTIVE_MENU,
        position,
    }
}

export const toggleDialog = () => {
    return {
        type: types.TOGGLE_DIALOG,

    }
}