import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { loginState } from '../../redux/actions/index';
import Button from '../../components/button/Button';
import LogoutIcon from '../../assets/images/ico_logout.png';

function SidebarBottom({ children }) {
    const user = useSelector(state => state.user);
    const userLoginState = user.isLogin;

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
            {userLoginState ?
                <GoogleLogout
                    clientId="930201920939-2nh9a8prkhfajtbatgbjutes3tqq8ajq.apps.googleusercontent.com"
                    buttonText="Đăng xuất"
                    render={
                        renderProps =>
                            <Button onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                iconPath={LogoutIcon}
                                className="c-btn02"
                                text="Đăng xuất"
                            />

                    }
                    onLogoutSuccess={logoutGoogle}
                >
                </GoogleLogout>
                : undefined

            }
        </div>
    )
}

export default SidebarBottom
