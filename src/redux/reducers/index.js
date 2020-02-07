import { combineReducers } from 'redux';
import sideBarState from './ToggleSidebar';
import userControlState from './ToggleUserControl';
import menuPosition from './ActiveMenu';
import user from './User';

const myReducer = combineReducers({
    sideBarState,
    userControlState,
    user,
    menuPosition
})

export default myReducer;