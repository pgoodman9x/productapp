import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleUserControl } from '../../redux/actions/index';


function UserControl({children}) {
    const userControlState = useSelector(state => state.userControlState);
    const dispatch = useDispatch();

    const ref = useRef(null);
    useEffect(() => {
        const current = ref.current;
        const handleClickOut = (event) => {
            if(!current.contains(event.target)){
                dispatch(toggleUserControl(false));
            }
        }
        if(current){
            document.addEventListener("mousedown", handleClickOut);
            return () => {
                document.removeEventListener("mousedown", handleClickOut);
            }
        }
    })

    let style = userControlState ? {display: "block"} : {display: "none"};

    return (
        <ul className="dashboard-usercontrol" ref={ref} style={style}>
            {children}
        </ul>
    )
}

export default UserControl
