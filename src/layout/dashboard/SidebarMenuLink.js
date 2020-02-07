import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { activeMenu } from '../../redux/actions/index';

function SidebarMenuLink({ path, title, current, position, icon}) {
    let className = (current === position) ? "active" : "";
    const dispatch = useDispatch();
    return (
        <li className={className}>
            <Link to={path} onClick={() => dispatch(activeMenu(position))}>
                <small className="icon"><img src={icon} alt="" /></small>
                <span>{title}</span>
            </Link>
        </li>
    )
}

export default SidebarMenuLink
