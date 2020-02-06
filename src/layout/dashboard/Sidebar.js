import React from 'react'
import SidebarBottom from './SidebarBottom';
import SidebarChildComponent from './SidebarChildComponent'
import SidebarMenu from './SidebarMenu'
import SquareIcon from '../../assets/images/ico_square.png';
import { Link } from 'react-router-dom';

function Sidebar({ logoTitle, path }) {
    const menuList = [
        {
            id: 1,
            title: 'Tất cả sản phẩm',
            position: 0,
            iconPath: SquareIcon,
            path: ''
        },
        {
            id: 2,
            title: 'Test',
            iconPath: SquareIcon,
            position: 1,
            path: ''
        }
    ]
    return (
        <div className="sidebar">
            <Link to={path}>
                <h1 className="sidebar-ttl">{logoTitle}</h1>
            </Link>

            <SidebarBottom>
                <SidebarChildComponent title="Danh Mục">
                    <SidebarMenu list={menuList} />
                </SidebarChildComponent>
            </SidebarBottom>
        </div>
    )
}

export default Sidebar
