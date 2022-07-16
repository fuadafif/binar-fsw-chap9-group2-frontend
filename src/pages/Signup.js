import { useState } from "react";
import axios from "axios";

// import file Bootstrap
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// fungsi dari form
function Form() {
  const [tampil, setTampil] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    axios
      .post("http://localhost:4000/register", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result);
      });
  };

  // fungsi event
  function submit(event) {
    event.preventDefault();
    setTampil(true);
    setUsername(document.getElementById("username").value);
    setEmail(document.getElementById("email").value);
    setPassword(document.getElementById("password").value);
  }
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={submit}>
        <label for="username">
          Username
          <input
            type="text"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            id="username"
            name="username"
            placeholder="Enter a Username"
          />
        </label>

        <br />

        <label for="email">
          E-mail
          <input
            type="text"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            id="email"
            name="email"
            placeholder="Enter your e-mail address"
          />
        </label>

        <br />

        <label for="password">
          Password
          <input
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            id="password"
            name="password"
            placeholder="Enter your Password"
          />
        </label>

        <br />

        <button type="submit" onClick={register}>
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Form;
