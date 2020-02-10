import React from 'react';
import { useSelector } from 'react-redux';

function UserControl({children}) {
    const userControlState = useSelector(state => state.userControlState.onShow);
    let style = userControlState ? {display: "block"} : {display: "none"};

    return (
        <ul className="dashboard-usercontrol" style={style}>
            {children}
        </ul>
    )
}

export default UserControl
