import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import Navbar from "../components/navbar/RegistLoginNav";
import Logo from "../assets/login/img/li-logo-2.png";
import "../assets/login/css/Login.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const emailKey = localStorage.getItem("email");

    isAuthenticated ? alert("User already login") : navigate('/login');

    if (isAuthenticated && emailKey) {
      navigate("/home");
    }
  }, []);

  async function submit(event) {
    event.preventDefault();
    const emailValue = email;

    try {
      const result = await axios.post("http://localhost:4000/login", {
        email: email,
        password: password,
      });
      alert(result.data.message);
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("email", emailValue);
      navigate("/home");
    } catch (err) {
      alert("You don't have an account, create your account");
    }
  }

  return (
    <div className="vh-100 section-css">
      <Navbar />
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card card-css">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src={Logo} alt="login form" className="img-fluid img-f-css" />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center bg">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <Form inline onSubmit={submit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3 i-cubes-css"></i>
                        {/* <span className="h1 fw-bold mb-0"></span> */}
                      </div>

                      <h2 className="fw-normal mb-3 pb-3 sign-css">Sign into your account</h2>

                      <FormGroup>
                        <Label for="email" hidden>
                          E-mail
                        </Label>
                        <Input
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Enter your e-mail address"
                        />
                      </FormGroup>{" "}
                      <FormGroup>
                        <Label for="password" hidden>
                          Password
                        </Label>
                        <Input
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Enter your Password"
                        />
                      </FormGroup>{" "}
                      <div className="pt-1 mb-4">
                        <Button className="btn btn-dark btn-lg btn-block" type="submit">
                          Login
                        </Button>
                      </div>

                      <a className="small fgt-pss-css" href="#!">
                        Forgot password?
                      </a>
                      <p className="small mb-5 pb-lg-2 d-acnt-css">
                        Don't have an account?{" "}
                        <a href="/register" className="reg-css">
                          Register here
                        </a>
                      </p>

                      <hr />

                      <div className="text-center">
                        <p>or login with:</p>
                        <a href="https://www.facebook.com/" type="button" className="btn-lg fs-5">
                          <FaFacebookF />{" "}
                        </a>
                        <a href="https://twitter.com/" type="button" className="btn-lg fs-5">
                          <FaTwitter />{" "}
                        </a>
                        <a href="https://www.google.com/" type="button" className="btn-lg fs-5">
                          <FaGoogle />
                        </a>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
