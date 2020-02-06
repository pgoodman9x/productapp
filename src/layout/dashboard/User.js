import React from 'react';
import UserControl from './UserControl';
import UserControlLink from './UserControlLink';
import { useDispatch } from 'react-redux';
import { toggleUserControl } from '../../redux/actions/index';

//get user from google login
function DashboardUser({user}) {
    const dispatch = useDispatch();
    const { profileObj } = user;
        
    return (
        <div className="dashboard-user" onClick={() => dispatch(toggleUserControl(true))}>
            <div className="user-info">
                <div className="user-img">
                    <img src={profileObj.imageUrl}  alt={profileObj.name} />
                </div>
                
                <span>{profileObj.name}</span>
            </div>
           

            <UserControl user={user}>
                <UserControlLink path="/user/edit" title="Chỉnh sửa thông tin" />
                {/* <UserControlLink path="/user/logout" title="Thoát" /> */}
            </UserControl>
        </div>
    )
}

export default DashboardUser
