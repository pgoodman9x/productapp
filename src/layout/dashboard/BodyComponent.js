import React from 'react'

function BodyComponent({title, children}) {
    return (
        <div className="body-component">
            <div className="title">{title}</div>
            <div className="component-content">
                {children}
            </div>
        </div>
    )
}

export default BodyComponent
