import React from 'react';

import {useRouter} from "next/router";

import {extractActiveLinkText} from "../../helpers/extract-links";
import {navMenu} from "../../misc/data";
import BannerImage from "/public/assets/images/school-front.png";
import FooterImage from "/public/assets/images/img_13-sm.png";
import Layout from "../../components/layouts/layout";

import classes from './about-pages.module.css';
import MoveToTop from "../../components/move-to-top";
import useSWR from "swr";
import {serverUrl} from "../../helpers/api";

const AboutHomePage = () => {
    const router = useRouter();
    console.log('router ', router.pathname);
    const { data: fetchData, errorData } = useSWR(`${serverUrl}/api/about/brief-history`);
    const pageData = fetchData?fetchData:'';

    return (
        <>
            <Layout
                activeLinkText={extractActiveLinkText(router.pathname, navMenu.links.about)}
                bannerImage={pageData?.banner?pageData.banner:BannerImage}
                footerImage={pageData?.footer_image?pageData.footer_image:FooterImage}
                navLinks={navMenu.links.about}
                parentLinkText={'About'}
            >

                <p className={classes['regular-text']} dangerouslySetInnerHTML={{__html: pageData?.content}} />
            </Layout>

            <MoveToTop/>
        </>
    );
}

export default AboutHomePage;
