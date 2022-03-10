import React from 'react';

import {useRouter} from "next/router";

import classes from './about-pages.module.css';
import BannerImage from '/public/assets/images/side_view_of_school.png';
import Layout from "../../components/layouts/layout";
import {extractActiveLinkText} from "../../helpers/extract-links";
import {navMenu} from "../../misc/data";
import FooterImage from "../../public/assets/images/img_13-sm.png";
import useSWR from "swr";
import {serverUrl} from "../../helpers/api";

const PoliciesPage = () => {
    const router = useRouter();
    const { data: fetchData, errorData } = useSWR(`${serverUrl}/api/about/policies`);
    const pageData = fetchData?fetchData:'';

    return (
        <Layout
            activeLinkText={extractActiveLinkText(router.pathname, navMenu.links.about)}
            bannerImage={pageData?.banner?pageData.banner:BannerImage}
            footerImage={pageData?.footer_image?pageData.footer_image:FooterImage}
            navLinks={navMenu.links.about}
            parentLinkText={'About'}
        >
            <span dangerouslySetInnerHTML={{__html: pageData?.content}} />
        </Layout>
    );
};

export default PoliciesPage;
