import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";

import classes from './nav-toggle-buttons.module.css';

const ButtonSearchToggle = (props) => {

    return (
        <button className={classes.button} onClick={props.onClick}>
            <FontAwesomeIcon icon={faSearch}/>
        </button>
    );
};

export default ButtonSearchToggle;
