import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate as navigate } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import "./signup-assets/css/Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const [tampil, setTampil] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    setTampil(true);
    setUsername(document.getElementById("username").value);
    setEmail(document.getElementById("email").value);
    setPassword(document.getElementById("password").value);

    if (event) {
      alert("Register successful");
      navigate("/login");
    }
  }

  return (
    <div className="Form">
      <h1>SIGN UP</h1>
      <Form inline>
        <FormGroup onSubmit={submit}>
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
        </FormGroup>{" "}
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
        <Button type="submit" onClick={register}>
          Create Account
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
