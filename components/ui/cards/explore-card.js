import React from "react";

import Image from "next/image";

import classes from './explore-card.module.css';

const ExploreCard = (props) => {

    return (
        <div className={classes['explore-card']}>
            <Image src={props.image} alt={''}/>
            <h4>{props.title}</h4>
            <p>{props.subtitle}</p>
        </div>
    );
};

export default ExploreCard;
