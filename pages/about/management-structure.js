import React from 'react';

import {useRouter} from "next/router";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import {BOTMembers, staffMembers} from "../../misc/data";
import BannerImage from '/public/assets/images/structure-view.png';
import Layout from "../../components/layouts/layout";
import {extractActiveLinkText} from "../../helpers/extract-links";
import {navMenu} from "../../misc/data";
import FooterImage from "../../public/assets/images/img_13-sm.png";
import UserCard from "../../components/ui/cards/user-card";
import useSWR from "swr";
import {serverUrl} from "../../helpers/api";

const ManagementStructurePage = () => {
    const router = useRouter();
    console.log('Staff members -> ', staffMembers);
    const { data: fetchData, errorData } = useSWR(`${serverUrl}/api/about/management-structure`);
    const pageData = fetchData?fetchData:'';
    return (
        <Layout
            activeLinkText={extractActiveLinkText(router.pathname, navMenu.links.about)}
            bannerImage={pageData?.banner?pageData.banner:BannerImage}
            footerImage={pageData?.footer_image?pageData.footer_image:FooterImage}
            navLinks={navMenu.links.about}
            parentLinkText={'About'}
        >
            <Tabs defaultActiveKey={'bod'}>
                <Tab eventKey={'bod'} title={'Board of Directors/Governors'}>
                    <div className={'d-flex justify-content-start align-items-start flex-wrap mt-4'}>
                        {BOTMembers.map(member => (
                            <UserCard
                                key={member.id}
                                name={member.name}
                                title={member.title}
                                image={member.image}
                            />
                        ))}
                    </div>
                </Tab>

                <Tab eventKey={'mgt-staff'} title={'Management Staff'}>
                    <div className={'d-flex justify-content-center justify-content-md-start align-items-start flex-wrap mt-4'}>
                        {staffMembers.map(staff => (
                            <UserCard
                                key={staff.id}
                                name={staff.name}
                                title={staff.title}
                                image={staff.image}
                            />
                        ))}
                    </div>
                </Tab>
            </Tabs>
        </Layout>
    );
};

export default ManagementStructurePage;
