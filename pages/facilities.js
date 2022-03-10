import React from 'react';

import {useRouter} from "next/router";
import Image from "next/image";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import BannerImage from '/public/assets/images/library.jpg';
import classes from './about/about-pages.module.css';
import Layout from "../components/layouts/layout";
import {facilities, navMenu} from "../misc/data";
import {extractActiveLinkText} from "../helpers/extract-links";

const FacilitiesPage = () => {
    const router = useRouter();

    return (
        <Layout
            activeLinkText={extractActiveLinkText(router.pathname, navMenu.links.facilities)}
            bannerImage={BannerImage}
            navLinks={navMenu.links.facilities}
            parentLinkText={'Media'}
        >
            <Tabs defaultActiveKey={'library'}>
                <Tab eventKey={'library'} title={'Our Library'}>
                    <Row className={'mt-4'}>
                        <Col sm={12}>
                            <p className={classes['intro-text']}>An e-library that is well equipped with up to date
                                materials. The library is a study
                                centre which offers assistance to students for the preparation of assignments,
                                independent study research and for their reading.
                            </p>
                        </Col>
                        {facilities.library.images.map((image, idx) => (
                            <Col
                                className={'d-flex justify-content-center justify-content-md-left mb-4 mb-sm-0'}
                                key={idx}
                                md={4}
                            >
                                <Image src={image} alt={''}/>
                            </Col>
                        ))}
                    </Row>
                </Tab>

                <Tab eventKey={'laboratories'} title={'Laboratories'}>
                    <Row className={'mt-4'}>
                        <Col sm={12}>
                            <p className={classes['intro-text']}>
                                Five (5) science laboratories – Physics, Chemistry, Biology, Agriculture and Basic
                                Science.
                            </p>
                            <p className={classes['intro-text']}>
                                Five (5) Vocational Workshops for vocational subjects. They are fully equipped and
                                students work both under supervision and also on their own.
                            </p>
                        </Col>
                        {facilities.laboratory.images.map((image, idx) => (
                            <Col
                                className={'d-flex justify-content-center justify-content-md-left mb-4 mb-sm-0'}
                                key={idx}
                                md={4}
                            >
                                <Image src={image} alt={''}/>
                            </Col>
                        ))}
                    </Row>
                </Tab>

                <Tab eventKey={'hostel'} title={'Our Hostels'}>
                    <Row className={'mt-4'}>
                        <Col sm={12}>
                            <p className={classes['intro-text']}>
                                The College is a full boarding institution with a healthy and secure environment which
                                provides 24 hour care. It has hundred percent students resident in the school compound.
                                There are two matrons living in the girls’ hostel and three house parents in the boys’
                                hostel. These personnel who are ever so caring, yet firm on school rules give the
                                students parental care in the hostel.
                            </p>
                            <p className={classes['intro-text']}>
                                There are five blocks of building with eight four (84) rooms for the boys. The girls
                                have four blocks of building with seventy seven rooms. There are four to six students in
                                a room. Each block has thirty four toilets and bathrooms.
                            </p>
                            <p className={classes['intro-text']}>
                                The hostel accommodation has an atmosphere of a home away from home.
                            </p>
                        </Col>
                        {facilities.hostel.images.map((image, idx) => (
                            <Col
                                className={'d-flex justify-content-center justify-content-md-left mb-4 mb-sm-0'}
                                key={idx}
                                md={4}
                            >
                                <Image src={image} alt={''}/>
                            </Col>
                        ))}
                    </Row>
                </Tab>

                <Tab eventKey={'computer-labs'} title={'Our Computer Labs'}>
                    <Row className={'mt-4'}>
                        <Col sm={12}>
                            <p className={classes['intro-text']}>
                                Two (2) general Information Technology rooms which are equipped with twenty five (25)
                                desktop computers each. These provide students with the opportunity to gain hands-on
                                experience in the field of technology.
                            </p>
                        </Col>
                        {facilities.computerLab.images.map((image, idx) => (
                            <Col
                                className={'d-flex justify-content-center justify-content-md-left mb-4 mb-sm-0'}
                                key={idx}
                                md={4}
                            >
                                <Image src={image} alt={''}/>
                            </Col>
                        ))}
                    </Row>
                </Tab>

                <Tab eventKey={'sporting'} title={'Our Sporting Facilities'}>
                    <Row className={'mt-4'}>
                        <Col sm={12}>
                            <p className={classes['intro-text']}>
                                These provide a variety of sports including basketball, handball, table tennis,
                                badminton and football. They are ever-popular relaxation venues for staff and students
                                alike.
                            </p>
                        </Col>
                        {facilities.sporting.images.map((image, idx) => (
                            <Col
                                className={'d-flex justify-content-center justify-content-md-left mb-4 mb-sm-0'}
                                key={idx}
                                md={4}
                            >
                                <Image src={image} alt={''}/>
                            </Col>
                        ))}
                    </Row>
                </Tab>

                <Tab eventKey={'transport'} title={'School Buses'}>
                    <Row className={'mt-4'}>
                        <Col sm={12}>
                            <p className={classes['intro-text']}>
                                &nbsp;
                            </p>
                        </Col>
                        {facilities.buses.images.map((image, idx) => (
                            <Col
                                className={'d-flex justify-content-center justify-content-md-left mb-4 mb-sm-0'}
                                key={idx}
                                md={4}
                            >
                                <Image src={image} alt={''}/>
                            </Col>
                        ))}
                    </Row>
                </Tab>
            </Tabs>
        </Layout>
    );
}

export default FacilitiesPage;
