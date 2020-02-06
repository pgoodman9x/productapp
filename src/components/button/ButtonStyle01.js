import React from 'react';
import './Button.scss';

function Button({color, size, children, onClick}) {
    let className = `${color} ${size}`;
    return (
        <>
            <button className={className} onClick={onClick}>{children}</button> 
        </>
    )
}

export default Button
