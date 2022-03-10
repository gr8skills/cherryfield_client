import React from "react";

import Card from "react-bootstrap/Card";
import useWindowSize from "../../../hooks/use-window-size";
import classes from './article-card.module.css';
import { useRouter } from "next/router";

const ArticleCard = (props) => {
    const {horizontal, style, image, content, author, date, slug} = props;
    const {width} = useWindowSize();
    const router = useRouter();

    let orientation = 'column';

    if (horizontal && horizontal === true && width > 700) {
        orientation = 'row';
    }

    const styles = {
        display: 'flex',
        flexDirection: orientation,
        padding: '1rem 1.2rem',
        width: orientation === 'column' ? '340px' : 'auto',
        ...style,
    };


    if (width < 500) {
        styles.width = '350px';
    }

    let cardImgStyle = {
        marginRight: orientation === 'row' ? '25px' : '0',
        // width: '250px',
        height: orientation === 'row' ? '230px' : '250px',
    };

    if (width < 450) {
        cardImgStyle = {marginRight: '0'};
    }

    return (
        <Card style={styles} className={classes['article-card']}>
            {/*<img src={props.image} alt={''} style={cardImgStyle}/>*/}
            <div className={classes['thumbnail']} style={{
                ...cardImgStyle,
                background: `url(${image}) center/cover no-repeat padding-box`,
            }}/>
            <div className={classes['article-card-content']} style={{marginTop: orientation !== 'row' ? '25px' : '0'}}>
                <p className={'p-1'}>{content}</p>
                <hr />
                <p className={'p-1'} onClick={(_) => router.push(`../news/${slug}`)}>read more...</p>
                <footer className={`${classes['footer']} d-flex justify-content-between mt-2`}>
                    <span className={`text-muted`}>By {author}</span>
                    <span>{date}</span>
                </footer>
            </div>
        </Card>
    );
};

export default ArticleCard;
