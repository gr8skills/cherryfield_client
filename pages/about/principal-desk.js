import React from 'react';

import Image from "next/image";
import {useRouter} from "next/router";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import classes from './about-pages.module.css';
import BannerImage from '/public/assets/images/school_view.png';
import PrincipalPic from '/public/assets/images/principals-desk.jpg';
import Layout from "../../components/layouts/layout";
import {extractActiveLinkText} from "../../helpers/extract-links";
import {navMenu} from "../../misc/data";
import FooterImage from "../../public/assets/images/img_13-sm.png";
import useWindowSize from "../../hooks/use-window-size";
import useSWR from "swr";
import {serverUrl} from "../../helpers/api";

const PrincipalDeskPage = () => {
    const router = useRouter();
    const {width} = useWindowSize();
    const { data: fetchData, errorData } = useSWR(`${serverUrl}/api/about/principal-desk`);
    const pageData = fetchData?fetchData:'';

    return (
        <Layout
            activeLinkText={extractActiveLinkText(router.pathname, navMenu.links.about)}
            bannerImage={pageData?.banner?pageData.banner:BannerImage}
            footerImage={pageData?.footer_image?pageData.footer_image:FooterImage}
            navLinks={navMenu.links.about}
            parentLinkText={'About'}
        >
            <Container>
                <Row>
                    <Col
                        sm={{span: 12, order: 2}}
                        md={{span: 3, order: 1}}
                        className={'mb-4 text-center mb-sm-0 text-sm-left'}
                    >
                        <Image
                            alt={''}
                            src={PrincipalPic}
                            height={`${width < 500 ? 400 : 320}`}
                            width={`${width < 500 ? 380 : 240}`}
                        />
                    </Col>

                    <Col sm={{span: 12, order: 1}} md={{span: 9, order: 2}}>
                        <span dangerouslySetInnerHTML={{__html: pageData?.content}} />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default PrincipalDeskPage;
