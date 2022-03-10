import React from 'react';

import {useRouter} from "next/router";
import Image from "next/image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import classes from './styles.module.css';
import BannerImage from '/public/assets/images/dining.jpg';
import Layout from "../../components/layouts/layout";
import {extractActiveLinkText} from "../../helpers/extract-links";
import {eventsPost, navMenu} from "../../misc/data";
import FooterImage from "../../public/assets/images/img_13-sm.png";

const NewsEventsPage = () => {
    const router = useRouter();

    return (
        <Layout
            activeLinkText={extractActiveLinkText(router.pathname, navMenu.links.media)}
            bannerImage={BannerImage}
            footerImage={FooterImage}
            navLinks={navMenu.links.media}
            parentLinkText={'Media'}
        >
            <Container>
                <Row>
                    {eventsPost.map(item => (
                        <Col
                            className={'mb-5 mb-sm-0'}
                            key={item.sn}
                            md={6}
                        >
                            <Card style={{
                                minHeight: '350px',
                                maxHeight: '350px'
                            }}>
                                <Image
                                    alt={item.title}
                                    src={item.image}
                                    width={240}
                                    height={190}
                                />
                                <Card.Body>
                                    <Card.Title className={classes['card-title']}>{item.title}</Card.Title>
                                    <Card.Subtitle className={classes['card-date']}>{item.date}</Card.Subtitle>
                                    <Card.Link href={'#'}>Read more</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Layout>
    );
};

export default NewsEventsPage;
