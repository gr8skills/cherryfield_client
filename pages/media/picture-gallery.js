import React from 'react';

import {useRouter} from "next/router";


import BannerImage from '/public/assets/images/dining.jpg';
import Layout from "../../components/layouts/layout";
import {extractActiveLinkText} from "../../helpers/extract-links";
import {navMenu} from "../../misc/data";
import FooterImage from "../../public/assets/images/img_13-sm.png";

const PictureGalleryPage = () => {
    const router = useRouter();

    return (
        <Layout
            activeLinkText={extractActiveLinkText(router.pathname, navMenu.links.media)}
            bannerImage={BannerImage}
            footerImage={FooterImage}
            navLinks={navMenu.links.media}
            parentLinkText={'Media'}
        >
            <p className={'my-5 py-5 text-center'}>
                This page has no contents.
            </p>
        </Layout>
    );
};

export default PictureGalleryPage;
