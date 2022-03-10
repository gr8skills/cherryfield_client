import React from 'react';

import {useRouter} from "next/router";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Spinner from "react-bootstrap/Spinner";

import BannerImage from '/public/assets/images/chemistry_lab.png';
import Layout from "../../components/layouts/layout";
import {extractActiveLinkText} from "../../helpers/extract-links";
import {navMenu} from "../../misc/data";
import FooterImage from "../../public/assets/images/img_13-sm.png";
import ResultAnalysisByGrade from "../../components/result-analysis/by-grade";
import useSWR from "swr";
import {serverUrl} from "../../helpers/api";

const ResultAnalysisPage = () => {
    const router = useRouter();
    const { data: fetchData, errorData } = useSWR(`${serverUrl}/api/about/brief-history`);
    const pageData = fetchData?fetchData:'';

    return (
        <Layout
            activeLinkText={extractActiveLinkText(router.pathname, navMenu.links.academics)}
            bannerImage={pageData?.banner?pageData.banner:BannerImage}
            footerImage={pageData?.footer_image?pageData.footer_image:FooterImage}
            navLinks={navMenu.links.academics}
            parentLinkText={'Academics'}
        >
            <Tabs defaultActiveKey={'grade'}>
                <Tab eventKey={'grade'} title={'Analysis of Results by Grade'}>
                    <ResultAnalysisByGrade />
                </Tab>

                <Tab eventKey={'statics'} title={'Statistics of Results'}>
                    <p className={'text-center my-5 py-5'}>
                        <div className={'d-flex justify-content-center align-items-center'}>
                            <Spinner
                                animation={'border'}
                                variant={'secondary'}
                                size={'sm'}
                            />
                            <span className={'ml-1'}>Loading...</span>
                        </div>
                    </p>
                </Tab>

                <Tab eventKey={'analysis'} title={'Analysis of Credits & Passes'}>
                    <p className={'text-center my-5 py-5'}>
                        <div className={'d-flex justify-content-center align-items-center'}>
                            <Spinner
                                animation={'border'}
                                variant={'secondary'}
                                size={'sm'}
                            />
                            <span className={'ml-1'}>Loading...</span>
                        </div>
                    </p>
                </Tab>
            </Tabs>
        </Layout>
    );
};

export default ResultAnalysisPage;
