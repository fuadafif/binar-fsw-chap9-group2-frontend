import { useState } from "react";
import axios from "axios";

// import file Bootstrap
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// fungsi dari form
function Form() {
  const [tampil, setTampil] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post("http://localhost:4000/login", {
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
    setEmail(document.getElementById("email").value);
    setPassword(document.getElementById("password").value);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submit}>
        <label for="username">
          Email
          <input
            type="text"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            id="email"
            name="email"
            placeholder="Email"
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
            placeholder="Password"
          />
        </label>

        <p>Forget password?</p>
        <button type="submit" onClick={login}>
          Login
        </button>
      </form>

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
  );
}

export default Form;
