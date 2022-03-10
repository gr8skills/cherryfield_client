import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from './nav-toggle-buttons.module.css';
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import React from "react";

const ButtonMenuToggle = (props) => {
    const onClickHandler = (event) => {
        props.clickHandler(event);
    };

    return (
        <button className={`${classes.button}`} onClick={onClickHandler}>
            {!props.isExpanded ? <FontAwesomeIcon icon={faBars}/>
                : <FontAwesomeIcon icon={faTimes}/>}
        </button>
    );
}

export default ButtonMenuToggle;
