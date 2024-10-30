// hooks/useScreenSize.js
import { useState, useEffect } from 'react';

function useScreenSize(breakpoint) {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > breakpoint);

    useEffect(() => {
        const handleResize = () => setIsWideScreen(window.innerWidth > breakpoint);
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isWideScreen;
}

export default useScreenSize;
