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

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const emailKey = localStorage.getItem("email");
    const name = document.getElementById("name");
    const logoutButton = document.getElementById("logout");
    if (emailKey) {
      name.innerHTML = `Hi!! ${emailKey}`;
      logoutButton.hidden = false;
    } else {
      name.innerHTML = `Welcome`;
      logoutButton.hidden = true;
    }
  });

  function logout() {
    const removeEmail = "email";
    const removeAuth = "isAuthenticated";
    window.confirm("Are you sure want to logout?");
    localStorage.removeItem(removeEmail);
    localStorage.removeItem(removeAuth);
    window.location.reload();
    navigate("/home");
  }

  return (
    <div className="pg-css">
      <HomeNav />
      <div className="text-center">
        <img src={PicProfile} alt="profile pic" className="profile"></img>
        <br />
        <h2 id="name"></h2>
        <button onClick={logout} className="btn btn-danger" id="logout" hidden>
          Logout
        </button>
      </div>

      <hr />

      <h1 className="text-center bold">TOP GAMES</h1>

      <br />

      <div className="container-games">
        <div className="col game">
          <div className="card">
            <img src={RPSGame} className="card-img-top img-game" alt="rock paper scissor" />
            <div className="card-body">
              <h5 className="card-title">Rock Paper Scissor</h5>
              <p className="card-text">
                Rock-Paper-Scissors is a two-person hand game. This game is often used for random selection. The players choose one {`(eg, "Rock! Paper! Scissors!")`}.
                <br />
                <br />
              </p>
              <a href="/play-game" class="btn btn-primary">
                Play Now
              </a>
            </div>
          </div>
        </div>

        <div className="col game">
          <div className="card">
            <img src={SnakeGame} className="card-img-top img-game" alt="snake" />
            <div className="card-body">
              <h5 className="card-title">Snake</h5>
              <p className="card-text">
                The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food, trying to avoid hitting its own tail or the edges of the playing area.
                <br />
              </p>
              <a href="/home" class="btn btn-primary">
                Play Now
              </a>
            </div>
          </div>
        </div>

        <div className="col game">
          <div className="card">
            <img src={Chess} className="card-img-top img-game" alt="snake" />
            <div className="card-body">
              <h5 className="card-title">Chess</h5>
              <p className="card-text">
                Chess is a board game played between two players.
                <br />
                <br />
                <br />
                <br />
              </p>
              <a href="/home" class="btn btn-primary">
                Play Now
              </a>
            </div>
          </div>
        </div>

        <div className="col game">
          <div className="card">
            <img src={Solitaire} className="card-img-top img-game" alt="snake" />
            <div className="card-body">
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
        </div>

        <div className="col game">
          <div className="card">
            <img src={CTR} className="card-img-top img-game" alt="snake" />
            <div className="card-body">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
