import React from 'react';
import { GoogleLogout } from 'react-google-login';
import {  useDispatch } from 'react-redux';
import { loginState } from '../../redux/actions/index';

function SidebarBottom({children}) {
    const dispatch = useDispatch();
    const logoutGoogle = () => {
        dispatch(loginState(false, {}));
        console.log("Log out from Google");
    }

    return (
        <div className="sidebar-bottom">
            <div>
                {children}
            </div>
            <GoogleLogout
                        clientId="930201920939-2nh9a8prkhfajtbatgbjutes3tqq8ajq.apps.googleusercontent.com"
                        buttonText="Đăng xuất"
                        onLogoutSuccess={logoutGoogle}
                    >
                    </GoogleLogout>
            {/* <Button color="red">Đăng xuất</Button> */}
        </div>
    )
}

export default SidebarBottom
