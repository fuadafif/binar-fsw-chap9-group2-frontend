import LandingNav from "../components/navbar/HomeNav";

import "./home-assets/css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
      <LandingNav />
      <div className="text-center">
        <img src="/player.png" alt="profile pic" className="profile"></img>
        <br />
        <h2>Username</h2>
      </div>

      <hr />

      <h1 className="text-center bold">TOP GAMES</h1>

      <br />

      <div className="container-games">
        <div className="col game">
          <div className="card">
            <img src="/rock-paper-scissors.png" className="card-img-top" alt="rock paper scissor" />
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
          <div className="card ">
            <img src="/snake-game.webp" className="card-img-top" alt="snake" />
            <div className="card-body">
              <h5 className="card-title">Snake</h5>
              <p className="card-text">
                The player controls a long, thin creature, resembling a snake, which roams around on a bordered plane, picking up food (or some other item), trying to avoid hitting its own tail or the edges of the playing area.{" "}
              </p>
              <a href="#" class="btn btn-primary">
                Play Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
