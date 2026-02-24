// import React from 'react';
// import { Col, Container, Row} from "reactstrap";
// import {Link} from 'react-router-dom'

// const SignIn = () => {
//     return (
//         <div className="sign-in-bg">
//             <div className="app-wrapper d-block">
//                 <div className="main-container">
//                     <Container>
//                         <Row className="sign-in-content-bg">
//                             <Col lg={6} className="image-contentbox d-none d-lg-block">
//                                 <div className="form-container ">
//                                     <div className="signup-content mt-4">
//                 <span>
//                    <img src="../assets/images/logo/1.png" alt="" className="img-fluid "/>
//                 </span>
//                                     </div>

//                                     <div className="signup-bg-img">
//                                         <img src="../assets/images/login/04.png" alt="" className="img-fluid"/>
//                                     </div>
//                                 </div>

//                             </Col>
//                             <Col lg={6} className="form-contentbox">
//                                 <div className="form-container">
//                                     <form className="app-form">
//                                         <Row>
//                                             <Col xs={12}>
//                                                 <div className="mb-5 text-center text-lg-start">
//                                                     <h2 className="text-primary f-w-600">Welcome To RA-ADMIN! </h2>
//                                                     <p>Sign in with your data that you entered during your
//                                                         registration</p>
//                                                 </div>
//                                             </Col>
//                                             <Col xs={12}>
//                                                 <div className="mb-3">
//                                                     <label htmlFor="username" className="form-label">Username</label>
//                                                     <input type="text" className="form-control"
//                                                            placeholder="Enter Your Username" id="username"/>
//                                                 </div>
//                                             </Col>
//                                             <Col xs={12}>
//                                                 <div className="mb-3">
//                                                     <label htmlFor="password" className="form-label">Password</label>
//                                                     <Link to="/auth/password-reset" className="link-primary float-end">Forgot
//                                                         Password ?</Link>
//                                                     <input type="password" className="form-control"
//                                                            placeholder="Enter Your Password" id="password"/>
//                                                 </div>
//                                             </Col>
//                                             <Col xs={12}>
//                                                 <div className="form-check mb-3">
//                                                     <input className="form-check-input" type="checkbox" value=""
//                                                            id="checkDefault"/>
//                                                     <label className="form-check-label text-secondary"
//                                                            htmlFor="checkDefault">
//                                                         Remember me
//                                                     </label>
//                                                 </div>
//                                             </Col>
//                                             <Col xs={12}>
//                                                 <div className="mb-3">
//                                                     <Link to="/dashboard/ecommerce" role="button"
//                                                        className="btn btn-primary w-100">Sign In</Link>
//                                                 </div>
//                                             </Col>
//                                             <Col xs={12}>
//                                                 <div className="text-center text-lg-start">
//                                                     Don't Have Your Account yet? <Link to="/auth/sign-up"
//                                                                                     className="link-primary text-decoration-underline"> Sign up</Link>
//                                                 </div>
//                                             </Col>
//                                             <div className="app-divider-v justify-content-center">
//                                                 <p>Or sign in with</p>
//                                             </div>
//                                             <Col xs={12}>
//                                                 <div className="text-center">
//                                                     <button type="button"
//                                                             className="btn btn-facebook icon-btn b-r-22 m-1"><i
//                                                         className="ti ti-brand-facebook text-white"></i></button>
//                                                     <button type="button" className="btn btn-gmail icon-btn b-r-22 m-1">
//                                                         <i
//                                                             className="ti ti-brand-google text-white"></i></button>
//                                                     <button type="button"
//                                                             className="btn btn-github icon-btn b-r-22 m-1"><i
//                                                         className="ti ti-brand-github text-white"></i></button>
//                                                 </div>
//                                             </Col>
//                                         </Row>
//                                     </form>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignIn;

import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../../../Services/api/auth.api";

const SignIn = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");

      if (!username || !password) {
        setError("Please enter username and password");
        return;
      }

      try {
        setLoading(true);

        // 🔐 REAL BACKEND LOGIN
        const data = await loginApi({
          email: username,      // backend expects email
          password: password
        });

        // store token
        sessionStorage.setItem("token", data.token);
sessionStorage.setItem("user", JSON.stringify(data.user));

        // redirect
        navigate("/dashboard/dashboardoverview");
      } catch (err) {
        setError(
          err?.response?.data?.message || "Invalid credentials"
        );
      } finally {
        setLoading(false);
      }
    };


    // // 🔐 TEMP LOGIN (replace with API later)
    // if (username === "admin" && password === "admin") {
    //   localStorage.setItem("token", "demo-token");
    //   navigate("/dashboard/dashboardoverview"); // dashboard
    // } else {
    //   setError("Invalid credentials");
    // }
  

  return (
    <div className="sign-in-bg">
      <div className="app-wrapper d-block">
        <div className="main-container">
          <Container>
            <Row className="sign-in-content-bg">
              <Col lg={6} className="image-contentbox d-none d-lg-block">
                <div className="form-container">
                  <div className="signup-content mt-4">
                    <span style={{ display: "flex", justifyContent: "center" }}>
                      <h1>Bus Tracker</h1>
                    </span>

                  </div>
                  <div className="signup-bg-img">
                    <img
                      src="../assets/images/login/logo_signin-Picsart-AiImageEnhancer.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Col>

              <Col lg={6} className="form-contentbox">
                <div className="form-container">
                  <form className="app-form" onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12}>
                        <div className="mb-5 text-center text-lg-start">
                          <h2 className="text-primary f-w-600">
                            Welcome To <span className="text-danger">PSDAS-Tracker!</span>
                          </h2>
                          <p>
                            Sign in with your data that you entered during your
                            registration
                          </p>
                        </div>
                      </Col>

                      {error && (
                        <Col xs={12}>
                          <div className="alert alert-danger">
                            {error}
                          </div>
                        </Col>
                      )}

                      <Col xs={12}>
                        <div className="mb-3">
                          <label className="form-label">Username</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Username"
                            value={username}
                            onChange={(e) =>
                              setUsername(e.target.value)
                            }
                          />
                        </div>
                      </Col>

                      <Col xs={12}>
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <Link
                            to="/auth/password-reset"
                            className="link-primary float-end"
                          >
                            Forgot Password ?
                          </Link>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={(e) =>
                              setPassword(e.target.value)
                            }
                          />
                        </div>
                      </Col>

                      <Col xs={12}>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="remember"
                          />
                          <label
                            className="form-check-label text-secondary"
                            htmlFor="remember"
                          >
                            Remember me
                          </label>
                        </div>
                      </Col>

                      <Col xs={12}>
                        <div className="mb-3">
                          <button
                            type="submit"
                            className="btn btn-primary w-100"
                          >
                            Sign In
                          </button>
                        </div>
                      </Col>

                      <Col xs={12}>
                        <div className="text-center text-lg-start">
                          Don't Have Your Account yet?{" "}
                          <Link
                            to="/auth/sign-up"
                            className="link-primary text-decoration-underline"
                          >
                            Sign up
                          </Link>
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

export default SignIn;