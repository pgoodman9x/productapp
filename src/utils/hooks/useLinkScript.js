import { useEffect } from 'react';


export const useLinkScript = (url, bool=true) => {
    useEffect(() => {
        let text = (bool ? "link" : "script");
        const finalElement = document.createElement(text);
        if(!bool){
            finalElement.src = url;
            finalElement.async = true;
            document.body.appendChild(finalElement);
        }else{
            finalElement.rel  = 'stylesheet';
            finalElement.type = 'text/css';
            finalElement.href = url;
            document.head.appendChild(finalElement);
        }
        return () => {
            if(!bool){
                document.body.removeChild(finalElement);
            }else{
                document.head.removeChild(finalElement);
            }
        }
    }, [url]);
}

export default useLinkScript;