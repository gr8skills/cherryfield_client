import React from 'react';

import {useRouter} from "next/router";
import Link from "next/link";

import classes from '../about/about-pages.module.css';
import BannerImage from '/public/assets/images/dining_building.jpg';
import Layout from "../../components/layouts/layout";
import {extractActiveLinkText} from "../../helpers/extract-links";
import {navMenu} from "../../misc/data";
import FooterImage from "../../public/assets/images/img_13-sm.png";

const DownloadAdmissionLink = () => {

    return (
        <a
            href={'/assets/documents/admission_cfc.pdf'}
            className={'btn btn-block btn-danger py-3'}
            target={'_blank'}
            rel={"noreferrer"}
            download
        >
            Download Application Form
        </a>
    );
}

const AdmissionInformationPage = () => {
    const router = useRouter();

    return (
        <Layout
            activeLinkText={extractActiveLinkText(router.pathname, navMenu.links.admission)}
            bannerImage={BannerImage}
            footerImage={FooterImage}
            navLinks={navMenu.links.admission}
            parentLinkText={'Admission'}
            extras={<DownloadAdmissionLink/>}
        >
            <h3 className={classes['body-sub-heading']}>Open Days:</h3>
            <p className={classes['regular-text']}>
                This is conducted once per term. Subject teachers, parents and students
                meet to discuss about the progress of students in each subject.
            </p>

            <h3 className={classes['body-sub-heading']}>Entrance Examination:</h3>
            <p className={classes['regular-text']}>
                JSS 1 Entrance examination is conducted in the following subjects – Mathematics, English Language and
                General Paper. JSS 2, SS 1 and SS 2 – English Language, Mathematics and satisfactory result from their
                previous schools.
            </p>

            <h3 className={classes['body-sub-heading']}>Entrance Procedure:</h3>
            <p className={classes['regular-text']}>
                This is through examination upon completion of admission form obtainable from the school. Dates for
                examination into JSS 1 and other classes are shown on the flyer attached to the admission form.
            </p>
        </Layout>
    );
};


export default AdmissionInformationPage;
