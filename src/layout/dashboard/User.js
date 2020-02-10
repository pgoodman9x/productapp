import React, { useRef, useEffect } from 'react';
import UserControl from './UserControl';
import UserControlLink from './UserControlLink';
import { useSelector, useDispatch } from 'react-redux';
import { toggleUserControl } from '../../redux/actions/index';

//get user from google login
function DashboardUser({ user }) {
    const userControlState = useSelector(state => state.userControlState.onShow);
    const dispatch = useDispatch();
    const { profileObj } = user;
    const ref = useRef(null);

    useEffect(() => {
        const current = ref.current;
        const handleClickOut = (event) => {
            if(!current.contains(event.target)){
                dispatch(toggleUserControl(false));
            }
        }
        if(current){
            document.addEventListener("click", handleClickOut);
            return () => {
                document.removeEventListener("click", handleClickOut);
            }
        }
    })

    const handleClick = () => {
        userControlState ? dispatch(toggleUserControl(false)) : dispatch(toggleUserControl(true)) 
    }

    return (
        <div className="dashboard-user" ref={ref} onClick={() => handleClick()}>
            <div className="user-info">
                <div className="user-img">
                    <img src={profileObj.imageUrl} alt={profileObj.name} />
                </div>

                <span>{profileObj.name}</span>
            </div>

            <UserControl user={user}>
                <UserControlLink path="/" title="Chỉnh sửa thông tin" />
                {/* <UserControlLink path="/user/logout" title="Thoát" /> */}
            </UserControl>


        </div>
    )
}

export default DashboardUser
