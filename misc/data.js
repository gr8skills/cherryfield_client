import Slide1 from '/public/assets/images/cherry-banner.jpg';
import Slide2 from '/public/assets/images/img_2-sm.jpg';
import Slide3 from '/public/assets/images/img_3-sm.jpg';
import Slide4 from '/public/assets/images/img_4-sm.jpg';
import Slide5 from '/public/assets/images/img_5-sm.jpg';

import Gallery1 from '/public/assets/images/gallery/agric lab.JPG';
import Gallery2 from '/public/assets/images/gallery/classroom.JPG';
import Gallery3 from '/public/assets/images/gallery/Front view of the school.JPG';
import Gallery4 from '/public/assets/images/gallery/Biology lab.JPG';
import Gallery5 from '/public/assets/images/gallery/Visual art studio.JPG';
import Gallery6 from '/public/assets/images/gallery/Dining.JPG';
import Gallery7 from '/public/assets/images/gallery/school view.jpg';
import Gallery8 from '/public/assets/images/gallery/computer lab side.JPG';
import Gallery9 from '/public/assets/images/gallery/computer lab.jpg';
import Gallery10 from '/public/assets/images/gallery/Home economics lab.JPG';
import Gallery11 from '/public/assets/images/gallery/chemistry lab.JPG';
import Gallery12 from '/public/assets/images/gallery/Senior classroom block.JPG';
import Gallery13 from '/public/assets/images/gallery/Dining building.JPG';
import Gallery14 from '/public/assets/images/gallery/other indoor games.JPG';

import BOT from '/public/assets/images/background.jpg';


// import StaffMemberPrincipal from '/public/assets/images/principal.jpeg';
// import StaffMemberVicePrincipal from '/public/assets/images/idoko-godwin.jpeg';
// import StaffMemberDirector from '/public/assets/images/rueben.jpeg';
// import StaffDirectorLogistics from '/public/assets/images/stanley.jpeg';

import ArticleBanner1 from '/public/assets/images/img_7-sm.jpg';
import ArticleBanner2 from '/public/assets/images/img_8-sm.jpg';

import FacLib1 from '/public/assets/images/our-library1.jpg';
import FacLib2 from '/public/assets/images/our-library-31.jpg';
import FacLib22 from '/public/assets/images/our-library-21.jpg';

import FacLab1 from '/public/assets/images/our-lab.jpg';
import FacLab2 from '/public/assets/images/our-lab-2.jpg';

import FacHostel1 from '/public/assets/images/our-hostel.jpg';
import FacHostel2 from '/public/assets/images/our-hostel2.jpg';

import FacComLab1 from '/public/assets/images/ict-room-1.jpeg';
import FacComLab2 from '/public/assets/images/ict-room-2.jpeg';
import FacComLab3 from '/public/assets/images/computer-lab-3.jpg';

import FacSport1 from '/public/assets/images/sporting-1.jpg';
import FacSport2 from '/public/assets/images/sporting-2.jpg';
import FacSport3 from '/public/assets/images/sporting-3.jpg';

import FacBus1 from '/public/assets/images/transport-1.jpg';
import FacBus2 from '/public/assets/images/transport-2.jpg';
import FacBus3 from '/public/assets/images/transport-3.jpg';
import FacBus4 from '/public/assets/images/transport-4.jpg';

const articleContent = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ' +
    'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ' +
    'Content here, content here\', making it look like readable English. Many desktop publishing packages and web ' +
    'page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\'';

const navMenu = {
    description: 'The Cherry Field College aims at investing in the Nigerian girl child for the good of the society. ' +
        'We have both primary and secondary sections. Our school has a reputation of high moral and academic ' +
        'standards.',
    links: {
        about: [
            {text: 'Brief History', path: 'history'},
            {text: 'Chairman\'s Message', path: 'chairman-message'},
            {text: 'Principal\'s Desk', path: 'principal-desk'},
            {text: 'Management Structure', path: 'management-structure'},
            {text: 'Policies', path: 'policies'},
        ],
        academics: [
            {text: 'Curriculum', path: 'curriculum'},
            {text: 'School Structure', path: 'school-structure'},
            {text: 'Educational Tour', path: 'educational-tour'},
            {text: 'Result Analysis', path: 'result-analysis'},
            {text: 'Academic Calendar', path: 'academic-calendar'},
        ],
        admission: [
            {text: 'Admission Procedure', path: ''},
        ],
        media: [
            {text: 'News & Events', path: 'news-events'},
            {text: 'CFC Magazine', path: 'magazine'},
            {text: 'Blog', path: 'blog'},
            {text: 'Picture Gallery', path: 'picture-gallery'},
            {text: 'Video Gallery', path: 'video-gallery'},
            {text: 'Downloads', path: 'downloads'},
        ],
        facilities: [
            {text: 'Facilities', path: ''}
        ]
    }
};

