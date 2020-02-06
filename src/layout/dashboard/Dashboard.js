import React from 'react'
import Header from './Header'
import Body from './Body'
import Sidebar from './Sidebar'
import Wrapper from './Wrapper'
import './Dashboard.scss'
import { useSelector } from 'react-redux';
import UserModal from '../usermodal/UserModal';

function Dashboard() {
    const sideBarState = useSelector((state) => state.sideBarState);
    const user = useSelector(state => state.user);
    const userLoginState = user.isLogin;

    let className = sideBarState ? "dashboard hide-sidebar" : "dashboard";

    return (
        <div className={className}>
            <Sidebar logoTitle="TRANG CHỦ" path="/" />
            <Wrapper>
                <Header />
                <Body>

                </Body>
            </Wrapper>
            {!userLoginState ?  <UserModal /> : undefined}
           
        </div>
    )
}

export default Dashboard
