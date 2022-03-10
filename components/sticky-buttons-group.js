import React, {useEffect, useState} from "react";

import Image from "next/image";
import {useRouter} from "next/router";

import classes from './sticky-buttons-group.module.css';
import StickyButton1Active from '/public/assets/images/sticky_btn_active-1.png';
import StickyButton1AInactive from '/public/assets/images/sticky_btn_inactive-1.png';
import StickyButton2Active from '/public/assets/images/sticky_btn_active-2.png';
import StickyButton2Inactive from '/public/assets/images/sticky_btn_inactive-2.png';
import StickyButton3Active from '/public/assets/images/sticky_btn_active-3.png';
import StickyButton3Inactive from '/public/assets/images/sticky_btn_inactive-3.png';
import StickyButton4Active from '/public/assets/images/sticky_btn_active-4.png';
import StickyButton4Inactive from '/public/assets/images/sticky_btn_inactive-4.png';


const StickyButtonsGroup = () => {
    const router = useRouter();

    const [button1, setButton1] = useState(true);
    const [button2, setButton2] = useState(true);
    const [button3, setButton3] = useState(true);
    const [button4, setButton4] = useState(true);
    const [activeLink, setActiveLink] = useState({
        active1: false,
        active2: false,
        active3: false,
        active4: false,
    });

    const toggleState1 = () => setButton1(prevState => !prevState);
    const toggleState2 = () => setButton2(prevState => !prevState);
    const toggleState3 = () => setButton3(prevState => !prevState);
    const toggleState4 = () => setButton4(prevState => !prevState);

    useEffect(() => {

    }, [router.pathname]);

    return (
        <div className={classes['sticky-container']}>
            {/*<button className={`${activeLink.active1 ? classes['active'] : ''}`}*/}
            {/*        onMouseEnter={toggleState1}*/}
            {/*        onMouseLeave={toggleState1}>*/}
            {/*    {button1 && <Image src={StickyButton1Active} alt={''}/>}*/}
            {/*    {!button1 && <Image src={StickyButton1AInactive} alt={''}/>}*/}
            {/*    Search*/}
            {/*</button>*/}

            <button className={`${activeLink.active2 || activeLink.active4 ? classes['active'] : ''}`}
                    onClick={() => router.push('/contact')}
                    onMouseEnter={toggleState2}
                    onMouseLeave={toggleState2}>
                {button2 && <Image src={StickyButton2Active} alt={''}/>}
                {!button2 && <Image src={StickyButton2Inactive} alt={''}/>}
                Inquire
            </button>

            <button className={`${activeLink.active3 ? classes['active'] : ''}`}
                    onClick={() => router.push('/admission')}
                    onMouseEnter={toggleState3}
                    onMouseLeave={toggleState3}>
                {button3 && <Image src={StickyButton3Active} alt={''}/>}
                {!button3 && <Image src={StickyButton3Inactive} alt={''}/>}
                Apply
            </button>

            <button className={`${activeLink.active2 || activeLink.active4 ? classes['active'] : ''}`}
                    onClick={() => router.push('/contact')}
                    onMouseEnter={toggleState4}
                    onMouseLeave={toggleState4}>
                {button4 && <Image src={StickyButton4Active} alt={''}/>}
                {!button4 && <Image src={StickyButton4Inactive} alt={''}/>}
                <span className={'mt-1'}>Visit us</span>
            </button>
        </div>
    );
};

export default StickyButtonsGroup;
