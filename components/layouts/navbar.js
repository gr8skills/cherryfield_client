import React, {useState} from 'react';

import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";

import Logo from '/public/assets/images/logo.png';
import ButtonSearchToggle from "../ui/buttons/button-search-toggle";
import ButtonMenuToggle from "../ui/buttons/button-menu-toggle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from './navbar.module.css';
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {navMenu} from "../../misc/data";
import NavOverlay from "../ui/nav/nav-overlay";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons/faEnvelope";
import {FiUser} from '@react-icons/all-files/fi/FiUser';
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons/faMobileAlt";
import useSWR from "swr";
import {serverUrl} from "../../helpers/api";

const Navbar = () => {
    let overlayTimer = undefined;

    const [isExpanded, setIsExpanded] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isMenuOverlayShown, setIsMenuOverlayShown] = useState(false);
    const [overlayContent, setOverlayContent] = useState(<p>No link for the selected menu item</p>);
    const router = useRouter();


    const menuToggleClickHandler = () => setIsExpanded(prevState => !prevState);
    const closeNavDrawer = () => setIsExpanded(false);
    const mobileSearchToggle = () => setIsSearchVisible(prevState => !prevState);
    const closeSearchBox = () => setIsSearchVisible(false);

    const extractLinksFromData = (linkLabel) => {
        const fChar = linkLabel.slice(0, 1);
        const lChar = linkLabel.slice(1).toLowerCase();
        linkLabel = `${fChar}${lChar}`;

        switch (linkLabel) {
            case 'About':
                return navMenu.links.about.map((menu, idx) => (
                    <Link key={idx}
                          href={`/about/${menu.path}`}
                          onClick={() => setIsMenuOverlayShown(false)}>{menu.text}</Link>
                ));
            case 'Academics':
                return navMenu.links.academics.map((menu, idx) => (
                    <Link key={idx}
                          href={`/academics/${menu.path}`}
                          onClick={() => setIsMenuOverlayShown(false)}>{menu.text}</Link>
                ));
            case 'Admission':
                return navMenu.links.admission.map((menu, idx) => (
                    <Link
                        key={idx}
                        href={`/admission/${menu.path}`}
                        onClick={() => setIsMenuOverlayShown(false)}>{menu.text}</Link>
                ));
            case 'Media':
                return navMenu.links.media.map((menu, idx) => (
                    <Link
                        key={idx}
                        href={`/media/${menu.path}`}
                        onClick={() => setIsMenuOverlayShown(false)}>{menu.text}</Link>
                ));
            case 'Facilities':
                return navMenu.links.facilities.map((menu, idx) => (
                    <Link
                        key={idx}
                        href={`/facilities/${menu.path}`}
                        onClick={() => setIsMenuOverlayShown(false)}>{menu.text}</Link>
                ));
            default:
                return;
        }
    };

    const populateNavLinks = (linkLabel) => {
        const fChar = linkLabel.slice(0, 1);
        const lChar = linkLabel.slice(1).toLowerCase();
        linkLabel = `${fChar}${lChar}`;

        return extractLinksFromData(linkLabel);
    };

    const onOverLay = (eventTargetInnerText) => {
        const firstChar = eventTargetInnerText.slice(0, 1);
        const otherChars = eventTargetInnerText.slice(1).toLowerCase();
        eventTargetInnerText = `${firstChar}${otherChars}`;
        switch (eventTargetInnerText) {
            case 'About':
                return true;
            case 'Academics':
                return true;
            case 'Admission':
                return true;
            case 'Media':
                return true;
            case 'Facilities':
                return true;
            default:
                return false;
        }
    };

    const onOverlayHover = (e) => {
        if (isMenuOverlayShown) {
            if (overlayTimer) {
                clearTimeout(overlayTimer);
            }
            setIsMenuOverlayShown(false);
        }

        setIsMenuOverlayShown(true);
        if (onOverLay(e.target.innerText.trim())) {
            setOverlayContent(populateNavLinks(e.target.innerText.trim()));
        }
    };

    const onOverlayLeave = () => {
        overlayTimer = setTimeout(() => {
            setIsMenuOverlayShown(false);
        }, 500);
    };

    const { data: settings, errorSettings } = useSWR(`${serverUrl}/api/site-settings`);

    return (
        <>
            <div className={classes['contact-bar']}>
                <div>
                    <FontAwesomeIcon icon={faMobileAlt} color={'#E21020'}/>
                    <span className={'ml-1 mr-3'}>
                        {settings?.phone1}, {settings?.phone2} {settings?.phone3?`, `+settings.phone3:''}
                    </span>

                    <FontAwesomeIcon icon={faEnvelope} color={'#E21020'}/>
                    <span className={'ml-1 text-lowercase'}>
                        {settings?.school_email?settings.school_email:'info@cherryfieldcollege.org.ng'}
                    </span>
                </div>
            </div>

            <nav className={classes['navbar-container']}>
                <div className={classes['logo-wrapper']}>
                    <Link href={'/'} passHref>
                        <a>
                            <Image src={settings?.logo?`${serverUrl}/images/${settings.logo}`:Logo} alt={'Site logo'}/>
                        </a>
                    </Link>
                </div>
                <ul className={classes['nav-content']}>
                    <li>
                        <Link
                            href={'/about/history'}
                            passHref
                        >
                            <a
                                className={`${router.pathname.includes('/about') ? classes['active-link'] : ''}`}
                                onMouseEnter={onOverlayHover}
                                onMouseLeave={onOverlayLeave}
                            >
                                About
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/academics/curriculum'}
                            passHref
                        >
                            <a
                                className={`${router.pathname.includes('/academics') ? classes['active-link'] : ''}`}
                                onMouseEnter={onOverlayHover}
                                onMouseLeave={onOverlayLeave}
                            >
                                Academics
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/admission'}
                            passHref
                        >
                            <a
                                className={`${router.pathname.includes('/admission') ? classes['active-link'] : ''}`}
                                onMouseEnter={onOverlayHover}
                                onMouseLeave={onOverlayLeave}
                            >
                                Admission
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/media/news-events'}
                            passHref
                        >
                            <a
                                className={`${router.pathname.includes('/media') ? classes['active-link'] : ''}`}
                                onMouseEnter={onOverlayHover}
                                onMouseLeave={onOverlayLeave}
                            >
                                Media
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/facilities'}
                            passHref
                        >
                            <a
                                className={`${router.pathname.includes('/facilities') ? classes['active-link'] : ''}`}
                                onMouseEnter={onOverlayHover}
                                onMouseLeave={onOverlayLeave}
                            >
                                Facilities
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/contact'}
                            passHref
                        >
                            <a
                                className={`${router.pathname.includes('/contact') ? classes['active-link'] : ''}`}
                            >
                                Contact
                            </a>
                        </Link>
                    </li>
                    <li>
                        <a href={settings?.portal_url?settings.portal_url:'https://cherryfield.educare.school/login'}
                           className={classes['login-link']}
                           target={'_blank'}
                           rel={"noreferrer"}
                        >
                            <FiUser/>
                            <span className={'mx-1 my-0 text-capitalize'}>Portal</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <nav className={`${classes['nav-mobile']}`}>
                <div className={classes['logo-wrapper']}>
                    <Link href={'/'}>
                        <a>
                            <Image src={settings?.logo?`${serverUrl}/images/${settings.logo}`:Logo} alt={'Site logo'}/>
                        </a>
                    </Link>
                </div>
                <div className={`d-flex justify-content-end align-items-center`}>
                    <ButtonSearchToggle onClick={mobileSearchToggle}/>
                    <span/>
                    <ButtonMenuToggle isExpanded={isExpanded} clickHandler={menuToggleClickHandler}/>
                </div>
            </nav>

            {isMenuOverlayShown && (
                <NavOverlay
                    onMouseEnter={onOverlayHover}
                    onMouseLeave={onOverlayLeave}>
                    {overlayContent}
                </NavOverlay>
            )}

            <nav className={`${classes['nav-drawer']} ${isExpanded && 'nav-drawer-open'}`}>
                <ul className={classes['nav-drawer-content']}>
                    <li>
                        <Link
                            href={'/about/history'}
                            passHref
                        >
                            <a
                                className={`${router.pathname.includes('/about') ? classes['active-link'] : ''}`}
                                onClick={closeNavDrawer}
                            >
                                About
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/academics/curriculum'}
                            passHref
                        >
                            <a
                                className={`${router.pathname.includes('/academics') ? classes['active-link'] : ''}`}
                                onClick={closeNavDrawer}
                            >
                                Academics
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={'/admission'}
                            passHref
                        >
                            <a
                                className={`${router.pathname.includes('/admission') ? classes['active-link'] : ''}`}
                                onClick={closeNavDrawer}
                            >
                                Admission
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/media/news-events'}
                              passHref
                        >
                            <a
                                className={`${router.pathname.includes('/media') ? classes['active-link'] : ''}`}
                                onClick={closeNavDrawer}
                            >
                                Media
                            </a>
                        </Link>
                    </li>
                    <li className={'mb-4'}>
                        <Link href={'/facilities'}
                              passHref
                        >
                            <a
                                className={`${router.pathname.includes('/facilities') ? classes['active-link'] : ''}`}
                                onClick={closeNavDrawer}
                            >
                                Facilities
                            </a>
                        </Link>
                    </li>
                    <a href={settings?.portal_url?settings.portal_url:`https://cherryfield.educare.school/login`}
                       className={classes['login-link']}
                       style={{backgroundColor: '#ffffff', border: 'none'}}
                       target={'_blank'} rel={"noreferrer"}>
                        <FiUser/>
                        <span className={'mx-1 my-0'}>
                            Portal
                        </span>
                    </a>
                </ul>
            </nav>

            <div className={`${classes['mobile-search-wrapper']} ${isSearchVisible && 'search-mobile-open'}`}>
                <input type={'text'} placeholder={'Enter search term'}/>
                <button type={'button'} onClick={closeSearchBox}>Search</button>
            </div>
        </>
    );
};

export default Navbar;
