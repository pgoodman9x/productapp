import { combineReducers } from 'redux';
import sideBarState from './ToggleSidebar';
import userControlState from './ToggleUserControl';
import menu from './ActiveMenu';
import user from './User';

const myReducer = combineReducers({
    sideBarState,
    userControlState,
    user,
    menu,
})

export default myReducer;