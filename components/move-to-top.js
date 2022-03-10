import {useEffect} from 'react';

import {useRouter} from "next/router";

const MoveToTop = () => {
    const router = useRouter();
    const routePath = router.pathname;

    const onTop = () => {
        // window.scroll(0,0);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    };

    useEffect(() => {
        onTop();

    }, [routePath]);

    return null;
};

export default MoveToTop;
