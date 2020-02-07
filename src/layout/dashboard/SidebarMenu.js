import React from 'react'
import SidebarMenuLink from './SidebarMenuLink';
import { useSelector } from 'react-redux';
/* import { activeMenu } from '../../redux/actions/index'; */

function SidebarMenu({list}) {
    //Test
    
    const menuPosition = useSelector(state => state.menuPosition);

    return (
        <ul className="sidebar-menu">
            {list.map((menuLink) => {
                return <SidebarMenuLink key={menuLink.id} 
                                        path={menuLink.path} 
                                        title={menuLink.title} 
                                        position={menuLink.position} 
                                        current={menuPosition}
                                        icon={menuLink.iconPath}
                                        />
            })}
        </ul>
    )
}

export default SidebarMenu
