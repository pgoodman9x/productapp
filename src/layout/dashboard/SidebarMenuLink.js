import React from 'react'
import { Link } from 'react-router-dom';

function SidebarMenuLink({ path, title, current, position, icon}) {
    let className = (current === position) ? "active" : "";
    return (
        <li className={className}>
            <Link to={path} onClick={() => alert('clicked')}>
                <small className="icon"><img src={icon} alt="" /></small>
                <span>{title}</span>
            </Link>
        </li>
    )
}

export default SidebarMenuLink
