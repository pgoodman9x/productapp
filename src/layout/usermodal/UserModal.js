import React from 'react'
import { createPortal } from 'react-dom';
import UserModalInner from './UserModalInner';
import './UserModal.scss';

import { usePortal } from '../../utils/hooks/usePortal';

function UserModal() {
    const portal = usePortal('modal');
    return createPortal(
        <UserModalInner />,
        portal
    )


}

export default UserModal
