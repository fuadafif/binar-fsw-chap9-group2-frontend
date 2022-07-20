// import { Img } from "reactstrap";

import LandingNav from "../components/navbar/HomeNav";

import "./home-assets/css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <LandingNav />
      <img src="./home-assets/img/player.png" alt="profile picture"></img>
      <h5>Username</h5>

      <hr />

      <div className="col">
        <div className="card">
          <a href="/play-game">
            <img src="./home-assets/img/rock-paper-scissors.png" class="card-img-top" alt="Rock Paper Scissor" />
          </a>
          <div className="card-body">
            <h5 className="card-title">Rock Paper Scissor</h5>
            <p className="card-text">Rock-Paper-Scissors is a two-person hand game. This game is often used for random selection. The players choose one {`(eg, "Rock! Paper! Scissors!")`}. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
