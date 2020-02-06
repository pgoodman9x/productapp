import React from 'react'

function SidebarChildComponent({title, children}) {
    return (
        <div className="sidebar-child">
            <span className="title">{title}</span>
            <div className="sidebar-content">
                {children}
            </div>
        </div>
    )
}

export default SidebarChildComponent
