import React from 'react';
import User from './User';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar }  from '../../redux/actions/index';

function Header() {
    const sideBarState = useSelector((state) => state.sideBarState);
    const user = useSelector(state => state.user);

    let userLoginState = user.isLogin;
    let userInformation = user.user;
    
    const dispatch = useDispatch();
  
    let className = sideBarState ? "toggle-sidebar active" : "toggle-sidebar";

    return (
        <div className="dashboard-header">
            <button className={className} onClick={() => dispatch(toggleSidebar())}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            {
                userLoginState ? <User user={userInformation} /> : <span>Xin chào, Khách</span>
            }
        </div>
    )
}

export default Header
