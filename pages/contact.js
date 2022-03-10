import React, {useRef, useState} from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import classes from './about/about-pages.module.css';
import BannerImage from '/public/assets/images/cherry-hero-1.jpeg';
import Layout from "../components/layouts/layout";
import Button from "react-bootstrap/Button";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons/faPaperPlane";

const navLinks = [
    {text: 'Contact us', path: ''}
];

const ContactPage = () => {
    const [formValidated, setFormValidated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);
    const messageInputRef = useRef(null);

    const onFormSubmitHandler = (e) => {
        e.preventDefault()

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setFormValidated(true);
            return;
        }

        setIsLoading(true);

        const formData = {
            name: nameInputRef.current.value,
            email: emailInputRef.current.value,
            message: messageInputRef.current.value
        };

        setTimeout(() => {
            setIsLoading(false);
            form.reset();
            setFeedbackSubmitted(true)
            window.scrollTo({
                top: 400,
                behavior: "smooth"
            });
        }, 1500);

        console.log('formData => ', formData);
    };

    return (
        <Layout
            activeLinkText={'Contact'}
            bannerImage={BannerImage}
            navLinks={navLinks}
            parentLinkText={'Media'}
        >
            <Container>
                <Row>

                    <Col md={8}>
                        {!feedbackSubmitted && (
                            <Form noValidate validated={formValidated} onSubmit={onFormSubmitHandler}>
                                <Form.Group controlId={'name'}>
                                    <Form.Label>Name <span className={'text-danger'}>*</span></Form.Label>
                                    <Form.Control
                                        ref={nameInputRef}
                                        type={'text'}
                                        required
                                    />
                                    <Form.Control.Feedback type={'invalid'}>
                                        Your full name is required.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId={'email'}>
                                    <Form.Label>Email <span className={'text-danger'}>*</span></Form.Label>
                                    <Form.Control
                                        ref={emailInputRef}
                                        type={'email'}
                                        required
                                    />
                                    <Form.Control.Feedback type={'invalid'}>
                                        Email address is required.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId={'message'}>
                                    <Form.Label>Message <span className={'text-danger'}>*</span></Form.Label>
                                    <Form.Control
                                        as={'textarea'}
                                        ref={messageInputRef}
                                        rows={10}
                                        required
                                    />
                                    <Form.Control.Feedback type={'invalid'}>
                                        Message is required.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button
                                    type={'submit'}
                                    variant={'info'}
                                >
                                    {!isLoading && <span>Submit Feedback <FontAwesomeIcon icon={faPaperPlane}/></span>}
                                    {isLoading && (
                                        <Spinner animation={'border'} size={'sm'} color={'#ffffff'}/>
                                    )}
                                </Button>
                            </Form>
                        )}

                        {feedbackSubmitted && (
                            <div className={'pb-5 pt-3 mb-5 text-center'}>
                                <h3>Thank you!</h3>
                                <h4>Your feedback has been submitted successfully. You will hear from us soon.</h4>
                            </div>
                        )}
                    </Col>

                    <Col md={4}>
                        <p className={`${classes['intro-text']} m-0`}>Administration:</p>
                        <div className={classes['regular-text']}>Phone: +234 (0) 8063200284, 8036925761</div>
                        <div className={classes['regular-text']}>
                            Email: info@cherryfieldcollege.org.ng,
                        </div>

                        <p className={`${classes['intro-text']} mb-0 mt-5`}>Principal:</p>
                        <div className={classes['regular-text']}>Phone: +234 (0) 703 707 3858,</div>
                        <div className={classes['regular-text']}>Email: principal@cherryfieldcollege.org.ng</div>

                        <p className={`${classes['intro-text']} mb-0 mt-5`}>Admissions:</p>
                        <div className={classes['regular-text']}>Phone: +234 (0) 908 433 3338,</div>
                        <div className={classes['regular-text']}>Email: admissions@cherryfieldcollege.org.ng</div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default ContactPage;

