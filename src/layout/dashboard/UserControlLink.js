import React from 'react';
import { Link } from 'react-router-dom';

function UserControlLink({ path, title }) {
    return (
        <li>
            <Link to={path}>{title}</Link>
        </li>
    )
}

export default UserControlLink
