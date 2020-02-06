import React from 'react'
import SidebarMenuLink from './SidebarMenuLink';
import { useState } from 'react';

function SidebarMenu({list}) {
    //Test
    const [active, setActive] = useState(0);
    return (
        <ul className="sidebar-menu">
            {list.map((menuLink) => {
                return <SidebarMenuLink key={menuLink.id} 
                                        path={menuLink.path} 
                                        title={menuLink.title} 
                                        position={menuLink.position} 
                                        current={active}
                                        icon={menuLink.iconPath}
                                        />
            })}
        </ul>
    )
}

export default SidebarMenu
