import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

import {Container, Row, Col} from "react-bootstrap";
import classes from './layout.module.css';
import Navbar from "./navbar";
import Footer from "./footer";
import ButtonToTop from "../ui/buttons/back-to-top";
import StickyButtonsGroup from "../sticky-buttons-group";
import MoveToTop from "../move-to-top";
import SearchOverlay from "../search-overlay";


const Layout = (props) => {
    const {bannerImage, parentLinkText, activeLinkText, navLinks, children, extras} = props;
    const router = useRouter();
    const [activeRoute, setActiveRoute] = useState(null);
    const parentLink = parentLinkText.toLowerCase();

    useEffect(() => {
        setActiveRoute(router.pathname.trim().toLowerCase());

    }, [router.pathname]);


    return (
        <main>
            <Navbar/>
            <section className={classes['banner-section']}>
                {/*<img src={props.bannerImage} alt={'Page Banner'}/>*/}
                <div style={{background: `url(${bannerImage.src}) center/cover no-repeat padding-box`}}/>
            </section>

            <Container>
                <Row>
                    <Col sm={{span: 12, order: 2}} md={{span: 9, order: 1}}>
                        <h2 className={classes['parent-link-text']}>{parentLinkText}</h2>
                        <h3 className={classes['active-link-text']}>{activeLinkText}</h3>
                        <div>&nbsp;</div>
                        <section>{children}</section>
                    </Col>

                    <Col sm={{span: 12, order: 1}} md={{span: 3, order: 2}}>
                        <aside className={classes['sidenav-links']}>
                            <ul>
                                {navLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href={link.path}
                                            passHref
                                        >
                                            <a className={`${activeRoute === ('/' + parentLink + '/' + link.path) ? classes['active-link'] : ''}`}>
                                                {link.text}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                        {!!extras && (extras)}
                    </Col>
                </Row>
            </Container>
            <Footer/>

            <StickyButtonsGroup/>
            <ButtonToTop/>
            <MoveToTop/>
            {/*<SearchOverlay />*/}
        </main>
    );
};

export default Layout;
