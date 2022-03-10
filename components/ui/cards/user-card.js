import React from "react";
// import Image from "next/image";

import classes from './user-card.module.css';

const UserCard = (props) => {
    const {name, title, image} = props;
    console.log('image src user card -> ', image.src);

    return (
        <div className={classes['card-wrapper']}>
            <div className={classes.image} style={{
                background: `url(${image.src}) center/cover no-repeat padding-box`
            }}/>
            <h4>{name}</h4>
            <p>{title}</p>
        </div>
    );
};

export default UserCard;
