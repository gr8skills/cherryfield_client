import React from 'react';

import {useRouter} from "next/router";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import classes from '../about/about-pages.module.css';
import BannerImage from '/public/assets/images/visual_art_studio.png';
import Layout from "../../components/layouts/layout";
import {extractActiveLinkText} from "../../helpers/extract-links";
import {navMenu} from "../../misc/data";
import FooterImage from "../../public/assets/images/img_13-sm.png";
import useSWR from "swr";
import {serverUrl} from "../../helpers/api";

const CurriculumPages = () => {
    const router = useRouter();
    const { data: fetchData, errorData } = useSWR(`${serverUrl}/api/academics/curriculum`);
    const pageData = fetchData?fetchData:'';

    return (
        <Layout
            activeLinkText={extractActiveLinkText(router.pathname, navMenu.links.academics)}
            bannerImage={pageData?.banner?pageData.banner:BannerImage}
            footerImage={pageData?.footer_image?pageData.footer_image:FooterImage}
            navLinks={navMenu.links.academics}
            parentLinkText={'Academics'}
        >
            <Container>
                <Row className={'mb-4 mb-sm-0'}>
                    <Col sm={12} md={6} className={'mb-4 mb-sm-0'}>
                        <Card>
                            <Card.Header>
                                <h4 className={classes['body-sub-heading']}>
                                    Junior Secondary School.
                                </h4>
                            </Card.Header>

                            <Card.Body>
                                <p className={classes['intro-text']}>
                                    Junior Secondary School use Basic Education Curriculum developed by the Nigerian
                                    Educational Research and Development Council (NERDC). Subjects offered include:
                                </p>
                                <ol className={classes['list']}>
                                    <li>English Studies</li>
                                    <li>Mathematics</li>
                                    <li>Basic Science and Technology, comprising of Basic Science, Basic Technology,
                                        Computer Studies and Physical/Health Education.
                                    </li>
                                    <li>Religious and Natural Value – comprising of Social Studies, Civic Education,
                                        Christian Religious Studies/Islamic Studies and Security Education.
                                    </li>
                                    <li>Cultural and Creative Arts – Music and Creative Art.</li>
                                    <li>Business Studies</li>
                                    <li>Nigerian Languages – Hausa, Igbo and Yoruba.</li>
                                    <li>Pre-Vocational Studies – Home Economics and Agricultural Science.</li>
                                    <li>French Language.</li>
                                </ol>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={6}>
                        <Card>
                            <Card.Header>
                                <h4
                                    className={classes['body-sub-heading']}
                                >Senior Secondary School.</h4>
                            </Card.Header>
                            <Card.Body>
                                <span dangerouslySetInnerHTML={{__html: pageData?.content}} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default CurriculumPages;
