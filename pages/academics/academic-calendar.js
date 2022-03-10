import React from 'react';

import {useRouter} from "next/router";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import classes from '../about/about-pages.module.css';
import BannerImage from '/public/assets/images/classroom.jpg';
import Layout from "../../components/layouts/layout";
import {extractActiveLinkText} from "../../helpers/extract-links";
import {navMenu} from "../../misc/data";
import FooterImage from "../../public/assets/images/img_13-sm.png";
import FirstTermCalendar from "../../components/calendar/terms-schedule";
import useSWR from "swr";
import {serverUrl} from "../../helpers/api";

const AcademicCalendarPage = () => {
    const router = useRouter();
    const { data: fetchData, errorData } = useSWR(`${serverUrl}/api/academics/academic-calender`);
    const pageData = fetchData?fetchData:'';

    return (
        <Layout
            activeLinkText={extractActiveLinkText(router.pathname, navMenu.links.academics)}
            bannerImage={pageData?.banner?pageData.banner:BannerImage}
            footerImage={pageData?.footer_image?pageData.footer_image:FooterImage}
            navLinks={navMenu.links.academics}
            parentLinkText={'Academics'}
        >
            <Tabs defaultActiveKey={'first'}>
                <Tab eventKey={'first'} title={'First Term'}>
                    <div className={'mt-4'}>
                        <h3 className={`${classes['body-sub-heading']} mb-3 text-uppercase`}>Important Dates</h3>
                        <FirstTermCalendar/>
                    </div>
                </Tab>
                {/*<Tab eventKey={'second'} title={'Second Term'}>*/}
                {/*    <div className={'mt-4'}>*/}
                {/*        <h3 className={`${classes['body-sub-heading']} mb-3 text-uppercase`}>Important Dates</h3>*/}
                {/*        <SecondTermCalendar/>*/}
                {/*    </div>*/}
                {/*</Tab>*/}
                {/*<Tab eventKey={'third'} title={'Third Term'}>*/}
                {/*    <div className={'mt-4'}>*/}
                {/*        <h3 className={`${classes['body-sub-heading']} mb-3 text-uppercase`}>Important Dates</h3>*/}
                {/*        <ThirdTermCalendar/>*/}
                {/*    </div>*/}
                {/*</Tab>*/}
            </Tabs>
        </Layout>
    );
};

export default AcademicCalendarPage;
