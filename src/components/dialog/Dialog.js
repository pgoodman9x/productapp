import React from 'react';
import './Dialog.scss';
import { createPortal } from 'react-dom';
import { usePortal } from '../../utils/hooks/usePortal';

function Dialog() {
    const portal = usePortal('modal');
    return createPortal(
        <div>
            
        </div>,
        portal
    )
}

export default Dialog