import React from "react";
import Image from "next/image";

import classes from './nav-overlay.module.css';
import {navMenu} from "../../../misc/data";
import MiniBanner from '/public/assets/images/transport-3.jpg';

const NavOverlay = (props) => {

    return (
        <section
            className={classes['menu-overlay']}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}>
            <div className={classes['menu-container']}>
                <div
                    className={classes['mini-banner']}
                    style={{ background: `url(${MiniBanner}) center/cover no-repeat padding-box`}}
                >
                    <Image src={MiniBanner} alt={'Nav placeholder'}/>
                </div>

                <div className={classes['nav-description']}>{navMenu.description}</div>
                <span/>
                <div className={classes['nav-links']}>{props.children}</div>
            </div>
        </section>
    );
};

export default NavOverlay;
