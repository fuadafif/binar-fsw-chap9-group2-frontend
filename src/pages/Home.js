import HomeNav from "../components/navbar/HomeNav";
import Footer from "../components/Footer/Footer";
import PicProfile from "../assets/home/img/pic-profile.png";
import RPSGame from "../assets/home/img/rock-paper-scissors.jpg";
import SnakeGame from "../assets/home/img/snake-game.jpg";
import { useEffect } from "react";

import "../assets/home/css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  useEffect(() => {
    const emailKey = localStorage.getItem("email");
    if (emailKey) {
      document.getElementById("name").innerHTML = `Hola!! ${emailKey}`;
    }
  });

  return (
    <div>
      <HomeNav />
      <div className="text-center">
        <img src={PicProfile} alt="profile pic" className="profile"></img>
        <br />
        <h2 id="name"></h2>
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
              <p className="card-text">Rock-Paper-Scissors is a two-person hand game. This game is often used for random selection. The players choose one {`(eg, "Rock! Paper! Scissors!")`}. </p>
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
