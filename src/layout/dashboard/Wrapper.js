import React from 'react'

function Wrapper({children}) {
    return (
        <div className="dashboard-wrapper">
            {children}
        </div>
    )
}

export default Wrapper
