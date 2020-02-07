import React from 'react';
import Image from '../../assets/images/obj.png';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginState } from '../../redux/actions/index';
import cloneDeep from 'lodash/cloneDeep';

import Button from '../../components/button/Button';
import GoogleCharacter from '../../assets/images/g-char.png';

function UserModalInner() {
    const dispatch = useDispatch();

    const responseGoogle = (response) => {
        if(response){
            if(response.error){
                console.log("Closed popup");
                //dispatch(loginState(false, response.error));
                return;
            }else{
                let clone = cloneDeep(response);
                dispatch(loginState(true, clone));
            }
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
                        render={
                            renderProps =>
                                <Button onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    iconPath={GoogleCharacter}
                                    className="c-btn01"
                                    text="Đăng nhập với Google"
                                />

                        }
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
            </div>
        </div>
    )
}

export default UserModalInner
