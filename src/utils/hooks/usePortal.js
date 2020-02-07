import { useEffect, useRef } from 'react';

export const usePortal = (portalName) => {
    const div = useRef(document.createElement('div'));
    useEffect(() => {
        let current = div.current;
        current.setAttribute('id', portalName);
        document.body.append(current);
        return () => {
            current.remove();
            console.log("Cleaned up portal");
        }
    }, [portalName]);
    return div.current;
}