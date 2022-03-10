import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from './back-to-top.module.css';
import {faArrowUp} from "@fortawesome/free-solid-svg-icons/faArrowUp";

const ButtonToTop = () => {
    const  [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    useEffect(() =>{
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div>
            {isVisible && (
                <button className={classes['to-top']} onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} size={'1x'}/>
                    {/*<span>Back to top</span>*/}
                </button>
            )}
        </div>
    );
};

export default ButtonToTop;
