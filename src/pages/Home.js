import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HomeNav from "../components/navbar/HomeNav";
import Footer from "../components/Footer/Footer";

import "../assets/home/css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

import PicProfile from "../assets/home/img/pic-profile.png";
import RPSGame from "../assets/home/img/rock-paper-scissors.jpg";
import SnakeGame from "../assets/home/img/snake-game.jpg";
import Chess from "../assets/home/img/chess.webp";
import Solitaire from "../assets/home/img/solitaire.jpeg";
import CTR from "../assets/home/img/ctr.jpeg";
import Tetris from "../assets/home/img/tetris.jpeg";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const emailKey = localStorage.getItem("email");
    const name = document.getElementById("name");
    const logoutButton = document.getElementById("logout");
    const loginButton = document.getElementById("login");
    if (emailKey) {
      name.innerHTML = `Halo ${emailKey}`;
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
    const score = "SCORE";
    window.confirm("Are you sure want to logout?");
    localStorage.removeItem(removeEmail);
    localStorage.removeItem(removeAuth);
    localStorage.removeItem(score);
    window.location.reload();
    navigate("/home");
  }

  function login() {
    navigate("/login");
  }

  return (
    <div className="">
      <HomeNav />
      <div className="text-center">
        <a href="/profile">
          <img src={PicProfile} alt="profile pic" className="profile"></img>
        </a>
        <br />
        <h4 id="name"></h4>
        <button onClick={logout} className="btn btn-danger" id="logout" hidden>
          Logout
        </button>
        <button onClick={login} className="btn btn-primary" id="login" hidden>
          Login
        </button>
      </div>

      <hr />

      <h1 className="text-center bold">TOP GAMES</h1>

      <br />

      <div className="container-fluid ">
        {/* 1 */}
        <div className="card game ">
          <img src={RPSGame} className="card-img-top img-game" alt="rock paper scissor" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Rock Paper Scissor</h5>
            <p className="card-text">
              Rock-Paper-Scissors is a two-person hand game. This game is often used for random selection. The players choose one {`(eg, "Rock! Paper! Scissors!")`}. Each player holds out their fist for rock, flat hand for paper, or their
              index and middle finger for scissors. Rock crushes scissors, scissors cut paper, and paper covers rock. See who wins each round!
              <br />
              <br />
            </p>
            <a href="/play-game" class="btn btn-primary">
              Play Now
            </a>
          </div>
        </div>

        {/* 2 */}

        <div className="card game">
          <img src={SnakeGame} className="card-img-top img-game" alt="snake" />
          <div className="card-body  d-flex flex-column">
            <h5 className="card-title">Snake</h5>
            <p className="card-text">
              The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food, trying to avoid hitting its own tail or the edges of the playing area. Each time the snake eats a piece of
              food, its tail grows longer, making the game increasingly difficult.
            </p>
            <a href="/home" class="btn btn-primary">
              Play Now
            </a>
          </div>
        </div>

        {/* 3 */}

        <div className="card game ">
          <img src={Chess} className="card-img-top img-game" alt="snake" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Chess</h5>
            <p className="card-text">
              Chess is one of the oldest and most popular board games. It is played by two opponents on a checkered board with specially designed pieces of contrasting colours, commonly white and black. The objective of the game is to
              capture the opponent's king.
            </p>
            <a href="/home" class="btn btn-primary">
              Play Now
            </a>
          </div>
        </div>

        {/* 4 */}

        <div className="card game ">
          <img src={Solitaire} className="card-img-top img-game" alt="snake" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Solitaire</h5>
            <p className="card-text">
              Patience, card solitaire or solitaire, is a genre of card games whose common feature is that the aim is to arrange the cards in some systematic order.
              <br />
              <br />
            </p>
            <a href="/home" class="btn btn-primary">
              Play Now
            </a>
          </div>
        </div>

        {/* 5 */}
        <div className="card game">
          <img src={CTR} className="card-img-top img-game" alt="snake" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Crash Team Racing</h5>
            <p className="card-text">
              The game's story focuses on the efforts of Crash Bandicoot, Doctor Neo Cortex, who must race against the egomaniacal Nitros Oxide to save the Earth from destruction.
              <br />
              <br />
            </p>
            <a href="/home" class="btn btn-primary">
              Play Now
            </a>
          </div>
        </div>

        {/* 6 */}
        <div className="card game">
          <img src={Tetris} className="card-img-top img-game" alt="snake" />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Tetris</h5>
            <p className="card-text">
              The goal of the game is to prevent the blocks from stacking up to the top of the screen for as long as possible.
              <br />
              <br />
            </p>
            <a href="/home" class="btn btn-primary">
              Play Now
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
