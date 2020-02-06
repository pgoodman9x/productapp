import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';
import UserModalInner from './UserModalInner';
import './UserModal.scss';

function UserModal() {
    function useCustomDiv() {
        const div = useRef(document.createElement('div'));
        useEffect(() => {
            let currentDiv = div.current;
            currentDiv.setAttribute('id', 'modal');
            document.body.append(currentDiv);
            return () => {
                currentDiv.remove();
            }
        }, [])
        return div.current;
    }
    const test = useCustomDiv();
    console.log(test);

    /*       return (
            <div>
    
            </div>
        )  */


    return createPortal(
        <UserModalInner />,
        test
    )


}

export default UserModal
