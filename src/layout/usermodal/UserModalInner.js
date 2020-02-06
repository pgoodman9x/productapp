import React from 'react';
import Image from '../../assets/images/obj.png';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginState } from '../../redux/actions/index';
import cloneDeep from 'lodash/cloneDeep';

function UserModalInner() {
    const dispatch = useDispatch();

    const responseGoogle = (response) => {
        if(response){
            let clone = cloneDeep(response);
            dispatch(loginState(true, clone));
        }
    }

    return (
        <div className="user-modal">
            <div className="user-modal--inner">
            <span>[ĐĂNG NHẬP] Người dùng cá nhân</span>
            <img src={Image} alt=""/>
            <p>Đăng nhập bằng Google</p>
            <GoogleLogin
                        clientId="930201920939-2nh9a8prkhfajtbatgbjutes3tqq8ajq.apps.googleusercontent.com"
                        buttonText="Đăng nhập"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
            </div>
        </div>
    )
}

export default UserModalInner
