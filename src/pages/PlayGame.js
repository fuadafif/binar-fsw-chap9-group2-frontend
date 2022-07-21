import "../assets/game/css/game.css";
import "../assets/game/css/bootstrap.min.css";
import "../assets/game/css/bootstrap-reboot.min.css";
import { useNavigate } from "react-router-dom";

function PlayGame() {
  const navigate = useNavigate();

  function game() {
    navigate("/rock-paper-scissors");
  }

  function backToHome() {
    navigate("/home");
  }

  return (
    <div className="play-game">
      <div className="container text-center d-flex vh-100">
        <div className="mx-auto my-auto col-8">
          <button onClick={game} className="button btn btn-success">
            Play Game
          </button>
          <br />
          <br />
          <button onClick={backToHome} className="button btn btn-dark">
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayGame;