const slideImages = [
    {img: Slide2, sn: 2},
    {img: Slide3, sn: 3},
    {img: Slide4, sn: 4},
    {img: Slide5, sn: 5},
    {img: Slide1, sn: 1}
];

const galleryImages = [
    Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8, Gallery9, Gallery10, Gallery11,
    Gallery12, Gallery13, Gallery14,
];

const BOTMembers = [
    {
        id: 1,
        name: 'Cdr Emmanuel Ekoja Ajenu fss pjsc NDSS NIM B.SC (Hons)(rtd)',
        title: 'Chairman, Board of Directors',
        image: BOT
    },
    {
        id: 2,
        name: 'LT.COL. ENGR. AKOR JAC, DSM,NSM,RM,GSM,SJB,FSS,Psc(+)(rtd)',
        title: 'Chairman, Board of Directors',
        image: BOT
    },
    {
        id: 3,
        name: 'Prof. Innocent A. O. Ujah IMBBS,FMCOG,FICS,PGDM,FNSEM,MNI Director – General (NIMR) Yaba, Lagos, Nigeria',
        title: 'Member, Board of Governors',
        image: BOT
    },
    {
        id: 4,
        name: 'Prof. P.B. Onaji',
        title: 'Member, Board of Governors',
        image: BOT
    },
    {
        id: 5,
        name: 'Engr. John Agbara',
        title: 'Member, Board of Governors',
        image: BOT
    },
    {
        id: 6,
        name: 'Barr. Boniface M.O.Enejor,Esq',
        title: 'Member, Board of Governors',
        image: BOT
    },
    {
        id: 7,
        name: 'Mr Johnmary Idoko',
        title: 'Member, Board of Governors',
        image: BOT
    },
    {
        id: 8,
        name: 'Mr Raphael Odoh',
        title: 'Member, Board of Governors',
        image: BOT
    },
];

const staffMembers = [
    {
        id: 1,
        name: 'Mrs. Olga Igbo',
        title: 'Principal',
        // image: StaffMemberPrincipal
        image: BOT
    },
    {
        id: 2,
        name: 'Mr Idoko  Godwin Adamu',
        title: 'Vice Principal Admin',
        // image: StaffMemberVicePrincipal
        image: BOT
    },
    {
        id: 3,
        name: 'Mr. Reuben Benard Jerry',
        title: 'Director of Studies',
        // image: StaffMemberDirector
        image: BOT
    },
    {
        id: 4,
        name: 'Mr Stanley A. Ajenu',
        title: 'Director of Logistics Procurement',
        // image: StaffDirectorLogistics
        image: BOT
    },
];

const eventsPost = [
    {
        sn: 1,
        title: 'Annual new yam festival.',
        date: 'December 5, 2019',
        image: ArticleBanner1,
    },
    {
        sn: 2,
        title: 'Career development seminar at Nile University of Nigeria.',
        date: 'December 5, 2019',
        image: ArticleBanner2,
    },
];

const facilities = {
    library: {
        images: [FacLib1, FacLib2, FacLib22]
    },
    laboratory: {
        images: [FacLab1, FacLab2]
    },
    hostel: {
        images: [FacHostel1, FacHostel2]
    },
    computerLab: {
        images: [FacComLab1, FacComLab2, FacComLab3]
    },
    sporting: {
        images: [FacSport1, FacSport2, FacSport3]
    },
    buses: {
        images: [FacBus1, FacBus2, FacBus3, FacBus4]
    }
}

export {
    articleContent,
    BOTMembers,
    eventsPost,
    facilities,
    galleryImages,
    navMenu,
    slideImages,
    staffMembers
};
