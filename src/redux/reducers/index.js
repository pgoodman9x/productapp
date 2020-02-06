import { combineReducers } from 'redux';
import sideBarState from './ToggleSidebar';
import userControlState from './ToggleUserControl';
import user from './User';

const myReducer = combineReducers({
    sideBarState,
    userControlState,
    user
})

export default myReducer;