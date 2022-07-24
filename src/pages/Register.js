import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import Logo from "../assets/login/img/li-logo-2.png";
import Navbar from "../components/navbar/RegistLoginNav";

import "../assets/register/css/Register.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = (req, res) => {
    axios
      .post("http://localhost:4000/register", {
        username: username,
        email: email,
        password: password,
      })

      .then((result) => {
        console.log(result);
      });
  };

  function submit(event) {
    event.preventDefault();

    if (event) {
      alert("Register successful");
      navigate("/login");
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
                      <h2 className="fw-normal mb-3 pb-3 sign-css">Register your account</h2>
                      <FormGroup>
                        <Label for="username" hidden>
                          Username
                        </Label>
                        <Input
                          onChange={(event) => {
                            setUsername(event.target.value);
                          }}
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Enter a Username"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="email" hidden>
                          E-mail address
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
                      </FormGroup>
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
                          for="password"
                        />
                      </FormGroup>
                      <div className="pt-1 mb-4">
                        <Button type="submit" className="btn btn-dark btn-lg btn-block" onClick={register}>
                          Create Account
                        </Button>
                      </div>
                      <p className="small mb-5 pb-lg-2 d-acnt-css">
                        Already have an account?{" "}
                        <a href="/login" className="reg-css">
                          Login here
                        </a>
                      </p>
                      <hr />
                      <div className="text-center">
                        <p>or sign up with:</p>
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

export default Register;
