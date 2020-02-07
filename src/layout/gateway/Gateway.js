import React from 'react';
import './Gateway.scss';
import Image from '../../assets/images/obj.png';
import GoogleCharacter from '../../assets/images/g-char.png';

import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginState } from '../../redux/actions/index';
import cloneDeep from 'lodash/cloneDeep';

import Button from '../../components/button/Button';


export default function Gateway({ role, control }) {
    const dispatch = useDispatch();
    const responseGoogle = (response) => {
        if (response) {
            let clone = cloneDeep(response);
            dispatch(loginState(true, clone));
        }
    }

    return (
        <div className="gateway">
            <div className="container">
                <div className="gateway-infor">
                    <div className="gate-name">Cổng thông tin - {role}</div>
                    <div className="gate-info">
                        <div className="gate-spec">
                            <span>{control ? "[QUẢN TRỊ] " : "[NGƯỜI DÙNG] "}</span>
                            <small>{control ? "Quản trị bán hàng" : "Giao dịch sản phẩm"}</small>
                        </div>
                        <small>Đăng nhập bằng tài khoản Google</small>
                    </div>

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
                <div className="gateway-image">
                    <img src={Image} alt="" />
                </div>
            </div>
        </div>
    )
}
