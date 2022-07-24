import HomeNav from "../components/navbar/HomeNav"
import Footer from "../components/Footer/Footer";
import "../assets/home/css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RPSGame from "../assets/home/img/rock-paper-scissors.jpg";
import SnakeGame from "../assets/home/img/snake-game.jpg";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PicProfile from '../assets/home/img/pic-profile.png';

function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    const emailKey = localStorage.getItem("email");
    const name = document.getElementById('name');
    const logoutButton = document.getElementById("logout");

    if (emailKey) {
    const loginButton = document.getElementById("login");
      name.innerHTML = `Hi!! ${emailKey}`;
      logoutButton.hidden = false;
    } else {
      name.innerHTML = `Welcome`;
      logoutButton.hidden = true;
      loginButton.hidden = false;
    }
  });

  function logout() {
    const removeEmail = "email";
    const removeAuth = "isAuthenticated";
    window.confirm("Are you sure want to logout?");
    localStorage.removeItem(removeEmail);
    localStorage.removeItem(removeAuth);
    window.location.reload();
    navigate('/home');
  }

  function login() {
    navigate('/login');
  }

  return (
    <div>
      <HomeNav />
      <div className="text-center">
        <img src={PicProfile} alt="profile pic" className="profile"></img>
        <br />
        <h2 id="name"></h2>
        <button onClick={logout} className="btn btn-danger" id="logout" hidden>Logout</button>
        <button onClick={login} className="btn btn-primary" id="login" hidden>Login</button> 
      </div>


      <hr />

      <h1 className="text-center bold">TOP GAMES</h1>

      <br />

      <div className="container-games">
        <div className="">
          <div className="card">
            <img src={RPSGame} className="card-img-top img-game" alt="rock paper scissor" />
            <div className="card-body">
              <h5 className="card-title">Rock Paper Scissor</h5>
              <p className="card-text">Rock-Paper-Scissors is a two-person hand game. This game is often used for random selection. The players choose one {`(eg, "Rock! Paper! Scissors!")`}. </p>
              <a href="/play-game" class="btn btn-primary">
                Play Now
              </a>
            </div>
          </div>
        </div>

        <div className="">
          <div className="card">
            <img src={SnakeGame} className="card-img-top img-game" alt="snake" />
            <div className="card-body">
              <h5 className="card-title">Snake</h5>
              <p className="card-text">
                The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food (or some other item), trying to avoid hitting its own tail or the edges of the playing area.{" "}
              </p>
              <a href="/home" class="btn btn-primary">
                Play Now
              </a>
            </div>
          </div>
          <div className="card">
            <img src={SnakeGame} className="card-img-top img-game" alt="snake" />
            <div className="card-body">
              <h5 className="card-title">Snake</h5>
              <p className="card-text">
                The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food (or some other item), trying to avoid hitting its own tail or the edges of the playing area.{" "}
              </p>
              <a href="/home" class="btn btn-primary">
                Play Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
