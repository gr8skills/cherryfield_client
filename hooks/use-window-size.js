import {useEffect, useState} from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    const handleWindowResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize();

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return windowSize;
};

export default useWindowSize;
