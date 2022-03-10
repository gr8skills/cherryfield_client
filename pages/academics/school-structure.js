import React from 'react';

import {useRouter} from "next/router";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
//
// import classes from '../about/about-pages.module.css';
import BannerImage from '/public/assets/images/school-structure-banner.png';
import Layout from "../../components/layouts/layout";
import {extractActiveLinkText} from "../../helpers/extract-links";
import {navMenu} from "../../misc/data";
import FooterImage from "../../public/assets/images/img_13-sm.png";
import classes from "../about/about-pages.module.css";
import useSWR from "swr";
import {serverUrl} from "../../helpers/api";

const SchoolStructurePage = () => {
    const router = useRouter();
    const { data: fetchData, errorData } = useSWR(`${serverUrl}/api/academics/school-structure`);
    const pageData = fetchData?fetchData:'';

    return (
        <Layout
            activeLinkText={extractActiveLinkText(router.pathname, navMenu.links.academics)}
            bannerImage={pageData?.banner?pageData.banner:BannerImage}
            footerImage={pageData?.footer_image?pageData.footer_image:FooterImage}
            navLinks={navMenu.links.academics}
            parentLinkText={'Academics'}
        >
            <p className={classes['regular-text']} dangerouslySetInnerHTML={{__html: pageData?.content}} />
        </Layout>
    );
};

export default SchoolStructurePage;
