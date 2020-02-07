import React from 'react';
import './Button.scss';

export default function Button({text, onClick, className, disabled, iconPath}) {
/*     let className;
    switch(style){
        case 1:
            className="c-btn01";
            break;
        case 2:
            className="c-btn02";
            break;
        case 3:
            className="c-btn03";
            break;
    } */
    return (
        <>

            <button className={className} onClick={onClick} disabled={disabled}>
                <span className="icon"><img src={iconPath} alt={text} /></span>
                {text}
            </button> 
        </>
    )
}
