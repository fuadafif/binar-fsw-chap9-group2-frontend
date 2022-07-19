import React from "react";
import axios from "axios";
import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

import "./login-assets/css/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [tampil, setTampil] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();
    setTampil(true);
    setEmail(document.getElementById("email").value);
    setPassword(document.getElementById("password").value);

    try {
      const result = await axios.post("http://localhost:4000/login", {
        email: email,
        password: password,
      });
      alert(result.data.message);
      navigate('/home');
    } catch (err) {
      alert("incorrect username or password!");
    }
  }

  return (
    <div className="Form container text-center d-flex vh-100">
      <div className="element mx-auto my-auto col-8"> 
      <h1 className="text-center p-3">LOGIN</h1>

        <Form inline onSubmit={submit}>
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
          <a href="#">Forget password?</a>
          <br/>
          <br/>
          <Button color="primary" type="submit">Login</Button>
        </Form>
        <p>
          {tampil && (
            <>
              <div className="box-view">
                <span>Email</span> : {email}
                <br />
                <span>Password</span> : {password}
              </div>
            </>
          )}
        </p>
        
      </div>
    </div>
  );
}

export default Login;
