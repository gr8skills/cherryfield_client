import React from "react";
import classes from './button-clear.module.css';

const ButtonClear = (props) => {
    const styles = `${classes['button']} ${props.className}`;

    if (props.href) {
        return <a href={props.href} className={styles} target={'_blank'} rel="noreferrer">
            {props.children}
        </a>;
    }

    return (
        <button
            className={styles}
            onClick={props.onClick}
        >{props.children}</button>
    );
};

export default ButtonClear;
