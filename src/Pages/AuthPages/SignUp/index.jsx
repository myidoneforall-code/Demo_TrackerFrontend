import React from 'react';
import {Col, Container, Row} from "reactstrap";
import {Link} from 'react-router-dom'

const SignUp = () => {
    return (
        <div className="sign-in-bg">
            <div className="app-wrapper d-block">
                <div className="main-container">

                    <Container>
                        <Row className="sign-in-content-bg">
                            <Col lg={6} className="image-contentbox d-none d-lg-block">
                                <div className="form-container">

                                    <div className="signup-content mt-4">
                    <span>
                      <img src="../assets/images/logo/1.png" alt="" className="img-fluid "/>
                    </span>
                                    </div>

                                    <div className="signup-bg-img">
                                        <img src="../assets/images/login/02.png" alt="" className="img-fluid"/>
                                    </div>

                                </div>
                            </Col>
                            <Col lg={6} className="form-contentbox">
                                <div className="form-container">
                                    <form className="app-form">
                                        <Row>
                                            <Col xs={12}>
                                                <div className="mb-5 text-center text-lg-start">
                                                    <h2 className="text-primary f-w-600">Create Account</h2>
                                                    <p>Get Started For Free Today!</p>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="mb-3">
                                                    <label htmlFor="username" className="form-label">Username</label>
                                                    <input type="text" className="form-control"
                                                           placeholder="Enter Your Username" id="username"
                                                           required/>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="mb-3">
                                                    <label htmlFor="username" className="form-label">Email</label>
                                                    <input type="email" className="form-control"
                                                           placeholder="Enter Your Email" id="email" required/>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                    <input type="password" className="form-control"
                                                           placeholder="Enter Your Password" id="password"
                                                           required/>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Confirm
                                                        Password</label>
                                                    <input type="password" className="form-control"
                                                           placeholder="Enter Your Password" id="password1"
                                                           required/>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="d-flex justify-content-between gap-3">
                                                    <div className="form-check mb-3">
                                                        <input className="form-check-input" type="checkbox" value=""
                                                               id="checkDefault"/>
                                                        <label className="form-check-label text-secondary"
                                                               htmlFor="checkDefault">
                                                            Accept Terms & Conditions
                                                        </label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="mb-3">
                                                    <Link to="/dashboard/ecommerce" role="button"
                                                       className="btn btn-primary w-100">Sign Up</Link>
                                                </div>
                                            </Col>
                                            <Col xs={12}>
                                                <div className="text-center text-lg-start">
                                                    Already Have A Account? <Link to="/auth/sign-in"
                                                                               className="link-primary text-decoration-underline"> Sign in</Link>
                                                </div>
                                            </Col>
                                            <div className="app-divider-v justify-content-center">
                                                <p>Or sign up with</p>
                                            </div>
                                            <Col xs={12}>
                                                <div className="text-center">
                                                    <button type="button"
                                                            className="btn btn-facebook icon-btn b-r-22 m-1"><i
                                                        className="ti ti-brand-facebook text-white"></i></button>
                                                    <button type="button" className="btn btn-gmail icon-btn b-r-22 m-1">
                                                        <i
                                                            className="ti ti-brand-google text-white"></i></button>
                                                    <button type="button"
                                                            className="btn btn-github icon-btn b-r-22 m-1"><i
                                                        className="ti ti-brand-github text-white"></i></button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
