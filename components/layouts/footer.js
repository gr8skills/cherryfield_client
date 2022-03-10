import React from 'react';

import Image from "next/image";
import Link from "next/link";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './footer.module.css';
import Logo from '/public/assets/images/logo.png';
import Facebook from '/public/assets/images/facebook.svg';
import Instagram from '/public/assets/images/instagram.svg';
import Twitter from '/public/assets/images/twitter.svg';
import Educare from '/public/assets/images/educare.png';
import ASIA from '/public/assets/images/aisa-logo-bl.svg';
import AISEN from '/public/assets/images/aisen.png';
import ALLIANCE from '/public/assets/images/alliance.svg';
import COBI from '/public/assets/images/cobi.svg';
import CAMBRIDGE from '/public/assets/images/cambridge.svg';
import {faFacebookF} from "@fortawesome/free-brands-svg-icons/faFacebookF";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {faGooglePlus} from "@fortawesome/free-brands-svg-icons/faGooglePlus";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons/faEnvelope";
import useSWR from "swr";
import {serverUrl} from "../../helpers/api";


const footerLinks = [
    {label: 'Home', path: '/'},
    {label: 'Alumni', path: '/alumni'},
    {label: 'Picture Gallery', path: '/media/picture-gallery'},
    {label: 'News & Events', path: '/media/news-events'},
    {label: 'Contact Us', path: '/contact'},
];

const Footer = () => {
    const { data: settings, errorSettings } = useSWR(`${serverUrl}/api/site-settings`);

    return (
        <section className={classes['wrapper']}>
            <div className={classes['top-section']}>
                <Row style={{width: '100%', padding: '2rem 3rem'}}>
                    <Col sm={12} md={4}>
                        <div className={classes['logo-wrapper']}>
                            <Link href={'/'} passHref>
                                <a>
                                    <Image src={settings?.logo?settings.logo:Logo} alt={'Site logo'}/>
                                </a>
                            </Link>
                        </div>
                        <p>{settings?.school_address?settings.school_address:`Plot CT19, Jikwoyi Behind Phase 1 Primary School, along Nyanya Karshi Road, Jikwoyi
                            Abuja.P.M.B 5167 Wuse Abuja.`}</p>
                        <p>{settings?.phone1?settings.phone1:`+234 (0) 8063200284`}, <br/>{settings?.phone2?settings.phone2:`+234 (0) 703 707 3858`},</p>
                    </Col>
                    <Col sm={12} md={4}>
                        <h3>Useful links</h3>
                        <ul className={classes['useful-links']}>
                            {footerLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.path} passHref>
                                        <a>{link.label}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col sm={12} md={4}>
                        <h3>Let&apos;s keep you up to date<br/>with our latest news.</h3>

                        <div className={'d-flex flex-column justify-content-start'} style={{
                            minHeight: '200px',
                            marginTop: '-1rem'
                        }}>
                            <div className={classes['news-letter-group']}>
                                <input type={'email'} placeholder={'Enter your email'}/>
                                <button type={'button'}>Submit</button>
                            </div>

                            <div className={'d-flex flex-column justify-content-center'}>
                                <h3 className={'my-2'}>Follow us</h3>
                                <div className={'my-3 pl-2'}>
                                    <a href={settings?.facebook_url?settings.facebook_url:`https://www.facebook.com/Cherryfield-College-Jikwoyi-Abuja-967601893433075/?modal=admin_todo_tour`}
                                       style={{marginLeft: '-12px'}}
                                       target={'_blank'} rel={'noreferrer'}>
                                        <FontAwesomeIcon
                                            icon={faFacebookF}
                                            color={'#ffffff'}
                                            style={{fontSize: '1.3rem'}}
                                            className={'mr-3'}
                                        />
                                    </a>

                                    <a href={settings?.twitter_url?settings.twitter_url:`https://twitter.com/cherryfieldcol2`} target={'_blank'} rel={'noreferrer'}>
                                        <FontAwesomeIcon
                                            icon={faTwitter}
                                            color={'#ffffff'}
                                            style={{fontSize: '1.3rem'}}
                                            className={'mr-3'}
                                        />
                                    </a>

                                    <a href={settings?.youtube_url?settings.youtube_url:`https://www.youtube.com/channel/UCLcGXRAMVX0KYauk9upBsZw`} target={'_blank'} rel={'noreferrer'}>
                                        <FontAwesomeIcon
                                        icon={faYoutube}
                                        color={'#ffffff'}
                                        style={{fontSize: '1.3rem'}}
                                        className={'mr-3'}
                                        />
                                    </a>

                                    <a href={settings?.google_plus_url?settings.google_plus_url:`https://plus.google.com/u/1/b/105173770675379002417/`} target={'_blank'} rel={'noreferrer'}>
                                        <FontAwesomeIcon
                                            icon={faGooglePlus}
                                            color={'#ffffff'}
                                            style={{fontSize: '1.3rem'}}
                                            className={'mr-3'}
                                        />
                                    </a>

                                    <a href={settings?.linkedin_url?settings.linkedin_url:`https://www.linkedin.com/company/cherryfield-college/`} target={'_blank'} rel={'noreferrer'}>
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            color={'#ffffff'}
                                            style={{fontSize: '1.3rem'}}
                                            className={'mr-3'}
                                        />
                                    </a>

                                    <a href={`mailto:${settings?.school_email?settings.school_email:'info@cherryfieldcollege.org.ng'}`} target={'_blank'} rel={'noreferrer'}>
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            color={'#ffffff'}
                                            style={{fontSize: '1.3rem'}}
                                            className={'mr-3'}
                                        />
                                    </a>
                                </div>
                            </div>

                            <div className={classes['educare-link']}>
                                <a href="https://educare.school" target={'_blank'} rel={'noreferrer'}>
                                    <Image
                                        src={Educare}
                                        alt={'Educare sponsor'}
                                        width={180}
                                    />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className={classes['affiliation-section']}>
                <span className={classes['affiliation-section-label']}>Affliations</span>
                <Image src={ASIA} alt={'asia'}/>
                <Image src={AISEN} alt={'aisen'}/>
                <Image src={ALLIANCE} alt={'alliance'}/>
                <Image src={COBI} alt={'cobi'}/>
                <Image src={CAMBRIDGE} alt={'cambridge'}/>
            </div>

            <div className={classes['copyright-section']}>
                <span>© 2021 The {settings?.display_name?settings.display_name:process.env.schoolName+`College`}</span>
                {/*<span>Contact us | Privacy policy</span>*/}
            </div>
        </section>
    );
};

export default Footer;
